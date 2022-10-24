import React from 'react';
import { useState, useEffect } from "react";

export const UseEffectSample = () => {
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
