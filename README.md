# React AWS開発ロードマップ

## 目標

とりあえず動くモノを１つ作り上げる
＋新技術に積極的に触れることで、メンバー全員の知識向上をはかる。

## 作成するもの

家事代行のマッチングサイト
⇨開発経験を重視するため、要件などは詰めず軽めに実装する。（例外処理なども不要）

## 使用する技術

1. React（画面作成）

2. AWS（S3, Cognito, Lambda, DynamoDB, API Gateway）

## 事前準備

1. Githubアカウント登録
- 社内メールアドレスを使い、[コチラ](https://qiita.com/ayatokura/items/9eabb7ae20752e6dc79d)を参考に登録。

2. 開発に必要なツールをインストール
- [Visual Studio](https://code.visualstudio.com/download)
- [Github desktop](https://desktop.github.com/)（コマンドプロンプト・ターミナルからも使用可能だが、Gitアカウント認証設定がかなり面倒なのでアプリを使用）
- [Git](https://www.curict.com/item/60/60bfe0e.html)（Macbookを使用する場合は標準でインストールされているため不要）
- [Node.js](https://prog-8.com/docs/nodejs-env-win)

## チュートリアル

### React

1. Progateの実施（無料会員で実施可能）

**【実施するコース】**

- [JavascriptⅠ](https://prog-8.com/lessons/es6/study/1)
（reactを構成している言語。基礎固めとしておすすめ※Javascript経験者はスキップしてもいいかも）

- [React Ⅰ](https://prog-8.com/lessons/react/study/1)（「state」というReactの最も大事な機能を学べます）

2. [公式サイトのチュートリアルを実施](https://ja.reactjs.org/tutorial/tutorial.html)

※公式のチュートリアルは、コードの説明などがなく、動きを理解するのがやや難しいため、以下に参考サイトを記載いたします。

- [React.jsを始めよう：動かしながら仕組みを知ろう](https://media.wemotion.co.jp/technology/react-js%E3%82%92%E5%A7%8B%E3%82%81%E3%82%88%E3%81%86%EF%BC%9A%E5%8B%95%E3%81%8B%E3%81%97%E3%81%AA%E3%81%8C%E3%82%89%E4%BB%95%E7%B5%84%E3%81%BF%E3%82%92%E7%9F%A5%E3%82%8D%E3%81%86/)
- [いまからはじめるReact](https://qiita.com/Kazunori-Kimura/items/d94ddd1a8d8e2e39d504)

### AWS

1. [公式チュートリアル](https://aws.amazon.com/jp/getting-started/hands-on/build-serverless-web-app-lambda-apigateway-s3-dynamodb-cognito/)を実施

### Github
1. まずはコレ⇨(サル先生のGit入門)[https://backlog.com/ja/git-tutorial/]
2. (Github desktopの簡単な使い方)[https://ferret-plus.com/8498]
3. 2021年度技術検証PJの勉強会資料を参照※

最低限できるようになっておきたい操作：push, pull, commit, branch作成・変更

### その他参考サイト
- [なるべく早く身につけたいエラーとの向き合い方](https://qiita.com/tak001/items/5f43cb475565667a5bf7)
- [npm入門](https://qiita.com/maitake9116/items/7825d90c09f3e2f87dea)
- [DeepL(翻訳サイト。調査の際とても役立ちます)](https://www.deepl.com/ja/translator?referrer=https%3A%2F%2Fwww.google.com%2F)

## いよいよ実装スタート！
### まずはサンプルコードを動かしてみる。
1. Github desktopで、react-sampleブランチに切り替える。
2. Github desktopから、VS Codeを開く。
3. VS Code内でターミナルを起動し、以下を実行する。
```bash　
npm install
```
4. 以下コマンドを実行し、localhost:3000が起動することを確認する。
```bash　
npm start
```