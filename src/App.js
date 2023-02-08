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
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";

const App = ({ signOut }) => {
  return (
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
  );
};

export default withAuthenticator(App);
