import axios from "axios";
import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

const ModifyReserv = () => {
  const { state } = useLocation();
  console.log(state);

  const [fixCapacity, setFixCapacity] = useState(
    state.reserv[0].currentCapacity
  );
  console.log(fixCapacity, state.reserv[0].currentCapacity);

  const [successMsg, setSuccessMsg] = useState("");

  const id = state.reserv[0].currentCapacity.id;
  const category = state.reserv[0].currentCapacity.category;
  const date = state.reserv[0].currentCapacity.date;
  const updatecapacity = state.reserv[1];
  console.log(updatecapacity);

  // オブジェクトのうち、fixedReservClickで渡された時間帯（例：capacity1719）と同じ時間帯の値を「1⇒0に変更する」
  const getNewCapacity = () => {
    console.log(updatecapacity);
    switch (updatecapacity) {
      case "capacity0912":
        setFixCapacity({
          ...fixCapacity,
          capacity012: 0,
        });
        return;
      case "capacity1315":
        setFixCapacity({
          ...fixCapacity,
          capacity1315: 0,
        });
        return;
      case "capacity1719":
        setFixCapacity({
          ...fixCapacity,
          capacity1719: 0,
        });
        console.log(`capacity1719 = ${fixCapacity.capacity1719}`);
        return;

      default:
    }
  };

  const handleOnClickFixedReserv = () => {
    //予約対象のcapacityxxxxを1⇒0にする
    getNewCapacity();
    console.log(fixCapacity);

    //getNewCapacityの結果をAPIで更新する
    axios
      .put(
        "https://jjpobcbvt2.execute-api.ap-northeast-1.amazonaws.com/capacity-stage/capacity?id=" +
          id,
        fixCapacity
      )
      .then((res) => {
        //予約が成功した時の処理を書く。
        console.log(res);
        if (res.data !== undefined) {
          setSuccessMsg("予約に成功しました。");
        }
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
