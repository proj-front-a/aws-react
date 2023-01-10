import React from "react";
import { Button, Card } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const ModifyReserv = () => {
  const { state } = useLocation();
  console.log(state);
  const category = state.reserv.category;
  const date = state.reserv.date;
  const capacity = state.reserv.capacity.substr(-4);

  console.log(category, date, capacity);

  return (
    <center>
      <Card border="primary" style={{ width: "25rem" }}>
        <Card.Body>
          <div>下記の日程で予約しますか？</div>
          <div>カテゴリ：{category}</div>
          <div>日にち：{date} </div>
          <div>時間帯：{capacity}時</div>
          <Button variant="primary" type="submit">
            予約する
          </Button>
        </Card.Body>
      </Card>
    </center>
  );
};

export default ModifyReserv;
