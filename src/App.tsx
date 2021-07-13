import React from 'react';
import './App.css';
import QuestionView from './Question'
import { GetRandomQuestion } from './Data'

const App = () => {
  const question = GetRandomQuestion()
  return (
    <div className="App">
      <QuestionView question={question} />
    </div>
  );
}

export default App;
