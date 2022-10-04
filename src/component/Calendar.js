import React from 'react';

const Calendar = (props) => {
    if(props.searchData.length === 0) return <div></div>
    if(props.searchData === "") return <div></div>
    if(props.searchData === "Not Found") return <div> 検索結果がありません。</div>
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
                            <tr key={data.date}>
                                <td>{data.date}</td>
                                <td>{data.hasCapacity0912 === "1" ? <span onClick={() => console.log(data.date)}>◯</span> : "×"}</td>
                                <td>{data.hasCapacity1315 === "1" ? <span onClick={() => console.log(data.date)}>◯</span> : "×"}</td>
                                <td>{data.hasCapacity1517 === "1" ? <span onClick={() => console.log(data.date)}>◯</span> : "×"}</td>
                                <td>{data.hasCapacity1719 === "1" ? <span onClick={() => console.log(data.date)}>◯</span> : "×"}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </div>
    );
};

export default Calendar;