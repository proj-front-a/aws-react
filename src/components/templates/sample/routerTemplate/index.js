import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const RouterTemplate = () => {
  const navigate = useNavigate();
  const goToLogin = () => {
    console.log("ログインページへ遷移");
    navigate("/login");
  };
  return (
    <div>
      <p>関数内でページ遷移を設定できる。</p>
      <button
        onClick={() => {
          goToLogin();
        }}
      >
        ログイン画面へ
      </button>
      <p>
        <Link to={`/login/`}>Link</Link>
        で指定する方法もあり（ただしこの場合は遷移のみで、ロジックを持たすことができない）
      </p>
      <p>※App.jsでどのページでどのファイルを表示させるか、設定する必要あり</p>
    </div>
  );
};
