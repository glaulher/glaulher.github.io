---
title: 'Java no Neovim'
metaDesc: 'Desenvolvendo em Java com Neovim: é possível?'
coverImage: '/assets/blog/post/nvimjava.webp'

author:
  name: Glaulher Medeiros
  picture: '/assets/blog/authors/glaulher.jpeg'

ogImage:
  url: '/assets/blog/post/nvimjava.webp'

publishedDate: '2025-07-12T16:34:00Z'
tags: [editor,neovim, lua, java]
---

---

## 🛠️ Desenvolvendo em Java com Neovim: é possível?
Muita gente acredita que programar em Java exige uma infraestrutura pesada e uma IDE robusta, como o IntelliJ. De fato, essas ferramentas oferecem recursos poderosos. Mas será que é possível ter uma experiência produtiva usando apenas o Neovim?

Desde que passei a usar distribuições Linux no dia a dia, tenho experimentado o Neovim cada vez mais. VS Code e Neovim se tornaram meus editores preferidos e, ao estudar Java, decidi explorar a possibilidade de usá-lo também nessa linguagem. A complexidade do ecossistema Java e a dependência de ferramentas completas são justamente os principais desafios.

Com os avanços do Neovim, do protocolo de servidor de linguagem (LSP) e do protocolo de depuração (DAP), é totalmente viável transformá-lo em um ambiente de desenvolvimento moderno para Java — com navegação de código, autocompletar, refatoração e até depuração.

Neste post, vou mostrar como configurar o Neovim como uma verdadeira IDE para Java, utilizando jdtls, nvim-dap, springboot.nvim e outros plugins essenciais.

---

## ✅ Requisitos iniciais

### ☕ Estruturando o Suporte a Java no Kickstart.nvim
- Neste guia, estamos utilizando o [**Kickstart.nvim**](https://github.com/nvim-lua/kickstart.nvim), uma base altamente configurável para Neovim em Lua, para esse tutorial, é necessário ter instalado o java e o maven no sistema. Com o Kickstart.nvim, criamos um arquivo em custom/plugins/java.lua

### 🚀 O que esse arquivo faz?
- Dentro do java.lua, realizamos a integração de várias ferramentas e plugins para oferecer suporte completo a:
✅ Linguagem via LSP (jdtls)
✅ Framework Spring Boot via spring-boot.nvim
✅ Depuração com nvim-dap
✅ Testes Java com java-test
✅ Anotações e suporte ao Lombok
✅ Atalhos personalizados com which-key

java.lua:

```lua
-- This is the same as in lspconfig.configs.jdtls, but avoids
-- needing to require that when this module loads.
local mason_registry = require 'mason-registry'

-- Utility function to extend or override a config table, similar to the way
-- that Plugin.opts works.
---@param config table
---@param custom function | table | nil
local function extend_or_override(config, custom, ...)
  if type(custom) == 'function' then
    config = custom(config, ...) or config
  elseif custom then
    config = vim.tbl_deep_extend('force', config, custom) --[[@as table]]
  end
  return config
end

local function has_plugin(name)
  local ok, _ = pcall(require, name)
  return ok
end

return {

  -- Add java to treesitter.
  {
    'nvim-treesitter/nvim-treesitter',
    opts = { ensure_installed = { 'java' } },
  },

  --add springboot
  {
    'JavaHello/spring-boot.nvim',
    ft = { 'java', 'yaml', 'jproperties' },
    dependencies = {
      'mfussenegger/nvim-jdtls', -- or nvim-java, nvim-lspconfig
      'nvim-telescope/telescope.nvim', -- optional, for UI features like symbol picking. Other pickers (e.g., telescope.nvim) can also be used.
    },
    ---@type bootls.Config
    ---@diagnostic disable-next-line: missing-fields
    opts = {},
  },
  -- Ensure java debugger and test packages are installed.
  {
    'mfussenegger/nvim-dap',
    optional = true,
    opts = function()
      -- Simple configuration to attach to remote java debug process
      -- Taken directly from https://github.com/mfussenegger/nvim-dap/wiki/Java
      local dap = require 'dap'
      dap.configurations.java = {
        {
          type = 'java',
          request = 'attach',
          name = 'Debug (Attach) - Remote',
          hostName = '127.0.0.1',
          port = 5005,
        },
      }
    end,
    dependencies = {
      {
        'mason-org/mason.nvim',
        opts = { ensure_installed = {} },
      },
    },
  },

  -- Configure nvim-lspconfig to install the server automatically via mason, but
  -- defer actually starting it to our configuration of nvim-jtdls below.
  {
    'neovim/nvim-lspconfig',
    dependencies = {
      {
        'mason-org/mason-lspconfig.nvim',

        config = function()
          require('mason-lspconfig').setup {
            -- ensure_installed = { 'vscode-spring-boot-tools', 'jdtls' }, -- explicitly set to an empty table (Kickstar
            ensure_installed = {},
            automatic_enable = {
              exclude = { 'jdtls' },
            },
          }
        end,
      },
    },
    opts = {
      -- make sure mason installs the server
      servers = {
        jdtls = {},
      },
      setup = {
        jdtls = function()
          return true -- avoid duplicate servers
        end,
      },
    },
  },

  -- Set up nvim-jdtls to attach to java files.
  {
    'mfussenegger/nvim-jdtls',
    dependencies = { 'folke/which-key.nvim' },
    ft = { 'java' },
    opts = function()
      --  local cmd = { vim.fn.exepath 'jdtls' }
      local lombok_jar = vim.fn.expand '$MASON' .. '/share/jdtls/lombok.jar'

      -- Verify the file actually exists
      if vim.fn.filereadable(lombok_jar) == 0 then
        vim.notify('lombok.jar not found at: ' .. lombok_jar, vim.log.levels.WARN)
        lombok_jar = ''
      end

      -- Fallback configuration if lombok.jar isn't found
      if lombok_jar == '' then
        vim.notify('Using jdtls without lombok support', vim.log.levels.WARN)
        return {
          root_dir = require('lspconfig').util.root_pattern('.git', 'mvnw', 'gradlew'),
          cmd = { vim.fn.exepath 'jdtls' },
          -- other default configurations...
        }
      end

      return {
        -- How to find the root dir for a given filename. The default comes from
        -- lspconfig which provides a function specifically for java projects.

        root_dir = require('lspconfig').util.root_pattern('.git', 'mvnw', 'gradlew', 'pom.xml'),
        -- How to find the project name for a given root dir.
        project_name = function(root_dir)
          return root_dir and vim.fs.basename(root_dir) or 'default'
        end,

        -- Where are the config and workspace dirs for a project?
        jdtls_config_dir = function(project_name)
          return vim.fn.stdpath 'cache' .. '/jdtls/' .. project_name .. '/config'
        end,
        jdtls_workspace_dir = function(project_name)
          return vim.fn.stdpath 'cache' .. '/jdtls/' .. project_name .. '/workspace'
        end,

        -- How to run jdtls. This can be overridden to a full java command-line
        -- if the Python wrapper script doesn't suffice.
        --  cmd = cmd,
        -- Command for starting jdtls with Lombok support
        cmd = {
          vim.fn.exepath 'jdtls',
          string.format('--jvm-arg=-javaagent:%s', lombok_jar),
        },
        full_cmd = function(opts)
          local fname = vim.api.nvim_buf_get_name(0)
          local root_dir = opts.root_dir(fname)
          local project_name = opts.project_name(root_dir)
          local full_cmd = vim.deepcopy(opts.cmd)
          if project_name then
            vim.list_extend(full_cmd, {
              '-configuration',
              opts.jdtls_config_dir(project_name),
              '-data',
              opts.jdtls_workspace_dir(project_name),
            })
          end
          return full_cmd
        end,

        -- These depend on nvim-dap, but can additionally be disabled by setting false here.
        dap = { hotcodereplace = 'auto', config_overrides = {} },
        -- Can set this to false to disable main class scan, which is a performance killer for large project
        dap_main = {},
        test = true,
        settings = {
          java = {
            inlayHints = {
              parameterNames = {
                enabled = 'all',
              },
            },
          },
        },
      }
    end,
    config = function(_, opts)
      -- Find the extra bundles that should be passed on the jdtls command-line
      -- if nvim-dap is enabled with java debug/test.
      local bundles = {} ---@type string[]

      --  vim.list_extend(bundles, require('spring_boot').java_extensions())
      local addAll = function(target, insertion)
        for _, value in pairs(insertion) do
          table.insert(target, value)
        end
      end
      if has_plugin 'spring_boot' then
        vim.api.nvim_create_user_command('SpringBootSymbols', function(_)
          require('telescope.builtin').lsp_workspace_symbols {}
        end, { nargs = 0 })

        local spring_boot = require 'spring_boot'
        addAll(bundles, spring_boot.java_extensions())
      end

      if opts.dap and mason_registry.is_installed 'java-debug-adapter' then
        local java_dbg_path = vim.fn.expand '$MASON' .. '/packages/java-debug-adapter'

        local jar_patterns = {
          java_dbg_path .. '/extension/server/com.microsoft.java.debug.plugin-*.jar',
        }
        -- java-test also depends on java-debug-adapter.
        if opts.test and mason_registry.is_installed 'java-test' then
          local java_test_path = vim.fn.expand '$MASON' .. '/packages/java-test'
          vim.list_extend(jar_patterns, {
            java_test_path .. '/extension/server/*.jar',
          })
        end
        for _, jar_pattern in ipairs(jar_patterns) do
          for _, bundle in ipairs(vim.split(vim.fn.glob(jar_pattern), '\n')) do
            table.insert(bundles, bundle)
          end
        end
      end
      local function attach_jdtls()
        local fname = vim.api.nvim_buf_get_name(0)
        local root_dir = opts.root_dir(fname)

        -- Configuration can be augmented and overridden by opts.jdtls
        local config = extend_or_override({
          cmd = opts.full_cmd(opts),
          root_dir = root_dir,
          init_options = {
            bundles = bundles,
          },
          workspace_folders = {
            {
              name = opts.project_name(root_dir),
              uri = 'file://' .. vim.fn.fnamemodify(root_dir, ':p'):gsub(' ', '%%20'),
            },
          },
          settings = opts.settings,
          -- enable CMP capabilities
          capabilities = has_plugin 'cmp-nvim-lsp' and require('cmp_nvim_lsp').default_capabilities() or nil,
        }, opts.jdtls)

        -- Existing server will be reused if the root_dir matches.
        require('jdtls').start_or_attach(config)
        -- not need to require("jdtls.setup").add_commands(), start automatically adds commands
      end

      -- Attach the jdtls for each java buffer. HOWEVER, this plugin loads
      -- depending on filetype, so this autocmd doesn't run for the first file.
      -- For that, we call directly below.
      vim.api.nvim_create_autocmd('FileType', {
        pattern = { 'java' },
        callback = attach_jdtls,
      })

      -- Setup keymap and dap after the lsp is fully attached.
      -- https://github.com/mfussenegger/nvim-jdtls#nvim-dap-configuration
      -- https://neovim.io/doc/user/lsp.html#LspAttach
      vim.api.nvim_create_autocmd('LspAttach', {
        callback = function(args)
          local client = vim.lsp.get_client_by_id(args.data.client_id)
          if client and client.name == 'jdtls' then
            local wk = require 'which-key'
            wk.add {
              {
                mode = 'n',
                buffer = args.buf,
                { '<leader>cx', group = 'extract' },
                { '<leader>cxv', require('jdtls').extract_variable_all, desc = 'Extract Variable' },
                { '<leader>cxc', require('jdtls').extract_constant, desc = 'Extract Constant' },
                { '<leader>cgs', require('jdtls').super_implementation, desc = 'Goto Super' },
                { '<leader>cgS', require('jdtls.tests').goto_subjects, desc = 'Goto Subjects' },
                { '<leader>co', require('jdtls').organize_imports, desc = 'Organize Imports' },
              },
            }
            wk.add {
              {
                mode = 'v',
                buffer = args.buf,
                { '<leader>cx', group = 'extract' },
                {
                  '<leader>cxm',
                  [[<ESC><CMD>lua require('jdtls').extract_method(true)<CR>]],
                  desc = 'Extract Method',
                },
                {
                  '<leader>cxv',
                  [[<ESC><CMD>lua require('jdtls').extract_variable_all(true)<CR>]],
                  desc = 'Extract Variable',
                },
                {
                  '<leader>cxc',
                  [[<ESC><CMD>lua require('jdtls').extract_constant(true)<CR>]],
                  desc = 'Extract Constant',
                },
              },
            }

            if has_plugin 'mason.nvim' then
              if opts.dap and has_plugin 'nvim-dap' and mason_registry.is_installed 'java-debug-adapter' then
                -- custom init for Java debugger
                require('jdtls').setup_dap(opts.dap)
                if opts.dap_main then
                  require('jdtls.dap').setup_dap_main_class_configs(opts.dap_main)
                end

                -- Java Test require Java debugger to work
                if opts.test and mason_registry.is_installed 'java-test' then
                  -- custom keymaps for Java test runner (not yet compatible with neotest)
                  wk.add {
                    {
                      mode = 'n',
                      buffer = args.buf,
                      { '<leader>t', group = 'test' },
                      {
                        '<leader>tt',
                        function()
                          require('jdtls.dap').test_class {
                            config_overrides = type(opts.test) ~= 'boolean' and opts.test.config_overrides or nil,
                          }
                        end,
                        desc = 'Run All Test',
                      },
                      {
                        '<leader>tr',
                        function()
                          require('jdtls.dap').test_nearest_method {
                            config_overrides = type(opts.test) ~= 'boolean' and opts.test.config_overrides or nil,
                          }
                        end,
                        desc = 'Run Nearest Test',
                      },
                      { '<leader>tT', require('jdtls.dap').pick_test, desc = 'Run Test' },
                    },
                  }
                end
              end
            end

            -- User can set additional keymaps in opts.on_attach
            if opts.on_attach then
              opts.on_attach(args)
            end
          end
        end,
      })

      -- Avoid race condition by calling attach the first time, since the autocmd won't fire.
      attach_jdtls()
    end,
  },
}

```


### 📦 Entedendo os componentes principais:
- Treesitter Adicionamos suporte à linguagem Java para realce de sintaxe mais preciso:  

```lua
-- Não precisa copiar ja está declarado no java.lua.
{
  'nvim-treesitter/nvim-treesitter',
  opts = { ensure_installed = { 'java' } },
},
``` 

- 🎯 Spring Boot Integration
Integramos o plugin spring-boot.nvim para melhorar a experiência com aplicações Spring Boot, com suporte a YAML e arquivos .properties.

```lua
-- Não precisa copiar ja está declarado no java.lua.
{
  'JavaHello/spring-boot.nvim',
  ft = { 'java', 'yaml', 'jproperties' },
  dependencies = {
    'mfussenegger/nvim-jdtls',
    'nvim-telescope/telescope.nvim',
  },
  opts = {},
}
```

- 🧠 JDTLS – Java Language Server
Configuramos o JDTLS como servidor LSP, com suporte ao Lombok, pastas de cache e inicialização via autocmd:

```lua
-- Não precisa copiar ja está declarado no java.lua.
cmd = {
  vim.fn.exepath 'jdtls',
  string.format('--jvm-arg=-javaagent:%s', lombok_jar),
}
```

O root do projeto é detectado com:

```lua
-- Não precisa copiar ja está declarado no java.lua.
root_dir = require('lspconfig').util.root_pattern('.git', 'mvnw', 'gradlew', 'pom.xml')
```

- 🐞 Depuração com DAP
Utilizamos o nvim-dap para depuração remota e testes com JDTLS:

```lua
-- Não precisa copiar ja está declarado no java.lua.
dap.configurations.java = {
  {
    type = 'java',
    request = 'attach',
    name = 'Debug (Attach) - Remote',
    hostName = '127.0.0.1',
    port = 5005,
  },
}
```

- 🔡 Keymaps para produtividade
Atalhos definidos com which-key.nvim:

➜ <leader>cxv → Extrair variável

➜ <leader>cxc → Extrair constante

➜ <leader>cxm → Extrair método (modo visual)

➜ <leader>co → Organizar imports

➜ <leader>tt → Executar todos os testes da classe

➜ <leader>tr → Executar o teste mais próximo

➜ <leader>tT → Escolher qual teste rodar

- 📁 Detecção automática de projetos
Através de root_pattern, o Neovim reconhece o projeto com base em arquivos como:

➜  .git

➜  mvnw

➜  gradlew

➜  pom.xml

## ➕Plus:

### ⚙️ Springtime: Criando projetos Spring Boot
Adicione ao init.lua dentro de custom/plugins:

 ```lua
  {
    'javiorfo/nvim-springtime',
    lazy = true,
    cmd = { 'Springtime', 'SpringtimeUpdate' },
    dependencies = {
      'javiorfo/nvim-popcorn',
      'javiorfo/nvim-spinetta',
      'hrsh7th/nvim-cmp',
    },
    build = function()
      require('springtime.core').update()
    end,
  }, 
```
### 🛠 ️Adicionar a instalação automática dos servidores:
- Editar o init.lua principal na linha que contém:

```lua
 local ensure_installed = vim.tbl_keys(servers or {})
      vim.list_extend(ensure_installed, {
        'stylua', -- Used to format Lua code
      })
```

- Deixando conforme abaixo :
 
 ```lua
  local ensure_installed = vim.tbl_keys(servers or {})
      vim.list_extend(ensure_installed, {
        'stylua', -- Used to format Lua code
        'vscode-spring-boot-tools',
        'jdtls',
        'java-debug-adapter',
        'java-test',
        'google-java-format',
        'sonarlint-language-server', -- Used to format java
      })
```


### 🧹 SonarLint: Lint para Java
Criar o arquivo `custom/plugins/sonarlint.lua`:


```lua

return {
  'schrieveslaach/sonarlint.nvim',
  dependencies = { 'neovim/nvim-lspconfig' },
  config = function()
    require('sonarlint').setup {
      server = {
        cmd = {
          'sonarlint-language-server',
          '-stdio',
          '-analyzers',
          vim.fn.expand(vim.fn.getenv 'MASON' .. '/share/sonarlint-analyzers/sonarjava.jar'),
          vim.fn.expand(vim.fn.getenv 'MASON' .. '/share/sonarlint-analyzers/sonarcfamily.jar'),
          vim.fn.expand(vim.fn.getenv 'MASON' .. '/share/sonarlint-analyzers/sonarpython.jar'),
        },
      },
      filetypes = { 'java' },
    }
  end,
}
```

### 🧼 Autoformatação com google-java-format
No arquivo kickstart/plugins/conform.lua, adicione `java = { 'google-java-format' }`:

```lua

 formatters_by_ft = {
        lua = { 'stylua' },
        -- Conform can also run multiple formatters sequentially
        -- python = { "isort", "black" },
        --
        -- You can use 'stop_after_first' to run the first available formatter from the list
        -- javascript = { "prettierd", "prettier", stop_after_first = true },
        java = { 'google-java-format' },
      },
```
### ☕ Extras: Maven
Para integração com o Maven, recomendamos o plugin maven.nvim, que permite executar comandos como compile, test, clean, entre outros, direto do Neovim.
Edit o custom/plugins/init.lua adicionando o plugin:
```lua
{
  "eatgrass/maven.nvim",
  cmd = { "Maven", "MavenExec" },
  dependencies = "nvim-lua/plenary.nvim",
  config = function()
    require('maven').setup({
       executable = 'mvn',
    })
  end
},
```
### 🧩 Resultado final

![gif neovim](/assets/posts/java-nvim.gif)

Com isso, você terá um ambiente Java completo dentro do Neovim:

✅ Leve
✅ Rápido
✅ Produtivo
✅ Com suporte total a LSP, testes, depuração, formatação e lint
✅ Ideal para projetos Spring Boot, Maven ou Java puro

📚 Referências
- [**Kickstart.nvim**](https://github.com/nvim-lua/kickstart.nvim/blob/master/init.lua)

- [**nvim-jdtls**](https://github.com/mfussenegger/nvim-jdtls)

- [**spring-boot.nvim**](https://github.com/JavaHello/spring-boot.nvim)

- [**nvim-springtime**](https://github.com/javiorfo/nvim-springtime)

- [**sonarlint.nvim**](https://gitlab.com/schrieveslaach/sonarlint.nvim)

- [**configuração do jdtls**](https://github.com/LazyVim/LazyVim/blob/main/lua/lazyvim/plugins/extras/lang/java.lua)


