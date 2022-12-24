import React, { useState } from "react";

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
  const register = () => {
    // TODO②: 登録処理を実装する
    // 更新後のデータ
    const newCapacity = getNewCapacity(props.target, props.time);
    // ヒント：オブジェクト配列の更新方法はどうやるのか？
    // 以下に処理をかく（現状は更新後のデータを出力している）
    console.log(newCapacity);
    alert("登録しました！");
    // 更新後のデータを画面に反映する
    // カテゴリーを指定して、家事代行情報を取得するAPIを実行し、その値を反映する
    closeModal();
  };
  return (
    <>
      <div onClick={() => setModal(true)}>{props.text}</div>
      {showModal ? (
        <div id="modal">
          <div className="modalContent">
            <p>家事代行を予約</p>
            {/* TODO①：各項目に選択した値を表示する。（ヒント：propsを使う。親コンポーネントで渡しているあたいが何かに注目） */}
            <p>カテゴリー：</p>
            <p>日時：</p>
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
