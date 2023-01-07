import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { User } from "../data/Feed";
import { useStateMachine } from "little-state-machine";
import { updateUser } from "../Store";
import axios from "axios";
import { Form, Button, Card } from "react-bootstrap";

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
        //idは連番で付与する
        id: UserProfiles.length + 1,

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
              登録
            </Button>
          </Form>
        </Card.Body>
      </Card>

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
