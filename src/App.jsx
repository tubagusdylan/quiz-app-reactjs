import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import "./App.css";
import { Play } from "./pages/Play";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/play" element={<Play />} />
      </Routes>
    </>
  );
}

export default App;
