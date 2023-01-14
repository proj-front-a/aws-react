import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Calendar = (props) => {
  const [reserv, setReserv] = useState({
    // category: "",
    // date: "",
    // capacity: "",
  });

  //onClickボタンから渡されたpropsを変数に詰めて、予約確認画面に渡す
  const handleOnClickReserv = (props) => {
    console.log(props);
    const currentCapacity = props[0];
    const updateCapacity = props[1];

    // 現在の予約状態をstateに保存する
    setReserv(Object.assign(reserv, { currentCapacity }));
    console.log(reserv, updateCapacity);
    // オブジェクトのうち、onclickで渡された時間帯（例：capacity1719）と同じ時間帯の値を「1⇒0に変更する」
    // setReserv({ ...reserv, updateCapacity: 0 });
    setReserv((reserv) =>
      reserv.map((currentCapacity) =>
        "capacity1719" === updateCapacity
          ? { [updateCapacity]: 0 }
          : currentCapacity
      )
    );
    console.log(reserv);

    // setReserv([
    //   ...reserv,
    //   {
    //     category: category,
    //     date: date,
    //     capacity: capacity,
    //   },
    // ]);
  };

  if (props.searchData.length === 0) return <div></div>;
  if (props.searchData === "") return <div></div>;
  if (props.searchData === "Not Found")
    return <div> 検索結果がありません。</div>;
  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>日付</th>
            <th>9:00-12:00</th>
            <th>13:00-15:00</th>
            <th>15:00-17:00</th>
            <th>17:00-19:00</th>
          </tr>
        </thead>
        <tbody>
          {props.searchData.map((data) => {
            return (
              <tr key={data.id}>
                <td>{data.date}</td>
                <td>
                  {data.capacity0912 === 0 ? (
                    "×"
                  ) : (
                    <div onClick={() => console.log(data.date)}>◯</div>
                  )}
                </td>
                <td>
                  {data.capacity1315 === 0 ? (
                    "×"
                  ) : (
                    <div onClick={() => console.log(data.date)}>◯</div>
                  )}
                </td>
                <td>
                  {data.capacity1517 === 0 ? (
                    "×"
                  ) : (
                    <div onClick={() => console.log(data.date)}>◯</div>
                  )}
                </td>
                <td>
                  {data.capacity1719 === 0 ? (
                    "×"
                  ) : (
                    //handleOnClickResorvのpropsにdata.id, data.capacity1719を渡す
                    <Link to="/reserv/" state={{ reserv }}>
                      <Button
                        variant="link"
                        onClick={() => {
                          handleOnClickReserv([data, "capacity1719"]);
                          // handleOnClickReserv([
                          //   data.id,
                          //   data.category,
                          //   data.date,
                          //   "capacity1719",
                          //   data.capacity1719,
                          // ]);
                        }}
                      >
                        ◯
                      </Button>
                    </Link>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* <br />
      <br />
      <Button>日程を選択する</Button>

      <h2>家事代行を検索</h2>
      <Form.Select
        aria-label="Default select example"
        size="lg"
        // onChange={(e) => {
        //   search(e.currentTarget.value);
        // }}
      >
        <option value="select mode" defaultChecked>
          -- カテゴリーを検索してください --
        </option>
        <option value="掃除">掃除</option>
        <option value="料理">料理</option>
        <option value="洗濯">洗濯</option>
      </Form.Select> */}
    </div>
  );
};

export default Calendar;
