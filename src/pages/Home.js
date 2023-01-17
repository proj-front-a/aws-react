import { Link } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import { updateUser } from "../Store";
import axios from "axios";
import { useState } from "react";
import Calendar from "../component/Calendar";
import Button from "react-bootstrap/Button";
import { Store } from "../Store";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Navbar';
import NavItem from 'react-bootstrap/NavItem';

const Home = () => {
  const { actions, state } = useStateMachine({ updateUser });
  const [searchData, setData] = useState([]);
  const search = async (category) => {
    let searchCapacity = [];
    if (category === "select mode") {
      setData("");
    } else {
      // 家事代行情報を取得する
      const { data } = await axios.get(
        `http://localhost:3004/capacity?category=${category}`
      );
      searchCapacity = data;
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
      <Navbar bg="dark" variant="dark" className="text-light">
      <Nav className="me-auto">
        <NavItem className="display-6">家事代行サービス</NavItem>
      </Nav>
      <Nav>
        <NavItem><Store /></NavItem>
        <NavItem><Button variant="secondary" onClick={logout}>ログアウト</Button></NavItem>
      </Nav>
      </Navbar>
      <div className="w-75">
        <h1 className="m-3">ホーム</h1>
        <h2>家事代行を検索</h2>
        <select className="form-select form-select-lg mb-3"
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
        {/* 更新後のデータを画面に反映するため、setDataメソッドを子要素で実行できるようにする。 */}
        <Calendar searchData={searchData} setData={setData} />
      </div>
    </center>
  );
};

export default Home;
