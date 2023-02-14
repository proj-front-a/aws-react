import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Store } from "./Store";
import { Sample } from "./pages/Sample";
// import RegisterUser from "./pages/RegisterUser";
import { Bootstrap } from "./pages/Bootstrap";
import ModifyReserv from "./pages/ModifyReserv";
import "@aws-amplify/ui-react/styles.css";
import {
  Authenticator,  
  AmplifySignIn,
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
  translations 
} from "@aws-amplify/ui-react";
import { I18n } from 'aws-amplify';
I18n.putVocabularies(translations);
I18n.setLanguage('ja');
// 以下のような形で日本語と英語を紐づけた辞書を作成する
const dict = {
  ja: {
    "Forgot your password?": "パスワードを忘れた場合",
    "Reset password": "パスワードをリセット",
    "No account?": "アカウントを持っていない場合",
    "Create account": "サインアップ",
  },
};
// 作成した辞書を渡して反映させる
I18n.putVocabularies(dict);

const App = () => {
    return (
    <Authenticator>
      {({signOut, user})=>(
        <>
        <Store />
          <BrowserRouter>
            <Routes>
              <Route path={`/`} element={<Home />} />
              {/* <Route path={`/register-user/`} element={<RegisterUser />} />
              <Route path={`/login/`} element={<Login />} /> */}
              <Route path={`/sample/`} element={<Sample />} />
              <Route path={`/bootstrap/`} element={<Bootstrap />} />
              <Route path={`/reserv/`} element={<ModifyReserv />} />
            </Routes>
          </BrowserRouter>
          <Button onClick={signOut}>Sign Out</Button>
          </>
        )}
      </ Authenticator>

  );
};

export default App;
