import "./App.css";
import NavbarTop from "./components/NavbarTop";
import NavbarBottom from "./components/NavbarBottom";

function App() {
  return (
    <div className="App">
      <NavbarTop />
      <NavbarBottom />
      <p className="text-red-500">coucou</p>
    </div>
  );
}

export default App;
