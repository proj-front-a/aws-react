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
  const id = state.reserv[0].currentCapacity.id;
  const category = state.reserv[0].currentCapacity.category;
  const date = state.reserv[0].currentCapacity.date;
  const updatecapacity = state.reserv[1];
  console.log(state.reserv[0].currentCapacity);
  console.log(updatecapacity);

  const [fixCapacity, setFixCapacity] = useState(
    state.reserv[0].currentCapacity
  );
  console.log(fixCapacity);

  const [successMsg, setSuccessMsg] = useState("");

  const handleOnClickFixedReserv = () => {
    // オブジェクトのうち、fixedReservClickで渡された時間帯（例：capacity1719）と同じ時間帯の値を「1⇒0に変更する」
    // ToDo:「予約ボタン」を一回押しただけだと反映されない。2回目に反映される（処理の順番に問題あり？）
    //　解決策の参考https://qiita.com/zoukun97/items/0fb14524c33894cc38dd
    switch (updatecapacity) {
      case "capacity0912":
        setFixCapacity({
          ...fixCapacity,
          capacity012: 0,
        });
        break;
      case "capacity1315":
        setFixCapacity({
          ...fixCapacity,
          capacity1315: 0,
        });
        break;
      case "capacity1719":
        setFixCapacity({
          ...fixCapacity,
          capacity1719: 0,
        });
        break;
      default:
        break;
    }
    console.log(fixCapacity);

    axios
      .put("http://localhost:3004/capacity/" + id, fixCapacity)
      .then((res) => {
        //予約が成功した時の処理を書く。
        console.log(res);
        setSuccessMsg("予約に成功しました。");
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
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
          <div>時間帯：{updatecapacity.substr(-4)}時</div>

          <Button
            variant="primary"
            type="submit"
            onClick={() => handleOnClickFixedReserv({ state })}
          >
            予約する
          </Button>
          <Button variant="primary" onClick={handleClick}>
            戻る
          </Button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <h1>{successMsg}</h1>
        </Card.Body>
      </Card>
    </center>
  );
};

export default ModifyReserv;
