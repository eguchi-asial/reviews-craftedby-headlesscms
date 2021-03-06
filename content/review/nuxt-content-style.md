---
id: 'nuxt-content-style'
category:
  - nuxt-content
  - HeadlessCMS
  - style
  - css
title: 'nuxt/contentで展開されるcontentsにstyleを当てたい話'
description: 'マークダウンcontentsは<nuxt-content>でHTML展開されますが、展開されたHTMLにちょっと仕様があったのでstyleを当てるのに一工夫しました。'
eyecatch: 'nuxt-content-style.png'
rating: 5
yyyymmdd: '2021-03-16'
links:
  - https://content.nuxtjs.org/ja/displaying#style
---

<tags :tags="category" :no-link="true"></tags>

<rating :rating="rating"></rating>

# 何がやりたかったか

執筆したマークダウン以下のように `nuxt-content` コンポーネントのdocument属性に渡すことで、よしなにHTMLとして展開してくれます。

```html SAMPLE
<template>
  <div class="container">
    <Header>
      <div class="left" slot="left"><nuxt-link to="/">戻る</nuxt-link></div>
    </Header>
    <div class="contents">
      <nuxt-content :document="content" @click-tag="onClickTag" />
    </div>
  </div>
</template>
```

今回の展開された記事の大枠にmargin、ないしはpaddingを付けたかったのですが、意外と工夫が必要だったという話です。

何が問題だったかと言うと、当初

```
$npm run dev
```

上記でlocal開発しながら以下のようなstyleを書いてました。


```css sass
.nuxt-content-container {
  background: #fff;
  margin: 10px 5px;
  padding: 10px;
}
```

なぜなら、nuxt-contentで展開されたHTMLがnuxt-content-containerでラップする構造となっていたためです。

```html
<div class="contents">
  <div class="nuxt-content-container">
    <textarea class="nuxt-content-editor" style="display: none;"></textarea>
    <div class="nuxt-content">
      省略
    </div>
  </div>
</div>
```

開発時はこれでstyleが当たることも確認できたのですが、いざ本番ホスティングにdeployしたところ、

```
$npm run generate
$firebase deploy
```

なんとリリースされた画面にはstyleが当たっていませんでした。

しかしlocalではstyleはちゃんと当たっている。

不思議です。

おもむろに

```
$npm run generate && npm run start
```

上記で本番環境相当のソースコードでlocal確認したところ、styleが当たっていませんでした。

展開されたHTMLを確認したところ、開発時のHTML構造とは異なっておりました。

```html
<div class="contents">
  <div class="nuxt-content">
    省略
  </div>
</div>
```

「.nuxt-content-container」はdevで開発buildした時しか展開されないんですね。

原因はこれでした。generateした際、つまり本番むけのHTMLには「.nuxt-content」だけになってます。
そのためstyleが当たっていませんでした。

# どう解決したか

以下のように、 `div:first-child` とすることで解決としました。

```css  
.contents {
  width: 100vw;
  height: 100vh;
  // HEADER高さ
  padding: 60px 10px 100px 10px;
  overflow: scroll;

  div:first-child {
    background: #fff;
    margin: 10px 5px;
    padding: 10px;
  }
}
```

これで開発時も本番時も最初のdivにだけmarginやpaddingが当たります。
.nuxt-content-containerと.nuxt-content両方定義しても良いかと思います。

# まとめ

nuxt-contentでgenerateしたHTMLには、「.nuxt-content-container」は付与されない。

<references :links="links"></references>
