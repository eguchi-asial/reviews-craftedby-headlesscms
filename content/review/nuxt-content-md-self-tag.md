---
id: 'nuxt-content-md-self-tag'
category:
  - TECH
  - Vue
  - Nuxt
  - nuxt-content
  - HeadlessCMS
  - Markdown
title: 'nuxt-contentのmarkdownで地味にハマったやつ'
description: 'nuxt/contentでmdの中にvueコンポーネントを記載して使っているのですが、地味にハマった話の紹介です。'
rating: 3
yyyymmdd: '2021-03-12'
links:
  - https://content.nuxtjs.org/ja
  - https://ja.nuxtjs.org/
---

<tags :tags="category" :no-link="true"></tags>

<rating :rating="rating"></rating>

このブログは、HeadlessCMSを使って、趣味や技術について綴っています。

マークダウンの中に自作したVueのコンポーネントを使っているのですが、よくやる失敗がこちら。

```md SAMPLE
<tags :tags="category" />

テスト

<references :links="links"></references>
```

上記のtagsはエラーになります。referencesは正常に表示されます。

nuct/contentでmdの中にhtml要素を定義する際、self-closeは使えません。
[公式にも記載](https://ja.nuxtjs.org/blog/creating-blog-with-nuxt-content/) されてます。

```
You cannot use self closing tags in markdown, for instance, <author :author="author" /> won't work.
```

なので、こう！！

```md SAMPLE
<tags :tags="category"></tags>

テスト

<references :links="links"></references>
```

<references :links="links"></references>
