import React from "react";
import { Button } from "react-bootstrap";

const Calendar = (props) => {
  //onClickボタンから渡されたpropsを変数に詰めて、予約確認画面に渡す
  const handleOnClickReserv = (props) => {
    console.log(props);
    return <div>{props}</div>;
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
                    <Button
                      variant="link"
                      onClick={() => {
                        handleOnClickReserv([
                          data.category,
                          data.date,
                          "capacity1719",
                        ]);
                      }}
                    >
                      ◯
                    </Button>
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
