import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { Store } from "./Store";
import { Sample } from "./pages/Sample";

const App = () => {
  return (
    <>
      <Store/>
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route path={`/register/`} element={<Register />} />
          <Route path={`/login/`} element={<Login />} />
          <Route path={`/sample/`} element={<Sample />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;