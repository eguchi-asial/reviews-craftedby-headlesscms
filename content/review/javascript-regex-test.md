---
id: 'javascript-regex-test'
category:
  - TECH
  - JavaScript
  - 正規表現
title: '正規表現ってやっぱ便利だわ'
description: '正規表現を使えば手軽に文字列includesテストできるよねって軽い話です。'
rating: 5
yyyymmdd: '2021-03-19'
links:
  - https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Regular_Expressions
---

<tags :tags="category" :no-link="true"></tags>

<rating :rating="rating"></rating>

# 正規表現で仕様を実現しよう

最近仕事で、JavaScriptで「.jpg, .jpeg, .png, .gif, .bmp, .tiff」の場合はゴニョゴニョするみたいな仕様がありました。

こうしました。

```JavaScript
const regex = /.jpg|.jpeg|.png|.gif|.bmp|.tiff/
regex.test('アイウエオ.jpeg')
=> true
regex.test('アイウエオ.j')
=> false
```

便利。

正規表現がなかったら配列に持たせてループで回してincludeするとかだと思う。
やり方は色々あるけど、書くのも考えるのも検証するのも面倒臭い

```JavaScript
const extensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff']
extensions.find(ex => "ほげ.jpeg".includes(ex))
=> ".jpeg"
extensions.find(ex => "ほげ.j".includes(ex))
=> undefined
```

undefinedじゃなければとかになる。

なのでこうすることでtrue/falseでチェックはできるけど

```
!!(extensions.find(ex => "ほげ.jpeg".includes(ex)))
=> true
!!(extensions.find(ex => "ほげ.j".includes(ex)))
=> false
```

`!!` はundefinedがtrueになるのを反転するので、「純粋に値がセットされているか」を判定することができます。
ただ知っていないと読みにくいですよね。
JSに限らないですが、この手の「便利だけど知らないと読みにくい。読んでも理解が合っているか自信ない」ってのはあまり好きじゃないです。

「綺麗」「かっこいい」「短い」も大事ですが、リーダビリティの方を重視したいです。

# まとめ

正規表現は用法用量を守って使えば、便利で簡潔で読みやすい。
過度な正規表現は逆効果なのでオススメしない！！

<references :links="links"></references>
