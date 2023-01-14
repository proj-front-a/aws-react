import axios from "axios";
import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

const ModifyReserv = () => {
  //ToDo
  //予約ボタンを押した際のpropsとしてcapacityに含まれるすべての値をstateとして受け取っている
  //現時点ではcapacity1719の時間帯のみが来る前提で書いているため、
  //他の時間帯capacity0912,1315,1517が選択されることを想定して時間帯のプロパティ値を変数で扱えるようにする
  const { state } = useLocation();
  console.log(state);
  const id = state.reserv.currentCapacity.id;
  const category = state.reserv.currentCapacity.category;
  const date = state.reserv.currentCapacity.date;
  // const capacity = state.reserv.currentCapacity.capacity1719;
  console.log(state.reserv.currentCapacity);

  const [fixCapacity, setFixCapacity] = useState(state.reserv.currentCapacity);
  console.log(fixCapacity);

  const fixedReservClick = () => {
    // オブジェクトのうち、fixedReservClickで渡された時間帯（例：capacity1719）と同じ時間帯の値を「1⇒0に変更する」
    setFixCapacity({
      ...fixCapacity,
      capacity1719: 0,
    });
    console.log(fixCapacity);

    axios
      .put("http://localhost:3004/capacity/" + id, fixCapacity)
      .then((res) => {
        //予約が成功した時の処理を書く。
        console.log(res);
        return <div>予約に成功しました。</div>;
      })
      .catch((err) => console.log(err));
  };

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };

  return (
    <center>
      <Card border="primary" style={{ width: "25rem" }}>
        <Card.Body>
          <div>下記の日程で予約しますか？</div>
          <div>ID：{id}</div>
          <div>カテゴリ：{category}</div>
          <div>日にち：{date} </div>
          <div>時間帯：{"capacity1719".substr(-4)}時</div>
          <Button
            variant="primary"
            type="submit"
            onClick={() => fixedReservClick({ state })}
          >
            予約する
          </Button>
          <Button variant="primary" onClick={handleClick}>
            戻る
          </Button>
        </Card.Body>
      </Card>
    </center>
  );
};

export default ModifyReserv;
