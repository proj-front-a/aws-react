import { Link } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import { updateUser } from "../Store";
import { HousingCapacity } from "../data/Feed";
import { useState } from "react";
import Calendar from "../component/Calendar";

const Home = () => {
  const { actions, state } = useStateMachine({ updateUser });
  const [searchData, setData] = useState([]);
  const search = async (category) => {
    let searchCapacity = [];
    if (category === "select mode") {
      setData("");
    } else {
      // 家事代行情報を取得する
      // TODO③:ここの処理をAPIから取得してくるよう変更
      // ヒント：axiosを使う（React入門の資料を参考に！）
      // リクエスト方式：GET（値の取得）
      // http://localhost:3004/categoryを実行することでjson上のuser情報を返却できる。
      HousingCapacity.forEach((data) => {
        if (data.category === category) searchCapacity.push(data);
      });
      if (searchCapacity.length === 0) {
        setData("Not Found");
      } else {
        setData(searchCapacity);
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
        <div>
          bootstrap使用例は<Link to={`/bootstrap/`}>こちら</Link>
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
