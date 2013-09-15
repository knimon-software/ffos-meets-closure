# FFOS meets Closure
この [FirefoxOS](http://www.mozilla.jp/firefoxos/) アプリケーションは、Google製のJavaScript開発環境 [Closure Library](https://developers.google.com/closure/library/?hl=ja) が利用できるかどうかの検証目的で作成されました。

Closure Library は以下の点から FirefoxOS アプリケーションの開発にも有効だと考えられます。

 * モジュールの独立性が保証されているため、協調開発が容易
 * パフォーマンスをよくするためにClosureCompilerを利用可能
 * 良質でよくテストされたモジュールが豊富なので、開発コストを低くできる
 * AltJS よりも学習コストが低い（AltJSだとデバッグのときピュアJSも読めなければならない）


# インストール
## FirefoxOS Simulator
[FirefoxOS Simulator](https://developer.mozilla.org/ja/docs/Tools/Firefox_OS_Simulator) を使う場合は、以下の手順でインストールできます。

1. FirefoxOS Simulator の `Add Directory` で、 `debug` または `production` の `manifest.webapp` を選択


# TODO
 - [ ] `development`でJavaScriptが動作しなかった原因の調査
 - [ ] 実機へインストールする方法の確立


# 開発者
OrgaChem (orga.chem.job@gmail.com)
