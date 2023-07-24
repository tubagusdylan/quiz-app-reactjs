/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";
import "./Question.css";

export function Question(props) {
  const { question, option, currQuestion, onSelect, selectedOption, totalCorrect } = props;

  const [total, setTotal] = useState(totalCorrect);
  const [onShow, setOnShow] = useState(false);

  function handleResult() {
    selectedOption === question[currQuestion - 1].correct_answer ? setTotal(total + 1) : setTotal(total);
    setOnShow(true);
  }

  return (
    <>
      <div className="question-body">
        {currQuestion < question.length ? (
          <>
            <h3>{question[currQuestion].question}</h3>
            <div className="option-container">
              {option.map((value, index) => {
                return (
                  <div className="option-item" key={index}>
                    <button onClick={() => onSelect(value)}>{value}</button>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <div className="result">
            <button onClick={handleResult} className="btn-result" hidden={onShow}>
              Show Result
            </button>
            <div hidden={!onShow} className="result-body">
              <h2>Result</h2>
              <p>Your result</p>
              <h1>{(total + totalCorrect) * 10}</h1>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
