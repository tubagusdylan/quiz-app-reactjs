/* eslint-disable react/prop-types */
import "./QuizDetails.css";

export function QuizDetails({ hidden }) {
  return (
    <>
      <ul className="detail" hidden={hidden}>
        <li>
          <b>Total Question: </b>10
        </li>
        <li>
          <b>Category: </b>General Knowledge
        </li>
        <li>
          <b>Difficulty: </b>Easy
        </li>
        <li>
          <b>Type: </b>Multiple Choice
        </li>
      </ul>
    </>
  );
}
