import logo from './logo.svg';
import './App.css';
import React from 'react';
import AddQuestion from './components/addquestion';
import Form from './components/form';
import AnswerQuestion from './components/answerquestions';
import Example from './components/test';
import Questionaire from './components/AnswerSurvey';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='Add-Question'><AddQuestion></AddQuestion></div>
        {/* <div className ='answer-Question'><Form></Form></div> */}
        <div className ='answer-Question'><Questionaire></Questionaire></div>
        {/* <div className = 'answer-Question'><Example></Example></div> */}

      </header>
    </div>
  );
}

export default App;
