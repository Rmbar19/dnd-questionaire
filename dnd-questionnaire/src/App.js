import logo from './logo.svg';
import './App.css';
import {React, useCallback, useState }from 'react';
import AddQuestion from './components/addquestion';
import Questionaire from './components/AnswerSurvey';


function App() {
  const [displaySurvey, setDisplaySurvey] = useState(true)

  return (
    <div className="App">
      <header className="App-header">
        <div className='Add-Question'><AddQuestion displaySurvey={displaySurvey} setDisplaySurvey={setDisplaySurvey}></AddQuestion></div>
        {/* <div className ='answer-Question'><App2></App2></div> */}
        {displaySurvey && <div className ='answer-Question'><Questionaire displaySurvey={displaySurvey} setDisplaySurvey={setDisplaySurvey}></Questionaire></div>}
        {/* <div className = 'answer-Question'><Example></Example></div> */}

      </header>
    </div>
  );
}

export default App;
