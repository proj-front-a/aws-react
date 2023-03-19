import React, { useState } from "react";
import { putApi } from "../../../common/api";
import { getNewCapacity } from "./function";
import Button from "react-bootstrap/Button";

export const AddReservation = (props) => {
  // 画面表示
  const [showModal, setModal] = useState(false);
  const closeModal = () => {
    setModal(false);
  };
  const register = async () => {
    // 更新する情報を取得する
    const newCapacity = getNewCapacity(props.target, props.time);
    // 更新処理を実行
    await putApi(`http://localhost:3004/capacity/${newCapacity.id}`,newCapacity);
    alert("登録しました！");
    // 更新後のデータを画面に反映する
    // 更新後の値を反映したsearchDataをset関数で設定してあげる(API実行回数節約が可能！)
    const newData = props.searchData.map((existData) => {
      if(existData.id === newCapacity.id) return newCapacity;
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
            <Button variant="primary" onClick={register} className="mb-3">
              予約
            </Button>
            <br />
            <Button variant="secondary" onClick={closeModal}>
              閉じる
            </Button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
