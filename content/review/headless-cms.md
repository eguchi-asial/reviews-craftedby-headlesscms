---
id: 'headless-cms'
category:
  - TECH
  - Vue
  - Nuxt
  - nuxt/content
  - HeadlessCMS
title: 'HeadlessCMSを触ってみた'
description: 'まさにこのレビューサイトがHeadlessCMSでできています。触ってみた感想と、CMSとの違いについて触れてます。'
yyyymmdd: '2021-02-28'
links:
  - https://content.nuxtjs.org/ja
  - https://ja.nuxtjs.org/
---

<tags :tags="category"></tags>

HeadlessCMSを使って、趣味や技術について綴っていこうと思います。

## HeadlessCMSとは

Head = View。
WordpressなどのようなCMSと異なり、コンテンツを入稿したり、公開するための管理操作に対して、viewが存在しません。
mdやjsonを使って、フロントと切り離して管理されます。

このレビューサイトがまさにHeadlessCMSで作られており、<a href="https://content.nuxtjs.org/ja" target="_blank">nuxt/content</a>を採用しています。

nuct/contentは開発者が運用する前提で設計されているようです。
また、今回採用したHeadlessCMSは肝心の記事もGitで管理されるため、記事のrollbackなども即座に簡単に行えます。

mdファイルの中にvueコンポーネントが書けるので、コンポーネントを組み上げながら記事を組み上げる運用ができます。
これは中々新鮮な体験でした。

```md SAMPLE
---
id: 'Outriders'
category:
  - GAME
  - STEAM
  - 無料
title: 'Outriders体験版をやってみた'
description: '2/26にスクエニさんからOutriders体験版がリリースされましたので、やってみた感想です。'
yyyymmdd: '2021-02-28'
links:
  - https://www.jp.square-enix.com/outriders/
  - https://www.jp.square-enix.com/outriders/demo/
---

<tags :tags="category"></tags>

Outriders体験版やってみました。面白いです。

<references :links="links"></references>
```

こんな感じで、mdの中にtagsやreferencesのようにvueコンポーネントを使って記事を組み立てることができます。
記事で共通のパーツはcomponentにして再利用することで記事の書きっぷりが統一されます。

<references :links="links"></references>
	