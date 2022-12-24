import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { User } from "../data/Feed";
import { useStateMachine } from "little-state-machine";
import { updateUser } from "../Store";

const RegisterUser = () => {
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { actions } = useStateMachine({ updateUser });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = async (values) => {
    // 入力された情報がすでに登録されているかどうか確認する
    // TODO①:ここの処理をAPIから取得してくるよう変更
    // ヒント：axiosを使う（React入門の資料を参考に！）
    // リクエスト方式：GET（値の取得）
    // http://localhost:3004/usersを実行することでjson上のuser情報を返却できる。
    const existUser = User.filter((data) => data.email === values.email);
    if (existUser.length !== 0) {
      console.log(existUser);
      setMsg("Eメールはすでに登録されています");
    } else {
      // ユーザーの追加登録を行う
      // TODO②:ここの処理をAPIから取得してくるよう変更
      // ヒント：axiosを使う（React入門の資料を参考に！）
      // リクエスト方式：POST（値の追加）
      // POSTでのaxios実行方法は以下を参照
      // https://www.sukerou.com/2019/05/axios.html
      // 登録するidは一意であることに注意！
      User.push(values);
      actions.updateUser({ email: values.email });
      navigate("/");
    }
  };
  return (
    <center>
      <h1>新規登録ページ</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          {...register("email", {
            required: "Required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address",
            },
          })}
        />
        {errors.email && errors.email.message}
        <br />
        <input
          {...register("password", {
            required: "Required",
          })}
        />
        {errors.password && errors.password.message}
        <br />
        <br />
        <p>{msg}</p>
        <button type="submit">登録</button>
      </form>
      <br />
      <div>
        ログインは<Link to={`/login/`}>こちら</Link>
      </div>
      <div>
        <Link to={`/`}>ホームに戻る</Link>
      </div>
    </center>
  );
};

export default RegisterUser;
