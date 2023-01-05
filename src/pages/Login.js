import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import { updateUser } from "../Store";
import { useForm } from "react-hook-form";
// import { User } from "../data/Feed";
import axios from "axios";

const Login = () => {
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
    // TODO①:ここの処理をAPIから取得してくるよう変更
    // ヒント：axiosを使う（React入門の資料を参考に！）
    // リクエスト方式：GET（値の取得）
    // 今回、json-serverというライブラリを利用することで、APIのモックを作成している。
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
    // https://zenn.dev/yumemi_inc/articles/2f298f3ea7a93c
    // http://localhost:3004/usersを実行することでjson上のuser情報を返却できる。
    const existUser = UserProfiles.find(
      (users) => users.email === values.email
    );
    if (existUser && existUser.password === values.password) {
      actions.updateUser({ email: values.email });
      navigate("/");
    } else {
      setMsg("Eメール・パスワードの組み合わせが違います");
    }
  };

  return (
    <center>
      <h1>ログインページ</h1>
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
        <button type="submit">ログイン</button>
      </form>
      <br />
      <div>
        新規登録は<Link to={`/register-user/`}>こちら</Link>
      </div>
      <div>
        <Link to={`/`}>ホームに戻る</Link>
      </div>
    </center>
  );
};

export default Login;
