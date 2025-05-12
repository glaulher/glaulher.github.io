---
title: 'Deixando o Bash com cara nova'
metaDesc: 'Deixando o Bash com cara nova: ble.sh + Starship + Nerd Font'
coverImage: '/assets/blog/post/Bash.webp'

author:
  name: Glaulher Medeiros
  picture: '/assets/blog/authors/glaulher.jpeg'

ogImage:
  url: '/assets/blog/post/driveI965.webp'

publishedDate: '2025-05-12T16:34:00Z'
tags: [linux]
---

---

Uso o zsh há bastante tempo principalmente por conta do autocompletar com sugestões inteligentes. No entanto, recentemente descobri um plugin incrível para o bash que resolve exatamente esse problema: o ble.sh.

Combinando o ble.sh com o Starship e uma Nerd Font, o Bash fica moderno, produtivo e bonito. Abaixo explico o passo a passo completo para instalar e configurar tudo.

✅ Pré-requisitos
Certifique-se de que os seguintes pacotes estão instalados:

```bash

sudo apt install make curl fzf # (ou o equivalente para sua distro)

```

🎨 Instalando uma Nerd Font
Vamos usar o [getnf ](https://github.com/getnf/getnf) para instalar uma fonte com ícones Nerd Font:

```bash

curl -fsSL https://raw.githubusercontent.com/getnf/getnf/main/install.sh | bash

```

Depois, execute:

```bash

getnf

```
Escolha uma fonte, como por exemplo a opção 9 - CascadiaMono.
Após a instalação, altere a fonte do seu terminal para essa nova fonte.

⚙️ Instalando o [ble.sh ](https://github.com/akinomyoga/ble.sh)
- Clone o repositório nightly (é o que funcionou comigo no fedora 42):

```bash
curl -L https://github.com/akinomyoga/ble.sh/releases/download/nightly/ble-nightly.tar.xz | tar xJf -
bash ble-nightly/ble.sh --install ~/.local/share

```


🚀 Instalando o [Starship](https://starship.rs/)

```bash

curl -sS https://starship.rs/install.sh | sh

```
🧠 Configurando o .bashrc
- Edite o arquivo `~/.bashrc` e adicione ao final:

```bash

# Inicializa o ble.sh de forma não intrusiva para sessões interativas
[[ $- == *i* ]] && source ~/.local/share/blesh/ble.sh --noattach

# Configurações do ble.sh
ble-bind -f up history-search-backward     # seta ↑ percorre histórico por prefixo
ble-bind -f down history-search-forward    # seta ↓ percorre histórico por prefixo
ble-import -d integration/fzf-completion   # usa fzf como menu de histórico/autocompletar
ble-import -d integration/fzf-key-bindings

# Inicializa o Starship (prompt moderno)
eval "$(starship init bash)"

# Ativa o ble.sh
[[ ! ${BLE_VERSION-} ]] || ble-attach

```

Salve e feche. Em seguida, recarregue o shell:

```bash

source ~/.bashrc

```

🧩 Configurando o Starship

- Crie o diretório de configuração (se ainda não existir):

```bash

mkdir -p ~/.config

```

E dentro dele, crie o arquivo starship.toml com o seguinte conteúdo:

```toml

"$schema" = 'https://starship.rs/config-schema.json'

command_timeout = 10000
add_newline = false

[username]
show_always = true

[cmd_duration]
disabled = false

[directory]
truncation_length = 8

[character]
success_symbol = '[❯](bold bright-blue)'

[battery]
disabled = true # Coloque como false para exibir o status da bateria

```


✅ Resultado
Você terá um terminal Bash com:

- Sugestões de comandos anteriores com fzf

- Estilo visual moderno com Starship

- Ícones e símbolos com Nerd Font

- Experiência com auto-complete e Syntax highlighting no Bash

- Ao teclar ctrl+r terá um menu com fzf bem bacana.😊