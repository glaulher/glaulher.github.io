---
title: React não recarrega a página ao salvar no linux
author: Glaulher Medeiros
socialImage: images/22-09-2021.jpg
date: 2020-06-14 12:27:00 -0300
categories: [Blogging, Tutorial]
tags: [React, Linux]
toc: true
comments: true
---
***

![image]({{ "/assets/img/sample/react-reload/reload.png" | relative_url }})

<div style="text-align: justify">  
Para resolver esse problema é preciso alterar o valor  de max_user_watches em inotify, cada relógio inotify usado ocupa 540 bytes (sistema de 32 bits) ou 1 kB (duplo em 64 bits) Isso sai da memória do kernel, que não pode ser trocada. Supondo que você definiu o máximo em 524288 e todos foram usados (improvável), você usaria aproximadamente 256 MB / 512 MB de memória do kernel de 32 bits / 64 bits.<br />
<br />
Observe que seu aplicativo também utilizará memória adicional para acompanhar os identificadores inotify, os caminhos de arquivo / no diretório etc.<br />
<br /></div>

Para verificar o número máximo de relógios inotify:  

```shell
cat /proc/sys/fs/inotify/max_user_watches
```

No Debian esse valor padrão é 8192, para definir o número máximo de relógios inotify temporariamente:

```shell
 sudo sysctl fs.inotify.max_user_watches = com o seu valor preferido no final.
```

**Para definir o número máximo de relógios inotify definitivamente:**

```shell
sudo -i
echo "fs.inotify.max_user_watches=524288" |tee -a /etc/sysctl.conf
sysctl -p
exit
```


<div style="text-align: justify"> 
Permanentemente (informações mais detalhadas):<br />

Coloque fs.inotify.max_user_watches = 524288 nas configurações do sysctl. Dependendo do seu sistema, eles podem estar em um dos seguintes locais:<br />
Debian / RedHat: /etc/sysctl.conf<br />
Arch: coloque um novo arquivo em /etc/sysctl.d/, por exemplo /etc/sysctl.d/40-max-user-watches.conf<br />
Você pode recarregar as configurações do sysctl para evitar uma reinicialização: sysctl -p (Debian / RedHat) ou sysctl --system (Arch)<br />
Verifique se o número máximo de relógios inotify foi atingido:<br />

Use tail com a opção -f (follow) em qualquer arquivo antigo, por exemplo tail -f / var / log / dmesg: - Se estiver tudo bem, mostrará as últimas 10 linhas e fará uma pausa; abortar com Ctrl-C - Se você estiver sem relógio, falhará com este erro um tanto enigmático:
</div><br />

```shell
tail: cannot watch '/var/log/dmsg': No space left on device
```
Para ver o que está usando os relógios inotify:

```shell
find /proc/*/fd -lname anon_inode:inotify |
   cut -d/ -f3 |
   xargs -I '{}' -- ps --no-headers -o '%p %U %c' -p '{}' |
   uniq -c |
   sort -nr
```

A primeira coluna indica o número de inotify fds (embora não seja o número de relógios) e a segunda mostra o PID desse processo.

fontes:

[askbuntu]( https://askubuntu.com/questions/716431/inotify-max-user-watches-value-resets-on-reboot-how-to-change-it-permanently){:target="_blank" rel="noopener"}

[dev.to](https://dev.to/rubiin/ubuntu-increase-inotify-watcher-file-watch-limit-kf4){:target="_blank" rel="noopener"}

[stackoverflow](https://stackoverflow.com/questions/42189575/create-react-app-reload-not-working){:target="_blank" rel="noopener"}




