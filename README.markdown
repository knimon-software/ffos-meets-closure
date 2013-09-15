# FFOS meets Closure
この [FirefoxOS](http://www.mozilla.jp/firefoxos/) アプリケーションは、Google製のJavaScript開発環境 [Closure Library](https://developers.google.com/closure/library/?hl=ja) が利用できるかどうかの検証目的で作成されました。

Closure Library は以下の点から FirefoxOS アプリケーションの開発にも有効だと考えられます。

 * モジュールの独立性が保証されているため、協調開発が容易
 * パフォーマンスをよくするためにClosureCompilerを利用可能
 * 良質でよくテストされたモジュールが豊富なので、開発コストを低くできる
 * AltJS よりも学習コストが低い（AltJSだとデバッグのときピュアJSも読めなければならない）

なお、Closure Library のセットアップツール [goog-starter-kit](https://github.com/cocopon/goog-starter-kit) を使っています。


# インストール
## 共通の手順

1. Closure Tools をダウンロード、配置する

    ターミナルを開き、以下のコマンドを実行します。

        (`goog-starter-kit` ディレクトリに移動してから)
        $ python tools/setup.py

2. コンパイルする

    コンパイルすると、パフォーマンス向上や、ソースコードが難読化されるなどの
    利点があります。
    コンパイルするには、以下のコマンドを実行してください。

        $ python tools/compile.py

    コンパイルに成功すると、 `production/` ディレクトリに出力されます。

3. 下の手順に進む


## FirefoxOS Simulator
[FirefoxOS Simulator](https://developer.mozilla.org/ja/docs/Tools/Firefox_OS_Simulator) を使う場合は、以下の手順でインストールできます。

1. FirefoxOS Simulator の `Add Directory` で、 `debug` または `production` の `manifest.webapp` を選択


# TODO
 - [ ] `development`でJavaScriptが動作しなかった原因の調査
 - [ ] 実機へインストールする方法の確立


# 開発者
OrgaChem (orga.chem.job@gmail.com)
