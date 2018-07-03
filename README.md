# 6mensktm
HTML5 + JavaScript で動作する麻雀アプリ「電脳麻将」<br>
を、無理矢理六面打ちに対応させつつ
PWAアプリ化してみた物

…時間制限がないので、やっぱり感じを掴むとか慣らし程度なんでしょうかね…

## デモ
https://tshimizu09.github.io/6mensktm/

## ライセンス
Copyright&copy; 2018 tshimizu09<br>
Released under the MIT license<br>
https://github.com/tshimizu09/6mensktm/blob/master/LICENSE

## ゲームエンジン部分のソースコードと、そのREADME
https://github.com/kobalab/Majiang<br>
https://github.com/kobalab/Majiang/blob/master/README.md

### テストプレイの結果、現時点で分かっている事
・横画面で動かす事しか想定していないので、強制的に横画面で動くように設定しています。

・こしらえたのはPWA化と四面打ち用の画面作りだけなので、ゲームの基本動作は全て　電脳麻将　さんに準じます。

・PWAアプリとして動作するようにしたので、オフラインにしても基本的に全機能動いているはずです。<br>
　（チェック漏れがあったら申し訳無い）

・オフライン動作デモはこちら
https://twitter.com/tshimizu09/status/1007889521944322049/video/1

・デモサイトを各種ブラウザで開くと、ホーム画面に追加しますか？と聞かれる事があるかもしれませんが、<br>
　PWAアプリの仕様がそうなってるので邪魔になったら申し訳無い…<br>
　ホーム画面に後で手動で追加する方法やメリット等は以下に記します。

・AndroidのGoogle ChromeやiOSのSafariで、ホーム画面に追加をしてそこから起動すると単体アプリっぽく動きます

・WindowsのGoogle Chromeの場合、その他のツール→ショートカットの作成で、<br>　ウインドウとして開くのチェックを入れたまま作成すると単体アプリっぽく動作します。

・WindowsのGoogle Chromeで単体アプリっぽく動かしたのがこちら
https://twitter.com/tshimizu09/status/1006853350409695234/video/1

・Windows10のMicrosoft Edgeの場合、メニューに出てくる　ピン留めする（恐らく2種類出ますがどちらでもいいはず）を<br>　選んで、それを起動すると単体アプリっぽく動作するはずです。<br>
　（Windows10 April Update 2018からのMicrosoft Edgeの新機能なので、それ以前では多分そうならないはず）

・Firefox 61でレンダリングの仕様に変更があり、画面サイズに合わせた画面の自動調整が<br>　完全には効かなくなってしまったため、現時点でFirefoxはお奨めしづらくなりました。<br>
　（毎回開く前にブラウザキャッシュを削除すれば自動調整が動く事は動きますが、大変不便だと思います）

・Windows10専用のUWPアプリ化も一応出来そうですが、現時点では野良アプリとしての出力に失敗するため作業中です。

## 謝辞
Favicon等の桜アイコンに、ICOOON MONOさんの　桜のフリーアイコン　を使用させていただいてます。
http://icooon-mono.com/16217-%E6%A1%9C%E3%81%AE%E3%83%95%E3%83%AA%E3%83%BC%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3/
