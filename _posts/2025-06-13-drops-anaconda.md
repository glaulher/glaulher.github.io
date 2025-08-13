---
title: 'Anaconda no distrobox'
metaDesc: 'Utilizando o Anaconda no distrobox'
coverImage: '/assets/blog/post/DropsDicas.png'

author:
  name: Glaulher Medeiros
  picture: '/assets/blog/authors/glaulher.jpeg'

ogImage:
  url: '/assets/blog/post/DropsDicas.png'

publishedDate: '2025-08-13T10:24:00Z'
tags: [editor,python, linux]
---

---

## 🛠️ Como instalar uma Distro via Distrobox e configurar Anaconda manualmente

Este tutorial mostra como criar um ambiente Arch Linux dentro do Debian usando Distrobox, e como instalar e configurar o Anaconda de forma manual, sem deixar o instalador modificar os arquivos de shell automaticamente.

---

## ✅ Requisitos iniciais

## 1. Pré-requisitos

- Debian instalado e rodando.
- Acesso ao terminal com permissão para usar `sudo`.
- Podman ou Docker instalado (podman recomendado).
- Todas as etapas serão executadas no `terminal`

---

## 2. Instalando o Podman e o Distrobox

No Debian, instale o podman e o Distrobox com:

```bash
sudo apt update
sudo apt instal podman podman-compose podman-docker
sudo apt install distrobox

``` 

## 3. Criando e entrando no Distrobox Arch Linux

```bash
distrobox create --name arch --image archlinux:latest
distrobox enter arch
sudo pacman -Syu
sudo pacman -S libxcomposite libxdamage libxfixes libxrandr libxrender libxtst libxcursor alsa-lib qt5-base qt5-x11extras libxkbcommon-x11
```
## 4. Instalar o Anaconda

Baixe a versão do anaconda para o linux em https://www.anaconda.com/download/success e dentro do distrobox execute:

```bash
cd Downloads
chmod +x ./nome_do_arquivo_que_baixou.sh
./nome_do_arquivo_que_baixou.sh
```
- Leia e aceite os termos.

- Escolha o diretório de instalação (ex: /home/usuario/anaconda3).

- Quando perguntado se deseja modificar automaticamente os arquivos do shell, responda não para fazer a configuração manual.

Por fim dentro do distrobox inicie o conda:

```bash
eval "$($HOME/anaconda3/bin/conda shell.bash hook)"

# instale o anaconda-navigator e a depedência para ler arquivo do excel

conda install anaconda-navigator
conda install -c conda-forge xlrd

```
## 🚀 Execute o anaconda-navigator

```bash
anaconda-navigator

```
Todas as Vezes que for usar o Anaconda os passos serão:

```bash
# Entrar no distrobox
distrobox enter arch

# Verificar se há atualização de sistema no Arch
sudo pacman -Syu

#carregar o conda
eval "$($HOME/anaconda3/bin/conda shell.bash hook)"

# Abrir o painel do anaconda

anaconda-navigator

```

## 🧩 Conclusão
Com esses passos você terá o Arch Linux rodando dentro do Debian via Distrobox, e o Anaconda instalado e configurado manualmente, com controle total sobre as variáveis de ambiente, sem poluir o seu sistema.
