---
id: 'google-amp'
category:
  - TECH
  - AMP
  - SEO
title: 'GoogleAMPでハマった'
description: 'AMPで「AMPStateは動的な状態管理には使わない(使えない)」って話です。'
yyyymmdd: '2021-03-11'
links:
  - https://developers.google.com/amp?hl=ja
  - https://amp.dev/
  - https://amp.dev/documentation/
  - https://amp.dev/ja/about/how-amp-works/?referrer=ampproject.org
---

<tags :tags="category"></tags>

GoogleAMPを扱う機会があり、想像以上に苦戦したので綴ります。

## GoogleAMPとは

今更詳しく記載しないですが、[こちら](https://amp.dev/ja/about/how-amp-works/?referrer=ampproject.org)に公式の説明があります。

最近スマホでGoogle検索した際に、検索結果に `⚡️` こんなアイコンでますよね。あれです。

AMP対応することで、高速に表示され、SEOにも有利だとかなんとか。
AMPに主眼を置くと言うよりは、要はモバイルフレンドリーが重視されると言うことですね。

## 何にハマったのか？？

```html SAMPLE
<amp-state :id="hoge">
  <script type="application/json">
    false
  </script>
</amp-state>

<p id="hoge">hoge</p>
<button :on="tap:hoge.hide,AMP.setState({hoge: !hoge)">
    トグルhogeボタン
</button>
```

上記では、 `hoge` というAMPStateをbooleanでdefault falseで宣言しています。
「トグルhogeボタン」をクリックすることで、hogeに反転させたbool値が入ります。


・・・

ですが、入らないんですよ。

setStateの中でhogeを参照しても、 `0` がセットされてしまいます。
なぜかわかりませんが、このような使い方は想定されていないのかもしれないです。
これ本当になぜなのか知りたい。


URLに `#development=1` をつけることで、debugが可能になります。
development状態で、consoleで `AMP.printState()` をすると今設定されているAMPStateの状態が見れます。

printStateで確認しても、 `0` が代入されてました。

state値を参照せず、直接以下のような記述をした場合は、正常にtrue/falseが格納されてました。

```html
<button :on="tap:hoge.hide,AMP.setState({hoge: false)">
    トグルhogeボタン
</button>
```

結局、hideの箇所をtoggleVisibilityにすることで今回は事なきを得ましたが、中々制約やら、変な挙動を取るやらでAMPは難しいなって感想でした。
AMP使うときは、jsもscopedなcssも使用が限定的なので、要件がシンプルかつスリムで融通の効くシステム or クライアントの時に採用しましょうw

<references :links="links"></references>
