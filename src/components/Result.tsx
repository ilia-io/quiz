import React from 'react'
import { questions } from '../App';

type TResult = {
  correctAnswerTotal: number;
};

const Result: React.FC<TResult> = ({ correctAnswerTotal }) => {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt='congratulations icon'/>
      <h2>
        Вы отгадали {correctAnswerTotal} ответа(-ов) из {questions.length}
      </h2>
      <button onClick={() => window.location.reload()}>
        Попробовать снова
      </button>
    </div>
  );
};

export default Result