import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Sample } from "./pages/Sample";
import RegisterUser from "./pages/RegisterUser";
import { Bootstrap } from "./pages/Bootstrap";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route path={`/register-user/`} element={<RegisterUser />} />
          <Route path={`/login/`} element={<Login />} />
          <Route path={`/sample/`} element={<Sample />} />
          <Route path={`/bootstrap/`} element={<Bootstrap />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
