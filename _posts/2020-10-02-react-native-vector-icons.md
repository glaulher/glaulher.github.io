---
title: 'Ícones no react-native com o react-native-vector-icons'

metaDesc: 'react-native-vector-icons, é uma forma de implementar icones no projeto de forma rápida e elegante'

coverImage: '/assets/blog/post/22-09-2021.jpg'

author:
  name: Glaulher Medeiros
  picture: '/assets/blog/authors/glaulher.jpeg'

ogImage:
  url: '/assets/blog/post/22-09-2021.jpg'

publishedDate: '2020-11-02T16:34:00Z'
categories: [Blogging, Tutorial]
tags: [React, React-native, Linux]
---

---

<img src="/assets/img/sample/react-native/react-native.png" alt="react-native" style="width:200px; heigth:200px; ">

O pacote de fonte de ícones, react-native-vector-icons, é uma forma de implementar icones no projeto de forma rápida e elegante, ícones presentes no pacote [clique aqui](https://oblador.github.io/react-native-vector-icons/){:target="\_blank" rel="noopener"}. É ótimo para botões, logotipos, barras de navegação e guias, fácil de estender, estilizar e integrar no projeto.
Para utilizar os pacotes de fontes no React-native vamos utilizar a biblioteca react-native-vector-icons.

Criando um projeto para testes, considerando que tenha o react-native, yarn e emulador ja instalados, abra o terminal:

```javascript
npx react-native init MyApp --template react-native-template-typescript
```

```shell
cd MyApp
```

Instale a biblioteca de ícones:

```shell
yarn add react-native-vector-icons
```

Realize o link da biblioteca com o código nativo com o comando:

```shell
yarn react-native link
```

Carregue o projeto no emulador

```shell
yarn android
yarn start
```

Será carregado o template padrão do react-native, para testar edite o App.tsx colando o código abaixo:

```javascript
import React from 'react';
import {SafeAreaView, View, Text, StatusBar, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

Icon.loadFont(); // carrega os icones

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.container}>
          <Text>
            Olá
            <Icon name="github" size={30} color="red" />
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 200,
  },
});

export default App;

```

Ficará com o icone do github conforme a imagem:

![image]({{ "/assets/img/sample/react-native/icon-vector.png" | relative_url }}){:target="\_blank" rel="noopener"}

fontes:

[Rocketseat](https://blog.rocketseat.com.br/utilizando-fontes-de-icones-no-react-native/){:target="\_blank" rel="noopener"}

[github.com/oblador](https://github.com/oblador/react-native-vector-icons){:target="\_blank" rel="noopener"}
