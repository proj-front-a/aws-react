# React AWS 開発

## 目標

とりあえず動くモノを１つ作り上げる
＋新技術に積極的に触れることで、メンバー全員の知識向上をはかる。

## 本レッスン受講にあたり

・今回触れる技術は、React(html,css,Javascript)・Github・AWSと、それぞれ１つで技術開発できるぐらい、学ぶべき内容が多くなっている。
そのため、１つ１つについて詳しくなるというよりは、とりあえず全体の動きを理解して、動くモノを作り上げ、その後に１つ１つに関する理解を深めていってほしい。

・本レッスンは2022年度技術開発に閉じた話ではなく、今後教材として使ってもらうことを目指して作成しているので、積極的に活用していっていただきたい。
ただ、フロントエンド技術は移り変わりが激しいため、皆さんが閲覧する頃には陳腐化している可能性があることをご了承いただきたい。

## 作成するもの

家事代行のマッチングサイト
⇨ 開発経験を重視するため、要件などは詰めず軽めに実装する。（例外処理なども不要）

## 開発端末

私用端末
（自由度と開発の選択肢確保のため）
※どうしても OA 端末を使用しなければならない場合、追加で設定が必要なので、井原までご連絡ください。
※OA 端末使用時には、分離ブラウザを使用してください

## 使用する技術

1. React（画面作成）

2. AWS（S3, Cognito, Lambda, DynamoDB, API Gateway）

## スケジュール

1. 10 月いっぱい：フロントエンド学習（学習ステップ-React の 1. Progate の実施を完了する
2. 10 月下旬〜11 月上旬：React 勉強会 by 井原（ローカルでの開発の仕方、現場でよく使う機能などのハンズオン）
3. 11 月上旬〜中旬：実装するサービスの基本設計（作成する機能の決定及び実装分担の決定）
4. 11 月中旬〜12 月：React でサービスを実装（画面だけ。ローカルで作成・バックエンドは実装せず、API での取得項目はモックで代替）
5. 12 月：中間報告（React に触れてみた感想・気づき・躓きポイントを共有（日々の進捗確認をもとに発表））
6. 1〜2 月：AWS でバックエンド実装、本番環境構築
7. 3 月：実装追い込み、最終報告

## 事前準備

1. Github アカウント登録

- 社内メールアドレスを使い、[コチラ](https://qiita.com/ayatokura/items/9eabb7ae20752e6dc79d)を参考に登録。

2. 開発に必要なツールをインストール

- [Visual Studio](https://code.visualstudio.com/download)
- [Github desktop](https://desktop.github.com/)（コマンドプロンプト・ターミナルからも使用可能だが、Git アカウント認証設定がかなり面倒なのでアプリを使用）
- [Git](https://www.curict.com/item/60/60bfe0e.html)（Macbook を使用する場合は標準でインストールされているため不要）
- [Node.js](https://prog-8.com/docs/nodejs-env-win)

# 学習ステップ

## React

1. Progate の実施（無料会員で実施可能）

**【実施するコース】**

- [JavascriptⅠ](https://prog-8.com/lessons/es6/study/1)
  （react を構成している言語。基礎固めとしておすすめ※Javascript 経験者はスキップしてもいいかも）

- [React Ⅰ](https://prog-8.com/lessons/react/study/1)（「state」という React の最も大事な機能を学べる）

2. [React入門](documents/react/README.md)

3. [公式サイトのチュートリアルを実施](https://ja.reactjs.org/tutorial/tutorial.html)

※公式のチュートリアルは、コードの説明などがなく、動きを理解するのがやや難しいため、以下に参考サイトを記載。

- [React.js を始めよう：動かしながら仕組みを知ろう](https://media.wemotion.co.jp/technology/react-js%E3%82%92%E5%A7%8B%E3%82%81%E3%82%88%E3%81%86%EF%BC%9A%E5%8B%95%E3%81%8B%E3%81%97%E3%81%AA%E3%81%8C%E3%82%89%E4%BB%95%E7%B5%84%E3%81%BF%E3%82%92%E7%9F%A5%E3%82%8D%E3%81%86/)
- [いまからはじめる React](https://qiita.com/Kazunori-Kimura/items/d94ddd1a8d8e2e39d504)

### その他参考サイト

- [なるべく早く身につけたいエラーとの向き合い方](https://qiita.com/tak001/items/5f43cb475565667a5bf7)
- [npm 入門](https://qiita.com/maitake9116/items/7825d90c09f3e2f87dea)
- [DeepL(翻訳サイト。調査の際とても役立ちます)](https://www.deepl.com/ja/translator?referrer=https%3A%2F%2Fwww.google.com%2F)

---

## Github

1. まずはコレ ⇨[サル先生の Git 入門](https://backlog.com/ja/git-tutorial/)
2. 2021 年度技術検証 PJ の勉強会資料を参照※

### Github desktop 初期設定

1. Github desktop を起動し、ログインする。
2. 以下画面が表示されることを確認する。
   ![Github初期画面](img/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202022-09-29%2017.36.38.png)
3. 右下に表示されている「proj-front-a/awas-react」リポジトリを選択し、Clone ボタンを押下する。
   ![クローンするリポジトリを選択](img/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202022-09-29%2017.37.05.png)
4. 以下画面が表示されたら、「Clone」ボタンを押下する。

![リポジトリをクローンする](img/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202022-09-29%2017.37.48.png)

5. 以下画面が表示されていれば、ローカル環境にリポジトリのソースコードが取り込めている。
   ![リポジトリが表示される](img/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202022-09-29%2017.38.33.png)
6. 「Open in Visual Studio Code」ボタンを押すと、VS Code を起動できる。
   ![VS Codeを起動](img/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202022-09-29%2017.38.58.png)

---

## Bootstrap(React Bootstrap)

### Bootstrap とは

ウェブサイトや web アプリケーションの見た目(CSS)を作成できるフリーソフト。
米 Twitter 社が開発。
Boostrap にはテンプレートやテーマが最初からあるため、一から CSS を作らずとも、
用意されているテンプレートを使うだけで、オシャレな web サイトを作成できる。

### 導入方法

今回は、React 用にカスタマイズされた「React bootstrap」を使用していく。

まずは、[公式サイトの Getting started](https://react-bootstrap.github.io/getting-started/introduction/)を見ながら、React に「React bootstrap」を導入する。

1. 以下コマンドを実行する。

```bash　
npm install react-bootstrap bootstrap
```

2. index.js で、bootstrap 用の CSS ファイルをインポートする。

   ![index.js](img/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202022-12-12%2017.10.06.png)

### どうやって使うの？

上記公式サイトにも、実例が載っている。

これを React のコードにそのまま貼り付けるだけで使用できる。便利。

#### 【例：フォーム（ログイン画面などで使えそうですね！）】

[公式サイト](https://react-bootstrap.github.io/forms/overview/)に記載されている赤枠部分のコードを React にコピペすると....(http://3000/bootstrap にアクセス)

```
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BasicExample() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default BasicExample;
```

![フォーム](img/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202022-12-12%2017.05.51.png)

かっこいい入力フォームが作成できる！

他にも React-bootstrap で使えるレイアウトはたくさんあるので、公式サイト他、以下のサイトも参考になる。

- [CodeSandbox](https://codesandbox.io/examples/package/react-bootstrap)
- [[React] よーし! いっちょ React やってみっか! #6 スタイル編](https://dev.classmethod.jp/articles/lets-start-react-6/)

---

## AWS

### 全体構成図

![AWS構成図](img/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202022-10-03%2017.01.41.png)

### S3,Cognito

1. [公式チュートリアル](https://aws.amazon.com/jp/getting-started/hands-on/build-serverless-web-app-lambda-apigateway-s3-dynamodb-cognito/)を実施（バックエンド構築のチュートリアルもあるが、不具合で完結できないかつイマイチ理解しにくいため、不要で良いかと）

### dynamodb

- [初めてのサーバーレスアプリケーション開発 ～ DynamoDB にテーブルを作成する～](https://dev.classmethod.jp/articles/serverless-first-dynamodb/)

### Lambda

- [初めてのサーバーレスアプリケーション開発 ～ Lambda で DynamoDB の値を取得する～](https://dev.classmethod.jp/articles/serverless-first-lambda/)
- 上記サイト以外の Lambda 関数の実装方法は[「DynamoDB を Python（boto3）を使って試してみた」](https://qiita.com/estaro/items/b329deafdfef790aa355)が参考になる。

### API Gateway

- [初めてのサーバーレスアプリケーション開発 ～ API Gateway から Lambda を呼び出す～](https://dev.classmethod.jp/articles/serverless-first-apigateway/)

### その他

Udemy で、AWS のサーバーレスサービスで CRUD の REST API を作成するコースがある。
（これを学べばやりたいこと一通りできるようになる。）

https://www.udemy.com/course/awsrest-api/

---

## いよいよ実装スタート！

### まずはサンプルコードを動かしてみる。

1. VS Code 内でターミナル(=コマンドプロンプト)を起動し、以下を実行する。

   ![ターミナルを起動](img/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202022-09-29%2017.40.09.png)

```bash　
npm install
```

2. 以下コマンドを実行し、localhost:3000 が起動することを確認する。

```bash　
npm start
```

3. 以下画面が表示されることを確認する。簡単なサンプルであるため、色々操作してみる。
   ![サンプル画面](img/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202022-09-29%2018.04.53.png)

---

# 成果物作成

## 進め方（仮）

- チームではなく、個人で レポジトリを作成し、作業を行う。
- main ブランチにあるタグを Clone してきて、各チャプターのテーマに沿って実装を行う。

※レポジトリは、Github desktop の以下画面から作成可能。feature-ihara などの名前で作成する。

---

### 作成する機能

- ログイン
- 新規登録
- 家事サービス検索
- 家事サービス予約（Chapter 2 以降で実装）

---

## Chapter 一覧
https://github.com/proj-front-a/aws-react/tags
