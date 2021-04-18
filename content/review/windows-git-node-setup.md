---
id: 'windows-git-node-setup'
category:
  - TECH
  - Windows
  - Node
  - npm
  - nodist
  - tips
title: 'WindosでNode/npmの環境構築'
description: '約10年ぶりにWindowsで開発環境作ったらちょっとハマったのでメモ'
rating: 3
yyyymmdd: '2021-04-17'
links:
  - https://nodejs.org/en/
  - https://www.npmjs.com/
  - https://github.com/nullivex/nodist
---

<tags :tags="category" :no-link="true"></tags>

<rating :rating="rating"></rating>

「WindowsでNodeの環境作るのどうやんの？」から実際にハマった環境構築に関する記事です。

## 何をしたのか？

私は開発では普段からMacを使ってますが、10年ぶりくらいにWindowsでも開発環境を作ってみるかと思い立ったのがきっかけです。

[Node]('https://nodejs.org/en/') が使える環境を作りたかったのと、Nodeのversionは開発するsystemによってコロコロ変わることが多いので
version管理ツールを使って環境を整備することにしました。

Macの場合は普段はnodebrewや、nodenv使うことが多かったのですがWindowsで調べると[nodist]('https://github.com/nullivex/nodist') がHITすることが多かったため、こちらを使って環境構築してみました。



## Try

1. exeのDL - https://github.com/nullivex/nodist/releases/tag/0.9.1
  現時点で最新のversion: 0.9.1のtagからNodistSetup-v0.9.1.exeをDLして実行します
2. install可能なNodejsのversion一覧をチェック 

```
$ nodist dist
  0.1.14
  0.1.15
  0.1.16
  0.1.17
  0.1.18
  0.1.19
  0.1.20
  0.1.21
・・・
  14.16.0
  14.16.1
  15.0.0
  15.0.1
  15.1.0
  15.2.0
  15.2.1
  15.3.0
  15.4.0
  15.5.0
  15.5.1
  15.6.0
  15.7.0
  15.8.0
  15.9.0
  15.10.0
  15.11.0
  15.12.0
  15.13.0
  15.14.0
```

どうやら最新は15.14.0のようですが、公式を見ますと安定版は14.16.1 LTSなので今回は14.16.1 LTSにしました。

<img src="/node-stable.png" />

3. install

```
$nodist + 14.16.1
```

4. 使用するnodeのversionを指定

```
$nodist 14.16.1
```

5. nodeのversion確認

```
$ node -v
v14.15.4
```

これで完了です。
違うversionのnodeを入れたくなったら、上記の手順でversion番号を変えればＯＫです。


## 何にハマったか？

問題はこの後実際に、npmを使ったときに発覚しました。
※npmはnodeと同時に入ってきます。

先の作業ですと、npmが古いままで、エラーになります。

今は切り替えちゃいましたが、この6.9.0がinstallされてました。

```
$ nodist npm
  6.9.0
> 6.14.10  (global: 6.14.10)
```

なので、

```
nodist npm global 6.14.10
```

とすることでnpmのversionを上げて指定する必要がありました。

## 最後に

nodistの乗っけの印象は「楽ではない。中途半端に便利」って感じでした。

[こちらの方]('https://zenn.dev/ymasaoka/articles/note-uninstall-nodish-windows') が書いてますが、確かに更新ないのとuninstall面倒くさそう。

なので、nodistを使う使わないの判断は自己責任で。

私は使ってしまったけど直近は問題もないのでしばらくはこれで良いかなって。
このblogのnode versinを上げる必要が来たら考えます。

<references :links="links"></references>
