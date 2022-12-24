import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
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
  const onSubmit = async (values) => {
    // 入力された情報がすでに登録されているかどうか確認する
    const { data } = await axios.get("http://localhost:3004/users");
    const existUser = data.filter((data) => data.email === values.email);
    if (existUser.length !== 0) {
      setMsg("Eメールはすでに登録されています");
    } else {
      // ユーザーの追加登録を行う
      // 登録するidは一意であることに注意！
      await axios.post("http://localhost:3004/users", {
        id: data.length + 1,
        email: values.email,
        password: values.password,
      });
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
