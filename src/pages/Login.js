import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import { updateUser } from "../Store";
import { useForm } from "react-hook-form";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Login = () => {
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { actions } = useStateMachine({ updateUser });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = async (values) => {
    // 入力された情報がすでに登録されているか確認するc
    const { data } = await axios.get(
      `http://localhost:3004/users?email=${values.email}`
    );
    const existUser = data[0];
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
      <Form onSubmit={handleSubmit(onSubmit)} className="w-50">
      <Form.Group className="mb-3">
      <Form.Control
          type="email"
          {...register("email", {
            required: "Required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address",
            },
          })}
        />
         <span className="text-danger">{errors.email && errors.email.message}</span>
      </Form.Group>
        <Form.Group className="mb-3">
        <Form.Control
          {...register("password", {
            required: "Required",
          })}
        />
        <span className="text-danger">{errors.password && errors.password.message}</span>
        </Form.Group>
        <p className="text-danger">{msg}</p>
        <Button variant="primary" type="submit">ログイン</Button>
      </Form>
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
