import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { User } from "../data/Feed";
import { useStateMachine } from "little-state-machine";
import { updateUser } from "../Store";
import axios from "axios";

const RegisterUser = () => {
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { actions } = useStateMachine({ updateUser });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const [UserProfiles, setUserProfiles] = useState();
  const onSubmit = async (values) => {
    // 入力された情報がすでに登録されているかどうか確認する
    // TODO①:ここの処理をAPIから取得してくるよう変更
    await axios
      .get("http://localhost:3004/users")
      .then((res) => {
        const data = res.data.map((users) => ({
          id: users.id,
          email: users.email,
          password: users.password,
        }));
        setUserProfiles(data);
        console.log(UserProfiles);
      })
      .catch((err) => console.log(err));
    // http://localhost:3004/usersを実行することでjson上のuser情報を返却できる。
    const existUser = UserProfiles.filter(
      (users) => users.email === values.email
    );
    if (existUser.length !== 0) {
      console.log(existUser);
      setMsg("Eメールはすでに登録されています");
    } else {
      // ユーザーの追加登録を行う
      // TODO②:ここの処理をAPIから取得してくるよう変更
      // https://www.sukerou.com/2019/05/axios.html
      // 登録するidは一意であることに注意！
      await axios.post("http://localhost:3004/users", {
        //idは変数にしたい
        // id: users.id.length + 1,
        id: 10,

        email: values.email,
        password: values.password,
      });
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
