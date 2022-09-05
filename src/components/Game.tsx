import React from 'react'
import { questions } from '../App';

type TGame = {
  step: number;
  setStep: (i: number) => void;
  correctAnswerTotal: number;
  setCorrectAnswerTotal: (i: number) => void;
};

const Game: React.FC<TGame> = ({
  step,
  setStep,
  correctAnswerTotal,
  setCorrectAnswerTotal,
}) => {
  const progressWidth = Math.round((step / questions.length) * 100);
  const question = questions[step];

  const handleClick = (index: number) => {
    if (question.correct === index) {
      setCorrectAnswerTotal(correctAnswerTotal + 1);
    }
    setStep(step + 1);
  };
  return (
    <>
      <div className="progress">
        <div
          style={{ width: `${progressWidth}%` }}
          className="progress__inner"
        ></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.options.map((item, index) => (
          <li onClick={() => handleClick(index)} key={index}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Game