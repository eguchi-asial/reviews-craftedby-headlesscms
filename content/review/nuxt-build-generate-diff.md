---
id: 'nuxt-build-generate-diff'
category:
  - TECH
  - Nuxt
  - target
  - build
  - generate
  - tips
title: 'nuxtのbuildとgenerateとtargetの関係について'
description: 'nuxt generateした際に@clickなどのeventが評価されない！って叫んでいた時に得た知見です。'
rating: 3
yyyymmdd: '2021-04-17'
links:
  - https://blog.mktia.com/diffrences-between-build-and-generate-in-nuxt/
  - https://ja.nuxtjs.org/docs/2.x/configuration-glossary/configuration-target/
---

<tags :tags="category" :no-link="true"></tags>

<rating :rating="rating"></rating>

nuxt generateした際に@clickなどのeventが評価されない！って叫んでいた時に得た知見です。

## 何にハマったか

local開発時にnpm run buildしたモジュールを、npm run startで確認していた際に、
「@clickで定義したeventが評価されない！」って騒いでいました。

評価されないというか、distの中を見てもあって欲しいjsが存在しないんですよね。

## いきなり結論

大した話じゃないので結論。

今回のこのブログは、nuxt-ts generateで静的サイトとして生成しています。
そのため、nuxt.config.jsにも以下のような定義を書いてます。

```
export default {
  target: 'static',
```

static = 静的ですね。

そして、staticにしている場合は、 `nuxt generateしたらdistに展開されます` 。

反対にSSRなら

```
export default {
  target: 'server',
```

です。

この場合は、 `nuxt buildしたらdistに展開されます`

今回私がバカだったのは、targetがstaticなのに、buildしてもjsがdistに作られない！って騒いでいるだけの話でした。

あほ。

targetがstaticなら「nuxt generate」して、npm run startなりbuilt in serverで確認する。

buildはSSR。targetもserverの時につかう。

<references :links="links"></references>
