import React from 'react';
import { useStateMachine } from "little-state-machine";
import { updateUser,Store } from "../../../Store";
import { getApi } from "../../../common/api";
import { ReservationList } from "../../features/reservationList";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Navbar';
import NavItem from 'react-bootstrap/NavItem';
import { SignIn } from '../../features/signIn';

export const HomeTemplate = () => {
    const { actions, state } = useStateMachine({ updateUser });
    const [searchData, setData] = useState([]);
    const search = async (category) => {
      let searchCapacity = [];
      if (category === "select mode") {
        setData("");
      } else {
        // 家事代行情報を取得する
        const capacityList = await getApi("http://localhost:3004/capacity");
        // 取得してきた家事代行情報のうち、指定されたカテゴリのもののみを抽出する
        searchCapacity = capacityList.filter((data) => data.category === category);
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
        <SignIn/>
      );
    }
    return (
      <>
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
          <ReservationList searchData={searchData} setData={setData} />
        </div>
      </>
    );
};