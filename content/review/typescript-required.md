---
id: 'typescript-required'
category:
  - TECH
  - TypeScript
  - Tips
title: 'Required<V>が便利だった'
description: 'Required<V>を使えばOptionalも怖くない。便利って話です。'
rating: 5
yyyymmdd: '2021-04-01'
links:
  - https://www.typescriptlang.org/docs/handbook/utility-types.html#requiredtype
---

<tags :tags="category" :no-link="true"></tags>

<rating :rating="rating"></rating>

下記のようにTypeScriptで型定義にoptionalが含まれている場合、

```javascript
interface Hoge {
  name: string
  nicknames?: string[]
}
const hoge: Hoge = {
  name: 'taro',
  nicknames: []
}
hoge.nicknames.push('nickname')
```

>hoge.nicknames.push('nickname')

この箇所でeslintでこのようなエラーがでます。

```
(property) Hoge.nicknames?: string[] | undefined
Object is possibly 'undefined'.Vetur(2532)
```

nicknameがoptionalでundefinedになりうるため、容易にpushできない危険だと言ってます。
今回のhogeが必ずnicknameを持つケースとして扱いたいなら、、、

```
interface Hoge {
  name: string
  nicknames?: string[]
}
const hoge: Required<Hoge> = {
  name: 'taro',
  nicknames: []
}
hoge.nicknames.push('nickname')
```

このように記述することでeslintのエラーはなくなります。

Requiredによって、hogeに使う型定義のHogeのoptionalが全て外れます。
つまり必ず必要なpropertyとして宣言したことになります。

undefinedはあり得なくなるので、eslintのエラーが消えたということです。
既存のソースコードで雑にoptonalとか追加されていると、本当にoptionalなのかも不明ですし、
だけど自分はマストで使いたいって時の逃げ道としてすごい便利でした。

<references :links="links"></references>
