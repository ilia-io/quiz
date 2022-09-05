import { useState } from 'react';
import BackgroundAnimation from './components/BackgroundAnimation/BackgroundAnimation';
import Game from './components/Game';
import Result from './components/Result';

export const questions = [
  {
    title: 'React - это ... ?',
    options: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    options: ['приложение', 'часть приложения или страницы', 'файл стилей'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    options: [
      'Это простой HTML',
      'Это функция',
      'Это расширение синтаксиса JavaScript',
    ],
    correct: 2,
  },
  {
    title: 'Что такое useState?',
    options: [
      'Это функция для хранения данных компонента',
      'Это глобальный стейт',
      'Это сложно',
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
        {step < questions.length ? (
          <Game
            step={step}
            setStep={setStep}
            correctAnswerTotal={correctAnswerTotal}
            setCorrectAnswerTotal={setCorrectAnswerTotal}
          />
        ) : (
          <Result correctAnswerTotal={correctAnswerTotal} />
        )}
      </div>

      <BackgroundAnimation />
    </>
  );
}

export default App;
