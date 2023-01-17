import React, { useState } from "react";
import axios from "axios";

const getNewCapacity = (target, time) => {
  switch (time) {
    case "9:00-12:00":
      return {
        ...target,
        // 例）9:00-12:00の場合、capacity0912の値を-1する。
        capacity0912: target.capacity0912 - 1,
      };
    case "13:00-15:00":
      return {
        ...target,
        capacity1315: target.capacity1315 - 1,
      };
    case "15:00-17:00":
      return {
        ...target,
        capacity1517: target.capacity1517 - 1,
      };
    case "17:00-19:00":
      return {
        ...target,
        capacity1719: target.capacity1719 - 1,
      };
    default:
  }
};

export const Register = (props) => {
  // 画面表示
  const [showModal, setModal] = useState(false);
  const closeModal = () => {
    setModal(false);
  };
  const register = async () => {
    // 更新する情報を取得する
    const newCapacity = getNewCapacity(props.target, props.time);
    // 更新処理を実行
    const {data} = await axios.put(
      `http://localhost:3004/capacity/${newCapacity.id}`,
      newCapacity
    );
    alert("登録しました！");
    // 更新後のデータを画面に反映する
    // 更新後の値を反映したsearchDataをset関数で設定してあげる(API実行回数節約が可能！)
        const newData = props.searchData.map((existData) => {
      if(existData.id === data.id) return data;
      return existData;
    })
    props.setData(newData);
    closeModal();
  };
  return (
    <>
      <div onClick={() => setModal(true)}>{props.text}</div>
      {showModal ? (
        <div id="modal">
          <div className="modalContent">
            <h2 className="mb-3">家事代行を予約</h2>
            <p>カテゴリー：{props.target.category}</p>
            <p>
              日時：{props.target.date} {props.time}
            </p>
            <button onClick={register} className="btn btn-primary mb-3">
              予約
            </button>
            <br />
            <button onClick={closeModal} className="btn btn-secondary">
              閉じる
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
