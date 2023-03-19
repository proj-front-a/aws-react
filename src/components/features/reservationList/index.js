import React from 'react';
import Table from 'react-bootstrap/Table';
import { AddReservation } from "../addReservation";

export const ReservationList = (props) => {
    if (props.searchData.length === 0) return <div></div>;
    if (props.searchData === "") return <div></div>;
    if (props.searchData === "Not Found")
      return <div> 検索結果がありません。</div>;
  return (
    <div>
      <Table striped bordered hover>
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
                    <AddReservation
                      date={data.date}
                      target={data}
                      text="◯"
                      time="9:00-12:00"
                      //  更新後のデータを画面に反映するため、searchDataを子要素で取得できるようにする。
                      searchData={props.searchData}
                      //  更新後のデータを画面に反映するため、setDataメソッドを子要素で実行できるようにする。
                      setData={props.setData}
                    />
                  )}
                </td>
                <td>
                  {data.capacity1315 === 0 ? (
                    "×"
                  ) : (
                    <AddReservation
                      date={data.date}
                      target={data}
                      text="◯"
                      time="13:00-15:00"
                      searchData={props.searchData}
                      setData={props.setData}
                    />
                  )}
                </td>
                <td>
                  {data.capacity1517 === 0 ? (
                    "×"
                  ) : (
                    <AddReservation
                      date={data.date}
                      target={data}
                      text="◯"
                      time="15:00-17:00"
                      searchData={props.searchData}
                      setData={props.setData}
                    />
                  )}
                </td>
                <td>
                  {data.capacity1719 === 0 ? (
                    "×"
                  ) : (
                    <AddReservation
                      date={data.date}
                      target={data}
                      text="◯"
                      time="17:00-19:00"
                      searchData={props.searchData}
                      setData={props.setData}
                    />
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  )
};