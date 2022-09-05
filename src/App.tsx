import { useState } from "react";
import BackgroundAnimation from "./components/BackgroundAnimation/BackgroundAnimation";
import Game from "./components/Game";

export const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: [
      'приложение',
      'часть приложения или страницы',
      'то, что я не знаю что такое',
    ],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это расширение синтаксиса JavaScript',
    ],
    correct: 2,
  },
  {
    title: 'Что такое useState?',
    variants: [
      'Это функция для хранения данных компонента',
      'Это глобальный стейт',
      'Это когда ты знаешь ответ',
    ],
    correct: 0,
  },
];

function App() {
  const [step, setStep] = useState(0);
  const [correctAnswerTotal, setCorrectAnswerTotal] = useState(0);

  return (
    <>
      <div className="App">
        <Game
          step={step}
          setStep={setStep}
          correctAnswerTotal={correctAnswerTotal}
          setCorrectAnswerTotal={setCorrectAnswerTotal}
        />
      </div>

      <BackgroundAnimation />
    </>
  );
}

export default App;
