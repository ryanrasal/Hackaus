import { Outlet } from "react-router-dom";
import "./App.css";
import NavbarTop from "./components/NavbarTop";
import NavbarBottom from "./components/NavbarBottom";

function App() {
  const token = false;
  return (
    <div>
      {token && <NavbarTop />}
      <Outlet />
      {token && <NavbarBottom />}
    </div>
  );
}

export default App;
