import { Link } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import { updateUser } from "../Store";
import { HousingData } from "../data/Feed";
import { useState } from "react";
import Calendar from "../component/Calendar";

const Home = () => {
  const { actions, state } = useStateMachine({ updateUser });
  const [searchData, setData] = useState([]);
  const search = (category) => {
    const dataByHousing = [];
    if (category === "select mode") {
      setData("");
    } else {
      HousingData.forEach((data) => {
        if (data.category === category) dataByHousing.push(data);
      });
      if (dataByHousing.length === 0) {
        setData("Not Found");
      } else {
        setData(dataByHousing);
      }
    }
  };
  const logout = () => {
    actions.updateUser({ email: "" });
  };
  if (state.yourDetail.email === undefined || state.yourDetail.email === "") {
    return (
      <center>
        <h1>ホーム</h1>
        <div>
          ログインは<Link to={`/login/`}>こちら</Link>
        </div>
        <div>
          新規登録は<Link to={`/register-user/`}>こちら</Link>
        </div>
        <div>
          サンプルは<Link to={`/sample/`}>こちら</Link>
        </div>
      </center>
    );
  }
  return (
    <center>
      <h1>ホーム</h1>
      <button onClick={logout}>ログアウト</button>
      <div>
        <h2>家事代行を検索</h2>
        <select
          onChange={(e) => {
            search(e.currentTarget.value);
          }}
        >
          <option value="select mode" defaultChecked>
            -- カテゴリーを検索してください --
          </option>
          <option value="掃除">掃除</option>
          <option value="料理">料理</option>
          <option value="洗濯">洗濯</option>
        </select>
        <Calendar searchData={searchData} />
      </div>
    </center>
  );
};

export default Home;
