import React from 'react'
import { Link } from "react-router-dom";

export const SignIn = () => {
  return (
    <>
          <h1>ホーム</h1>
          <div>
            ログインは<Link to={`/login/`}>こちら</Link>
          </div>
          <div>
            新規登録は<Link to={`/register-user/`}>こちら</Link>
          </div>
          <div>
            サンプルは<Link to={`/sample/`}>こちら</Link>
          </div>
          <div>
            bootstrap使用例は<Link to={`/bootstrap/`}>こちら</Link>
          </div>
        </>
  )
};