/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { submitForm } from "../utils/submitForm";
import "./Login.css";

export function Login() {
  const ref = useRef(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("typing");
  const [err, setErr] = useState(null);

  useEffect(() => {
    ref.current.focus();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");

    try {
      await submitForm(username, password);
      setUsername("");
      setPassword("");
      setStatus("success");
      setErr(null);
    } catch (error) {
      setUsername("");
      setPassword("");
      setStatus("typing");
      setErr(error);
    }
  }

  if (status === "success") {
    return (
      <div className="container">
        <h1 className="success">Login berhasil!</h1>
        <Link to="/">Back</Link>
      </div>
    );
  }

  return (
    <>
      <div className="container">
        <div className="title">
          <h1>Login</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="body">
            <input type="text" placeholder="Username" ref={ref} onChange={(e) => setUsername(e.target.value)} value={username} />
            <br />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
          </div>
          {err !== null && <p hidden={status === "submitting"}>{err.message}</p>}
          <span onClick={() => alert("username: root, password: root")}>Hint</span>
          <button className="button-login">Login</button>
        </form>
      </div>
    </>
  );
}
