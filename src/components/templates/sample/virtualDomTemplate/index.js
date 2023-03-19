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
