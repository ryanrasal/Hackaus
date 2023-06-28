import { Outlet } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import Cookies from "js-cookie";
import NavbarTop from "./components/NavbarTop";
import NavbarBottom from "./components/NavbarBottom";

function App() {
  const token = Cookies.get("token");
  return (
    <div>
      {token && <NavbarTop />}
      <Outlet />
      {token && <NavbarBottom />}
      <ToastContainer />
    </div>
  );
}

export default App;
