import { useForm } from "react-hook-form";

const FormTemplate = () => {
    //フォームを定義
    const { handleSubmit, register, formState: { errors } } = useForm();
    //送信時実行する関数を定義
    const onSubmit = (values) => {
    console.log(values.email);
    console.log(values.password);
};

  return (
    <div>
      <p>バリデーションなど、簡単にフォームが実装できる</p>
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
      <button type="submit">送信</button>
    </form>
    <br/>
    </div>
  );
};

export default FormTemplate;