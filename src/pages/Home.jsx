/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { user } from "../api/data";
import "./Home.css";
import { useState } from "react";
import { QuizDetails } from "../components/QuizDetails";
import { useEffect } from "react";

export function Home() {
  const [isHidden, setIsHidden] = useState(true);

  function handleDetails() {
    setIsHidden(!isHidden);
  }

  useEffect(() => {
    user.status = localStorage.getItem("status");
    console.log(user.status);
  }, []);

  return (
    <>
      <div className="container-home">
        <h1>Quiz App</h1>
        {user.status === "login" ? (
          <>
            <button className="button-home">
              <Link className="link" to="/play">
                Play
              </Link>
            </button>
            <br></br>
            <span onClick={handleDetails}>Show Detail Question...</span>
            <QuizDetails hidden={isHidden} />
          </>
        ) : (
          <button className="button-home">
            <Link className="link" to="/login">
              Login
            </Link>
          </button>
        )}
      </div>
    </>
  );
}
