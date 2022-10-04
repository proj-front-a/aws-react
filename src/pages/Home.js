import { Link } from "react-router-dom";
import { useStateMachine } from 'little-state-machine';
import { updateUser } from "../Store";
import { useState } from "react";
import Calendar from "../component/Calendar";
import { UseQueryCapacity } from "../hooks/useQueryCapacity";

const Home = () => {
  const { actions, state } = useStateMachine({ updateUser });
  const [searchData, setData] = useState([]);

  //検索処理
  const search = async (category) => {
    if(category === "select mode") {
      setData("")
    } else {
      // 余力情報を取得
      const getData = await UseQueryCapacity(category);
      if(getData.length === 0){
        setData("Not Found")
      } else {
        setData(getData)
      }
    }
  }
  const logout = () => {
    actions.updateUser({ email: '' })
  }
  if (state.yourDetail.email === undefined || state.yourDetail.email === "") {
    return (
      <center>
        <h1>ホーム</h1>
        <div>
          ログインは<Link to={`/login/`}>こちら</Link>
        </div>
        <div>
          新規登録は<Link to={`/register/`}>こちら</Link>
        </div>
      </center>
    )
  }
  return (
    <center>
      <h1>ホーム</h1>
      <button onClick={logout}>
        ログアウト
      </button>
      <div>
        <h2>家事代行を検索</h2>
        <select onChange={(e) => {
            search(e.currentTarget.value);
          }}>
            <option value="select mode" defaultChecked>
              -- カテゴリーを検索してください --
            </option>
            <option value="掃除">
              掃除
            </option>
            <option value="料理">
            料理
            </option>
            <option value="洗濯">
              洗濯
            </option>
          </select>
        <Calendar searchData={searchData} />
      </div>
    </center>
  );
};

export default Home;