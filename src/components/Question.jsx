/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

export function Question(props) {
  const { question, option, currQuestion, onSelect } = props;

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
          <h1>Coba</h1>
        )}
      </div>
    </>
  );
}
