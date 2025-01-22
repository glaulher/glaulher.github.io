---
title: 'React-native não carrega o app'

metaDesc: 'error Failed to install the app. Make sure you have the Android development environment set up'

coverImage: '/assets/blog/post/22-09-2021.jpg'

author:
  name: Glaulher Medeiros
  picture: '/assets/blog/authors/glaulher.jpeg'

ogImage:
  url: '/assets/blog/post/22-09-2021.jpg'

publishedDate: '2020-11-08T16:34:00Z'

categories: [Blogging, Tutorial]
tags: [React, React-native, Linux]
---

---

Me deparei com esse problema, o yarn android não conseguia carregar o app no emulador e entregava a mensagem de erro:"error Failed to install the app. Make sure you have the Android development environment set up", ao tentar executar:

```shell
cd android && ./gradlew clean
```

me retornava que estava sem permissão:

Dei permissão:

```shell
chmod 777 -R gradlew
```

e ao executar yarn android o app carregou no emulador :)

fontes:

[stackoverflow](https://stackoverflow.com/questions/56891033/facing-issue-failed-to-install-the-app-make-sure-you-have-the-android-develop){:target="\_blank" rel="noopener"}

[github.com](https://github.com/facebook/react-native/issues/23306){:target="\_blank" rel="noopener"}
