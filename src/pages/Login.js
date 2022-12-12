import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import { updateUser } from "../Store";
import { useForm } from "react-hook-form";
import { User } from "../data/Feed";

const Login = () => {
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { actions } = useStateMachine({ updateUser });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (values) => {
    let existUser = [];
    for (let item of User) {
      if (values.email === item.email && values.password === item.password)
        existUser = item;
    }
    if (existUser.length !== 0) {
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
        新規登録は<Link to={`/register/`}>こちら</Link>
      </div>
      <div>
        <Link to={`/`}>ホームに戻る</Link>
      </div>
    </center>
  );
};

export default Login;
