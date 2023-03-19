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
