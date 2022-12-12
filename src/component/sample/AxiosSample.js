import React from "react";
import axios from "axios";

export const AxiosSample = () => {
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
