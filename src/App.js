import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { Store } from "./Store";

const App = () => {
  return (
    <>
      <Store/>
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route path={`/register/`} element={<Register />} />
          <Route path={`/login/`} element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;