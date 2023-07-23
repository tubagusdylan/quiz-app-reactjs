import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import "./App.css";
import { Play } from "./pages/Play";
import { Result } from "./pages/Result";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/play" element={<Play />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </>
  );
}

export default App;
