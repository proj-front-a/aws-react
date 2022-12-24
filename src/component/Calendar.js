import React from "react";

const Calendar = (props) => {
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
                    <div onClick={() => console.log(data.date)}>◯</div>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
