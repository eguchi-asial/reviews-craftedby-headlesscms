# yuchon-review

## desc

Nuxt GitベースHeadlessCMSを用いたレビューサイト

- nuxt/content
  - https://content.nuxtjs.org/ja

## memo

- node
  - nodebrew: 14.15.1

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
## 参考) https://ja.nuxtjs.org/docs/2.x/get-started/commands/
$ npm run build
$ npm run start

# test
$ npm run test

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## tips

- mdのpathについて
  - mdが配置してあるディレクトリ名とidで自動生成される
    - 「reiew」/「mdのid名」

- mdの中にvueコンポーネントを書くときの注意点
  - https://content.nuxtjs.org/ja/writing#vue%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88
  - セルフクローズは使えない。壊れるので、<hoge></hoge>のように書く
