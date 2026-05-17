---
title: 'USBWebserver: Apache 2.4.67, PHP 8.5.6 e MariaDB 11.4.10'
metaDesc: 'Passo a passo para atualizar Apache, PHP e substituir MySQL por MariaDB na última versão no USBWebserver'
coverImage: '/assets/blog/post/usbwebserver-banner.jpg'

author:
  name: Glaulher Medeiros
  picture: '/assets/blog/authors/glaulher.jpeg'

ogImage:
  url: '/assets/blog/post/usbwebserver-banner.jpg'

publishedDate: '2026-05-16T10:00:00Z'
tags: [apache, php, mariadb, mysql, windows]
---

---

## 🖥️ Como atualizar USBWebserver com Apache 2.4.67, PHP 8.5.6 e MariaDB 11.4.10

O USBWebserver é uma solução portátil excelente para desenvolvimento local. Recentemente atualizei todas as ferramentas para as versões mais recentes e troquei o MySQL pelo MariaDB. Neste post mostro o passo a passo completo.

---

## ✅ Versões utilizadas

- **Apache 2.4.67** (Win64) — Apache Lounge VS18
- **PHP 8.5.6** (ZTS Visual C++ 2022 x64)
- **MariaDB 11.4.10** (substitui o MySQL)
- **phpMyAdmin 5.2.3**

---

## 1️⃣ Faça backup de tudo

Antes de começar, copie toda a pasta do USBWebserver para um local seguro:

```bash
# Crie uma cópia de segurança
xcopy C:\USBWebserver C:\USBWebserver_backup /E /I
```

Os arquivos de configuração originais ficam em `settings/`:

- `httpd.conf` — configuração do Apache
- `php.ini` — configuração do PHP
- `my.ini` — configuração do MariaDB/MySQL
- `usbwebserver.ini` — config geral da ferramenta

---

## 2️⃣ Baixe as versões mais recentes

### Apache 2.4.67

Acesse o [Apache Lounge](https://www.apachelounge.com/download/) e baixe o pacote `httpd-2.4.67-win64-VS18.zip`.

### PHP 8.5.6

Acesse [windows.php.net](https://windows.php.net/download/) e baixe o **Thread Safe (ZTS)** x64:

```bash
# Link direto (exemplo)
https://windows.php.net/downloads/releases/php-8.5.6-Win32-vs17-x64.zip
```

### MariaDB 11.4.10

Acesse [mariadb.org/download](https://mariadb.org/download/) e baixe o ZIP para Windows x64:

```bash
# Link direto (exemplo)
https://archive.mariadb.org/mariadb-11.4.10/winx64-packages/mariadb-11.4.10-winx64.zip
```

---

## 3️⃣ Substituindo o Apache

1. Apague a pasta `apache2/` do USBWebserver
2. Extraia o conteúdo do `httpd-2.4.67-win64-VS18.zip`
3. **Renomeie a pasta extraída para `apache2`** e cole no USBWebserver
4. Copie o `settings/httpd.conf` para `apache2/conf/httpd.conf`
5. **Duplique o executável com o sufixo `_usbwv8`**:

```bash
copy apache2\bin\httpd.exe apache2\bin\httpd_usbwv8.exe
```

> ⚠️ O USBWebserver inicia o Apache usando o executável `httpd_usbwv8.exe`. Sem essa cópia renomeada, o programa não consegue gerenciar o serviço.

O `httpd.conf` do USBWebserver usa placeholders que são substituídos automaticamente:

```apache
Define SRVROOT "c:/Apache24"
ServerRoot "{path}/apache2"
Listen {port}
ServerName localhost:{port}
DocumentRoot "{rootdir}"

# Configuração do PHP
LoadModule php_module "{path}/php/php8apache2_4.dll"
AddType application/x-httpd-php .php
PHPIniDir "{path}/php"
```

---

## 4️⃣ Substituindo o PHP

1. Apague a pasta `php/` do USBWebserver
2. Extraia o conteúdo do `php-8.5.6-Win32-vs17-x64.zip`
3. **Renomeie a pasta extraída para `php`** e cole no USBWebserver
4. Copie o `settings/php.ini` para `php/php.ini`

> ⚠️ O `httpd.conf` carrega o PHP via `php8apache2_4.dll`. O PHP 8.5.6 já fornece essa DLL com o mesmo nome, então não precisa renomear. Verifique se o arquivo `php/php8apache2_4.dll` existe.

Verifique se o `php.ini` tem as extensões necessárias descomentadas:

```ini
extension=curl
extension=gd
extension=mbstring
extension=mysqli
extension=openssl
extension=pdo_mysql
```

E o `extension_dir` apontando para o local correto:

```ini
extension_dir = "{path}\php\ext\"
```

---

## 5️⃣ Substituindo o MySQL pelo MariaDB

Essa é a etapa mais importante. O MariaDB é compatível com MySQL, então você pode usar a mesma pasta `mysql/`.

1. Apague a pasta `mysql/` do USBWebserver
2. Extraia o `mariadb-11.4.10-winx64.zip`
3. **Renomeie a pasta extraída para `mysql`** e cole no USBWebserver
4. Copie o `settings/my.ini` para `mysql/my.ini`
5. **Garanta o `mysqld.exe` e duplique com o sufixo `_usbwv8`**:

```bash
REM Se mysqld.exe não existir, copie de mariadbd.exe
copy mysql\bin\mariadbd.exe mysql\bin\mysqld.exe

REM Duplique com o sufixo _usbwv8 (obrigatório)
copy mysql\bin\mysqld.exe mysql\bin\mysqld_usbwv8.exe
```

> ⚠️ **ATENÇÃO:** O USBWebserver gerencia o banco usando o executável `mysqld_usbwv8.exe`.

O `my.ini` básico:

```ini
[mysqld]
port = 3306
sql_mode=NO_ENGINE_SUBSTITUTION,STRICT_TRANS_TABLES
```

O USBWebserver inicia o banco via `mysql\bin\mysqld_usbwv8.exe`, e com essa etapa o MariaDB funcionará perfeitamente.

---

## 6️⃣ Atualizando o phpMyAdmin

1. Apague a pasta `phpmyadmin/`
2. Baixe a versão mais recente em [phpmyadmin.net](https://www.phpmyadmin.net/downloads/)
3. **Renomeie a pasta extraída para `phpmyadmin`** e cole no USBWebserver

> ⚠️ O USBWebserver espera a pasta `phpmyadmin/`. O nome dos executáveis do phpMyAdmin (arquivos PHP) não precisa ser alterado.

O alias já está configurado no `httpd.conf`:

```apache
Alias /phpmyadmin "{path}/phpmyadmin/"
```

---

## 7️⃣ Verificando as configurações

### usbwebserver.ini

```ini
[apache]
port=80
[mysql]
port=3306
[algemeen]
slocal=0
hide=0
local=0
root={path}/root
lang=Portuguese
```

---

## 8️⃣ Verifique os executáveis (resumo)

Antes de iniciar, confira se os nomes das pastas e executáveis estão no padrão que o USBWebserver espera:

| Local                          | Obrigatório                    | Como obter                          |
| ------------------------------ | ------------------------------ | ----------------------------------- |
| `apache2/bin/httpd.exe`        | Servidor Apache                | Já vem no zip                       |
| `apache2/bin/httpd_usbwv8.exe` | **Gerenciamento USBWebserver** | `copy httpd.exe httpd_usbwv8.exe`   |
| `php/php8apache2_4.dll`        | Módulo PHP                     | Já vem no zip                       |
| `mysql/bin/mariadbd.exe`       | Servidor MariaDB               | Já vem no zip                       |
| `mysql/bin/mysqld.exe`         | Compatibilidade MySQL          | `copy mariadbd.exe mysqld.exe`      |
| `mysql/bin/mysqld_usbwv8.exe`  | **Gerenciamento USBWebserver** | `copy mysqld.exe mysqld_usbwv8.exe` |
| `phpmyadmin/`                  | Interface web                  | Só renomear a pasta                 |

> ⚠️ Os executáveis com sufixo `_usbwv8` são **obrigatórios**. O USBWebserver os utiliza para iniciar/parar os serviços. Sem eles, o programa não funciona.

---

## 9️⃣ Testando o ambiente

Inicie o USBWebserver e acesse:

1. **Apache**: http://localhost — deve mostrar a página inicial
2. **PHP**: crie um `info.php` na pasta `root/` com `<?php phpinfo(); ?>` e acesse
3. **phpMyAdmin**: http://localhost/phpmyadmin
4. **MariaDB**: Verifique a versão no phpMyAdmin ou via linha de comando:

```bash
mysql\bin\mysql.exe -V
# Saída: mysql from 11.4.10-MariaDB
```

---

## 🧩 Conclusão

Com essas etapas seu USBWebserver estará rodando com as versões mais recentes:

| Componente | Versão  |
| ---------- | ------- |
| Apache     | 2.4.67  |
| PHP        | 8.5.6   |
| MariaDB    | 11.4.10 |
| phpMyAdmin | 5.2.3   |

Tudo portátil, funcionando como antes, mas com desempenho e segurança atualizados.
