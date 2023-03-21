# React入門
## ここで分かること
- 自分のPC内でのReactプロジェクトを作り方
- Reactの特徴・動く仕組み、Reactでできること
- Reactプロジェクトの構成
- 開発の際よく使うパッケージの使い方

## 勉強する上で意識してほしいこと
- 一番偉大な先生はGoogle（井原はただの助手。大学でいうTAみたいなもん）
- 今回紹介する内容よりも詳しい情報がGoogle（ブログ、Youtubeなど）に
沢山載っている
- Google検索を使いこなせるようになってください。
→そのためには、Reactを開発する上での基礎を知る必要があるので、それを学んでからはGoogle先生と一緒に自己学習を進めていただければ！

**「教えられて書く」よりも「自分で疑問を持ち、調べながら書く」方が圧倒的に実力が付きます！！！(自戒を込めて…)**
## Reactとは？
Facebook(現：Meta)が開発・提供しているUIライブラリ
世界で最も使用されている。フロントエンド開発では間違いなく必須
Javascriptで書かれている

主な特徴は以下の通り
- 必要な部分しか更新されないので、高速
※仮想DOM（後ほど解説）で動作
- SPA（単一ページで動かすアプリ）の開発に最適
- React Nativeに技術を応用でき、スマホアプリも開発できる
- 学習コストが低い

### なんでReactなの？Javaのままで良くない？
Reactを使うことで以下2つが実現できる。
- SPA（Single Page Application）：ユーザー視点（ページ遷移が発生しないなど）
- 高パフォーマンス且つ効率性の高い開発：開発者視点
ユーザーが求めるUI/UXのレベルとその変化するスピードが年々上がってきている。

既存のJavaなどのフレームワークでは使いやすさ・開発スピードの観点で対応しきれなくなってきている。
変化に対応しやすいかつ最先端のUI/UXを実現できる手段としてReact(画面側の操作に優れている)が
注目されている。

### なんで高パフォーマンスなの？
仮想DOMを使用することで高パフォーマンスを発揮！
※DOMとは？
Document Object Modelの略
HTMLを解釈し、WEB画面を表現するためのインターフェース
Javascriptを使うことで、直接編集することが可能

#### WEB画面が表示される流れ
HTML,CSS→DOM→ブラウザでレンダリングされて画面表示
※HTML,CSSのコードのままだと、人間の目では理解しにくい→わかりやすい形に変換している

#### 参考
- Reactの仮想DOMを理解しよう！
https://www.monster-dive.com/blog/web_creative/20211112_002051.php
- [基本]DOMとは
https://zenn.dev/antez/books/6da596a697aa86/viewer/7434bb

#### 仮想DOMの仕組み
![仮想DOMの仕組み](../../img/スクリーンショット%202023-03-21%2011.21.32.png)

### Reactのデメリット
- メモリを多く消費する
→Reactは変更箇所だけを更新するために、ページの情報をメモリに保持しているためどうしてもメモリを圧迫する。（仮想DOM）
表示速度を上げるためにメモリを消費してしまう。また、更新が少ないWebページではメモリを犠牲にしてまで表示速度を上げる意味が薄い

- 初期ページを読み込むのに時間がかかる
→SPAの特徴の１つとして、1回の通信でWebページ全体を取得するというものがある。
この特徴が、初期ページの読み込みに時間をかけてしまう原因になってしまう。
1回の通信でWebページ全体を取得するということは、その分通信するデータ量が多くなってしまうということになる。
そのため、SPAは初期ページの読み込みに時間をかかるケースが多い。

### React活用例
Trivago（旅行サイト）
検索結果の絞り込みなどだけでなく、ホテルの各属性情報についても遷移することなく表示。
## React環境構築
ここでは、ローカル環境にReactプロジェクトを作成する方法を紹介する。
### Node.jsとは？
Webページ作成などの際に使われるJavascriptを、サーバー側で動作させるプラットフォーム。
→元々JavascriptはWebブラウザ上のみで動作し、サーバー上で動作させることが出来なかったが、Node.jsが登場することでサーバー側での動作が可能になった！
※Node.jsの登場により、Javascript１つで画面側・サーバー側の両方を実装できるようになった！
#### 参考
JavaScriptの歴史【紆余曲折を経たプログラミング言語】 – 株式会社ライトコード (rightcode.co.jp)
### 環境構築手順
1. node.jsをインストールする。
   ※CLIというものを使用。Node.jsのコマンド一つで、ローカル環境にフレームワークのプロジェクトを作成できる。
    →以下サイトからnode.jsをインストールする。(推奨版をダウンロードする)
    https://nodejs.org/ja/download/
   
2. コマンドプロンプト（Mac:ターミナル）を開き、コマンドを実行し、プロジェクトを作成する。
   ```
   npx create-react-app my-app(任意のプロジェクト名）
   ```
3. ローカルに構築したプロジェクトを起動する。
   - 以下コマンドを実行し、作成したプロジェクトのディレクトリに移動する。
    ```
    cd my-app
    ````
   - 以下コマンドを実行し、プロジェクトを起動する。 
     ```
     npm start
     ````
     このような画面が表示されていればOK！
     ![React起動画面](../../img/スクリーンショット%202023-03-21%2011.42.44.png)

### 環境構築解説
#### npmとは？
Node.jsのパッケージを管理するシステム、所謂パッケージ管理システム。
アプリケーションを作成する際、便利なパッケージ（外部パッケージ）をそのプロジェクトにインストールして、使用できる。
※npmコマンドで管理する情報は「package.json」ファイルに記録される。

### プロジェクトの中身
![プロジェクトの中身(概要)](../../img/スクリーンショット%202023-03-21%2011.46.56.png)

### プロジェクトの中身(詳細)
![プロジェクトの中身(詳細)](../../img/スクリーンショット%202023-03-21%2011.53.28.png)

## Reactのお作法
App.jsの記述を見て、「あれ、Progateでやったのと違う」と感じたのでは？
実はReactの記述形式は複数ある…。

1. 関数型(今回作成したプロジェクトはこっち)
   ![関数型](../../img/スクリーンショット%202023-03-21%2012.02.47.png)
2. クラス型(Progateはこっち)
   ![クラス型](../../img/スクリーンショット%202023-03-21%2012.03.41.png)
※今回は関数型を使用する。(アロー関数を使用)
理由：コードが短い、Hooksという便利機能が使える
### 試しに書いてみよう
- 画面に表示したい文字列を入力。今回は「テスト」と入力。
- return内で、定義した変数を記述する
    ![App.jsにテストと入力](../../img/スクリーンショット%202023-03-21%2012.09.01.png)
- 「テスト」という文字列が表示されていればOK！
  ![画面にテストが表示されているはず](../../img/スクリーンショット%202023-03-21%2012.13.36.png)

## コンポーネント思想・props
### コンポーネントとは？
Reactで画面に表示される部品のことで、表示に必要なデータや処理などを1つのオブジェクトにまとめたもの。
画面に表示するための部品を作ることによって、いつでも簡単に組み込むことで部品を再利用することができる。

**例**
![コンポーネント例](../../img/スクリーンショット%202023-03-21%2012.16.40.png)
### propsとは？
下記例のように、同じコンポーネントで中身の文章を変えたいとき、propsを使うことで、引数のような形で表示したい値を指定することで、同じコンポーネントでも、中身を変えることが出来る。

**例**
![propsどうなってるんだ？](../../img/スクリーンショット%202023-03-21%2012.17.57.png)

### 実際に作ってみる
- srcフォルダ内にComponent.jsファイルを作成する。
- 以下コードを貼り付ける。
  ```
  const Component = (props) => {
    return (
        // jsxではclassはclassNameで指定する
        <div className="component">
            <h2>{props.text}</h2>
        </div>
    );
    };

    export default Component;
    ```
- App.jsを開く。
- 任意の箇所に以下コードを記述する。
  ```
  <Component text="props練習"/>
  ```
- 以下のように表示されたらOK！(“props練習”と入力した部分を変えてみると、表示される文字列も変わるはず！)
  ![props練習が画面に出ているはず...！](../../img/スクリーンショット%202023-03-21%2012.22.09.png)

## よく使うモジュールの紹介（＋Hooks）
Reactには、便利な外部ライブラリが沢山存在する。（多すぎて逆に迷う）
その中でも特に使用頻度が高いライブラリをいくつか紹介する。
（サンプルコード＋説明を掲載。）
1. useState
   Hooksの一つ。画面上に表示されるデータ等、アプリケーションが保持している状態を保持・変更を行う。
   ```
    import React from 'react'
    import { useState } from "react";

    export const UseStateTemplate = () => {
        //一つ目に変数名、２つ目に変数に値を格納する関数名を定義
        const [text, setText] = useState("A");
    return (
        <div>
        <p>ページ遷移をすることなく、画面上の値を変更できる</p>
            <p>{text}</p>
            <button onClick={() => {setText("B")}}>値をBに変更</button>
            <button onClick={() => {setText("C")}}>値をCに変更</button>
            <button onClick={() => {setText("A")}}>元に戻す</button>
        </div>
    )
    }
   ```
1. useState　–おまけ：仮想DOMの仕組みを体験-
   ```
    import React from 'react'
    import { useState } from "react";

    export const VirtualDomTemplate = () => {
        const [text, setText] = useState("変更前仮想DOM");
        const method = () => {
            setText("変更後仮想DOM");
            console.log(text);
        };
    return (
        <div>
            <h1>仮想DOMの仕組みを体験</h1>
            <p>{text}</p>
            <button onClick={method}>レンダリングしてtextの値を変更する！</button>
            <p>ボタン押下後、画面に表示されているtextと出力結果を確認</p>
            <p>同じ変数を指定しているにも関わらず、値が異なるはず</p>
            <p>なぜ？setText実行→console.log出力→レンダリング後、setTextで代入した値が画面に反映される！</p>
        </div>
    )
    }
   ```
1. react-router-dom
   ReactはSPAであるため、全画面を1つの画面として扱い、初期表示時に一気に読み込むことになる
    →react-router-domを使い、パスごとに
    表示内容を変えることでコンテンツの
    切り替えが可能！
    ```
    import React from "react";
    import { Link, useNavigate } from "react-router-dom";

    export const RouterTemplate = () => {
    const navigate = useNavigate();
    const goToLogin = () => {
        console.log("ログインページへ遷移");
        navigate("/login");
    };
    return (
        <div>
        <p>関数内でページ遷移を設定できる。</p>
        <button
            onClick={() => {
            goToLogin();
            }}
        >
            ログイン画面へ
        </button>
        <p>
            <Link to={`/login/`}>Link</Link>
            で指定する方法もあり（ただしこの場合は遷移のみで、ロジックを持たすことができない）
        </p>
        <p>※App.jsでどのページでどのファイルを表示させるか、設定する必要あり</p>
        </div>
    );
    };
    ```
    **コードの説明**
    ![コードの説明](../../img/スクリーンショット%202023-03-21%2012.30.30.png)
1. react-hook-form
    ```
    import { useForm } from "react-hook-form";

    const FormTemplate = () => {
        //フォームを定義
        const { handleSubmit, register, formState: { errors } } = useForm();
        //送信時実行する関数を定義
        const onSubmit = (values) => {
        console.log(values.email);
        console.log(values.password);
    };

    return (
        <div>
        <p>バリデーションなど、簡単にフォームが実装できる</p>
        <form onSubmit={handleSubmit(onSubmit)}>
        <input
            type="email"
            {...register("email", {
            required: "Required",
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address"
            }
            })}
        />
        {errors.email && errors.email.message}
        <br/>
        <input
            {...register("password", {
                required: "Required",
            })}
        />
        {errors.password && errors.password.message}
        <br/>
        <button type="submit">送信</button>
        </form>
        <br/>
        </div>
    );
    };

    export default FormTemplate;
    ```
1. little-state-machine
    ```
    import React from "react";
    import { createStore, useStateMachine } from "little-state-machine";

    export const SessionTemplate = () => {
    createStore({
        yourDetail: { name: "" },
    });

    const updateName = (state, payload) => {
        return {
        ...state,
        yourDetail: {
            ...state.yourDetail,
            ...payload,
        },
        };
    };
    const { actions, state } = useStateMachine({ updateName });
    return (
        <div>
        <p>Javaでいうセッション管理ができる</p>
        <p>
            公式サイトは
            <a
            href="https://www.npmjs.com/package/little-state-machine"
            target="_blank"
            rel="noreferrer"
            >
            コチラ
            </a>
        </p>
        <p>{state.yourDetail.name}</p>
        <div onClick={() => actions.updateName({ name: "bill" })}>billに変更</div>
        <div onClick={() => actions.updateName({ name: "john" })}>johnに変更</div>
        <p>リロードしても値が消えないことを確認</p>
        </div>
    );
    };
    ```
1. useEffect
   - Reactコンポーネント内部からの、外部データの取得、DOM更新等の行為を副作用または、略して作用（effects）と呼ぶ。
   - これらの操作は、他のコンポーネントに影響することがあり、またレンダーの最中に実行することが出来ない。
   - そのため、useStateや後述のAPI実行などの際は、useEffectを使って実行タイミングを制御することが推奨されている。
    ```
    import React from 'react';
    import { useState, useEffect } from "react";

    export const UseEffectTemplate = () => {
        const [ count, setCount ] = useState(0);
        /* 
    * useEffectは、第一引数にcallbackを入れて、第二引数に依存する値の配列を入れる
    * 依存する値が変更される度にcallbackが実行される
    */
        useEffect(
            () => {
                console.log(count);
            },
            [ count ]
        );
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>カウント</button>
            <p>Q. どういう時に使う？</p>
            <p>A. 例）APIの実行タイミングを制御したい時<br/>⇨useEffectを設定することで、レンダリングのたびにAPIが呼び出されてしまうのを防ぎ、負荷軽減できる。</p>
        </div>
    )
    }
    ```
1. axios
    ```
    import React from "react";
    import axios from "axios";

    export const AxiosTemplate = () => {
    const getAPI = async () => {
        const { data } = await axios.get(
        "https://nj7quvef16.execute-api.ap-northeast-1.amazonaws.com/users-stage/users"
        );
        console.log(data);
    };
    return (
        <div>
        <p>REST APIを実行するためのモジュール</p>
        <button onClick={getAPI}>APIを実行してみる</button>
        </div>
    );
    };
    ``` 
## その他Tips
Q. 英語が苦手です。

A. DeepLと検索してみてください。従来の翻訳ツールと比べかなり高精度なので安心です。

Q. React開発を始めたいが、流れが分からない、何からやればいいか分からない

A. Googleで「React チュートリアル」と検索してみてください。
Quita, Reffectなどのサイトが沢山出てくると思います。
具体的には、ToDoアプリを作ってみるチュートリアルが載っていたりするので、そちらが参考になるかと思います。
  