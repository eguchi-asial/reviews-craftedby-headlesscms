---
id: 'headless-cms'
category: ['TECH','Vue','Nuxt','nuxt/content','HeadlessCMS']
title: 'HeadlessCMSを触ってみた'
description: 'まさにこのレビューサイトがHeadlessCMSでできています。触ってみた感想と、CMSとの違いについて触れてます。'
yyyymmdd: '2021-02-28'
---

<tags :tags="['TECH','Vue','Nuxt','nuxt/content','HeadlessCMS']"></tags>

HeadlessCMSを使って、趣味や技術について綴っていこうと思います。

## HeadlessCMSとは

Head = View。
WordpressなどのようなCMSと異なり、コンテンツを入稿したり、公開するための管理操作に対して、viewが存在しません。
mdやjsonを使って、フロントと切り離して管理されます。

このレビューサイトがまさにHeadlessCMSで作られており、<a href="https://content.nuxtjs.org/ja" target="_blank">nuxt/content</a>を採用しています。

また、今回採用したHeadlessCMSは肝心の記事もGitで管理されるため、記事のrollbackなども即座に簡単に行えます。


<references :links="['https://content.nuxtjs.org/ja', 'https://ja.nuxtjs.org/']"></references>
