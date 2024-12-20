import React from "react";
import { useState } from "react";
import { data } from "./data";
import "./Style.css";

export default function QuizApp() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);

  const [option, setOption] = useState(null);

  const [quizFinished, setQuizFinished] = useState(false);

  const [quizStart, setQuizStart] = useState(false);
  const correctAns = [
    "option1", // Answer for "What is React?"
    "option2", // Answer for "Which company maintains React?"
    "option1", // Answer for "What is JSX?"
    "option3", // Answer for "What is the default method to create a component in React?"
    "option2", // Answer for "Which hook is used to handle side effects in React?"
    "option2", // Answer for "What does the `setState` function do in React?"
    "option1", // Answer for "What is a key used for in a React list?"
    "option2", // Answer for "Which of the following is true about React?"
    "option1", // Answer for "What is the purpose of Redux in React applications?"
    "option1", // Answer for "Which React hook is used for managing state in a functional component?"
  ];

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const handleSelect = (selectedOption) => {
    setOption(selectedOption);
  };

  const handleStart = (ex) => {
    setQuizStart(ex);
  };

  const handleNext = () => {
    if (option === correctAns[index]) {
      setScore(score + 1);
    }
    if (index < data.length - 1) {
      setIndex(index + 1);
      setOption(null);
    } else {
      setQuizFinished(true);
    }
  };

  if (quizFinished) {
    return (
      <div className="quiz">
        <h1>Quiz Finished...!</h1>
        <h2>
          Your Score is : {score} out of {data.length}
        </h2>
      </div>
    );
  }

  if (quizStart) {
    return (
      <div className="quiz">
        <h1>Quiz</h1>

        <h3>
          {index + 1}) {data[index].question}
        </h3>

        <ul>
          <li
            className={option === "option1" ? "selected" : ""}
            onClick={() => handleSelect("option1")}>
            {data[index].option1}
          </li>
          <li
            className={option === "option2" ? "selected" : ""}
            onClick={() => handleSelect("option2")}>
            {data[index].option2}
          </li>
          <li
            className={option === "option3" ? "selected" : ""}
            onClick={() => handleSelect("option3")}>
            {data[index].option3}
          </li>
          <li
            className={option === "option4" ? "selected" : ""}
            onClick={() => handleSelect("option4")}>
            {data[index].option4}
          </li>
        </ul>

        <div>
          {index === 0 ? "" : <button onClick={handlePrev}>Previous</button>}

          <button onClick={handleNext} disabled={!option}>
            {index === data.length - 1 ? "Submit Test" : "Next"}
          </button>
        </div>
        <h4>
          Question {index + 1} out of {data.length}
        </h4>
      </div>
    );
  }

  return (
    <div className="quiz">
      <h1>Lets Start the Quiz...!</h1>
      <h2>Total questions are : {data.length}</h2>
      <button onClick={() => handleStart(true)}>Start</button>
    </div>
  );
}
