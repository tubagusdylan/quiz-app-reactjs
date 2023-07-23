/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { getQuizList } from "../api/quiz";
import "./Play.css";
import { Loading } from "../components/Loading";

function Question(props) {
  const { question, option, currQuestion, correct } = props;

  function Options() {
    return option.map((value, index) => {
      return (
        <div className="option-item" key={index}>
          <button>{value}</button>
        </div>
      );
    });
  }

  return (
    <>
      <div className="question-body">
        <h3>{question[currQuestion].question}</h3>
        <div className="option-container">
          <Options />
        </div>
      </div>
    </>
  );
}

export function Play() {
  const [questions, setQuestion] = useState([]);
  const [currQuestion, setCurrQuestion] = useState(0);
  const [option, setOption] = useState([]);

  useEffect(() => {
    getQuizList().then((result) => {
      setQuestion(result);
      setOption([result[currQuestion].correct_answer, ...result[currQuestion].incorrect_answers]);
    });
  }, [currQuestion]);

  return (
    <>
      <div className="container-play">
        <nav>
          <div className="sign">
            <p>
              {currQuestion + 1}/{questions.length}
            </p>
          </div>
          <div className="category">
            <h2>Quiz</h2>
          </div>
          <div className="time">
            <p>Time</p>
          </div>
        </nav>
        {questions.length !== 0 ? <Question question={questions} option={option} currQuestion={currQuestion} correct={questions[currQuestion]?.correct_answer} /> : <Loading />}
      </div>
    </>
  );
}
