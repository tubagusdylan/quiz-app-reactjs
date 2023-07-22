import { Link } from "react-router-dom";
import { user } from "../api/data";

export function Home() {
  return (
    <>
      <h1>Quiz App</h1>
      <h3>Login terlebih dahulu</h3>
      {user.status === "login" ? (
        <button>
          <Link to="/play">Play</Link>
        </button>
      ) : (
        <button>
          <Link to="/login">Login</Link>
        </button>
      )}
    </>
  );
}
