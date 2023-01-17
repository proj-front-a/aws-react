import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import { updateUser } from "../Store";
import { useForm } from "react-hook-form";
// import { User } from "../data/Feed";
import axios from "axios";
import { Button, Card, Form } from "react-bootstrap";

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
    try {
      const res = await axios.get("http://localhost:3004/users");
      const data = await res.data.map((users) => ({
        id: users.id,
        email: users.email,
        password: users.password,
      }));
      setUserProfiles(data);
      console.log(UserProfiles);
    } catch (err) {
      console.log(err);
    }

    const existUser = UserProfiles.find(
      // ToDo:「ログイン」を一回押しただけだと反映されない。2回目に反映される（処理の順番に問題あり？）
      //　解決策の参考https://qiita.com/zoukun97/items/0fb14524c33894cc38dd
      //             https://qiita.com/soarflat/items/1a9613e023200bbebcb3
      //             https://qiita.com/shisama/items/61cdcc09dc69fd8d3127
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
      <Card border="primary" style={{ width: "25rem" }}>
        <Card.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                {...register("email", {
                  required: "メールアドレスを入力してください",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "invalid email address",
                  },
                })}
                type="email"
                placeholder="メールアドレスを入力"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            {errors.email && errors.email.message}
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                {...register("password", {
                  required: "パスワードを入力してください",
                })}
                type="password"
                placeholder="パスワード"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            {errors.password && errors.password.message}
            <p>{msg}</p>
            <Button variant="primary" type="submit">
              ログイン
            </Button>
          </Form>
        </Card.Body>
      </Card>

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
