import axios from "axios";
import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

const ModifyReserv = () => {
  const { state } = useLocation();
  console.log(state);
  const id = state.reserv.id;
  const category = state.reserv.category;
  const date = state.reserv.date;
  const capacity = state.reserv.capacity;
  // const availability = state.reserv.availability;
  console.log(id, category, date, capacity);

  const [fixCapacity, setFixCapacity] = useState(state.reserv.availability);

  const fixedReservClick = async (props) => {
    setFixCapacity(0);
    const availability = fixCapacity;
    console.log(availability);

    await axios
      .put("http://localhost:3004/capacity/{id},fixReserv")
      .then((res) => {})
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
          <div>カテゴリ：{category}</div>
          <div>日にち：{date} </div>
          <div>時間帯：{capacity.substr(-4)}時</div>
          <Button
            variant="primary"
            type="submit"
            onClick={() => fixedReservClick({ id, category, date, capacity })}
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
