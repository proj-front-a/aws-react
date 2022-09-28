import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { User } from "../feed/Feed";
import { useStateMachine } from 'little-state-machine';
import { updateUser } from "../Store";

const Register = () => {
    const [msg, setMsg] = useState("")
    const navigate = useNavigate()
    const { actions } = useStateMachine({ updateUser })
    const { handleSubmit, register, formState: { errors } } = useForm()
  const onSubmit = (values) => {
    const existUser = User.filter(data => data.email === values.email)
    if(existUser.length !== 0) {
        setMsg("Eメールはすでに登録されています")
    } else {
        User.push(values)
        actions.updateUser({email:values.email})
        navigate("/")
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
            message: "invalid email address"
          }
        })}
      />
      {errors.email && errors.email.message}
      <br/>
      <input
        {...register("password", {
            required: "Required",
        })}
      />
      {errors.password && errors.password.message}
      <br/>
      <br/>
      <p>{msg}</p>
      <button type="submit">登録</button>
    </form>
    <br/>
      <div>
        ログインは<Link to={`/login/`}>こちら</Link>
      </div>
      <div>
        <Link to={`/`}>ホームに戻る</Link>
      </div>
    </center>
  );
};

export default Register;