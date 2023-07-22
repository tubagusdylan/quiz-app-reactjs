/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { user } from "../api/data";
import "./Home.css";
import { useState } from "react";
import { QuizDetails } from "../components/QuizDetails";

export function Home() {
  const [isShow, setIsShow] = useState(false);

  function handleDetails() {
    setIsShow(!isShow);
  }

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
            <QuizDetails hidden={isShow} />
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
