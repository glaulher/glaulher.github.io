---
title: 'Deixando o PowerShell com cara nova'
metaDesc: 'Deixando o PowerShell com cara nova: autosuggestions, syntax highlight e visual incrível'
coverImage: '/assets/blog/post/PoweShell.webp'

author:
  name: Glaulher Medeiros
  picture: '/assets/blog/authors/glaulher.jpeg'

ogImage:
  url: '/assets/blog/post/PoweShell.webp'

publishedDate: '2025-05-15T16:34:00Z'
tags: [Windows]
---

---


Se usa Zsh com plugins como zsh-autosuggestions e zsh-syntax-highlighting no unix like, talvez ache o PowerShell do windows muito básico à primeira vista.

Mas a verdade é que com alguns ajustes simples, o PowerShell no Windows pode oferecer uma experiência de terminal moderna, inteligente e bonita — com autosuggestions, syntax highlight, busca no histórico por substring e visual com ícones graças ao Starship e Nerd Fonts. Abaixo explico tudo passo a passo.

#### ✅ Instalando o PowerShell (última versão)
Se você ainda não tem o novo PowerShell instalado:

```bash

winget install Microsoft.PowerShell

```

#### ⚙️ Definindo o PowerShell como padrão no Windows Terminal

Abra o Windows Terminal → Configurações
→ Vá em “Perfil padrão” e selecione PowerShell.

#### 🧠 Melhorando a experiência com PSReadLine
 O PowerShell já tem suporte básico a syntax highlighting, mas com o módulo PSReadLine você libera o verdadeiro potencial dele: sugestões inteligentes, syntax highlight, busca por substring e muito mais. Abra o Windows Terminal:

#### 🛠️ Instale e configure o PSReadLine

```powershell
Install-Module PSReadLine -Force -SkipPublisherCheck
```

#### 🤖 Sugestões mais inteligentes com CompletionPredictor

Quer sugestões tipo “IntelliSense” no terminal?

```powershell
Install-Module -Name CompletionPredictor -Force
```

Esse módulo ajuda a prever comandos completos com base no seu histórico e contexto.


#### 🎨 Visual moderno com Nerd Font + Starship + Perfumaria

1. Instale uma Nerd Font 

```powershell
winget install --id=DEVCOM.JetBrainsMonoNerdFont  -e
```

Depois, altere a fonte no Windows Terminal → Aparência → Fonte.

2. Instale o Starship

```powershell
winget install --id Starship.Starship
```

3. icones ao executa ls no terminal: 

```powershell
Install-Module -Name Terminal-Icons -Force -Scope CurrentUser
```


#### 📂 Salvando tudo no seu perfil ($PROFILE)

Para manter essa configuração sempre que abrir o terminal:

```powershell
notepad $PROFILE
```

- Cole o seguinte conteúdo e salve:

```powershell
Import-Module PSReadLine
Import-Module Terminal-Icons

Set-PSReadLineOption -PredictionSource HistoryAndPlugin
Set-PSReadLineOption -PredictionViewStyle ListView
Set-PSReadLineKeyHandler -Key UpArrow -Function HistorySearchBackward
Set-PSReadLineKeyHandler -Key DownArrow -Function HistorySearchForward

[Console]::OutputEncoding = [System.Text.UTF8Encoding]::UTF8

$ENV:STARSHIP_CONFIG = "$HOME\Documents\PowerShell\starship.toml"

Invoke-Expression (&starship init powershell)
```


4. Personalize o Starship (opcional)
- Em Documentos clique com o botão direito abrir o powershell,Crie o arquivo de configuração:

```powershell
notepad $HOME\Documents\PowerShell\starship.toml
```

Exemplo de starship.toml:

```toml
"$schema" = 'https://starship.rs/config-schema.json'

add_newline = false
command_timeout = 10000

[username]
show_always = true

[character]
success_symbol = '[❯](bold bright-blue)'
error_symbol = '[✗](bold red)'

[directory]
truncation_length = 8
```

Salve e reinicie o terminal.
Pronto! 😄 

✅ Resultado
Com essa configuração, você terá:

Sugestões automáticas baseadas no histórico

Preenchimento inteligente com CompletionPredictor

Syntax highlight no terminal

Busca no histórico por substring com ↑

Interface visual moderna com Starship

Ícones com Nerd Font



