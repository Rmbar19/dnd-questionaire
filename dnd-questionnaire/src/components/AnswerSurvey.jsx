import '/home/ryan/Projects/dnd-questionaire/dnd-questionnaire/src/survey-library/build/survey-react/defaultV2.min.css';
import {useState, react, useCallback} from 'react';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
// ...
const SURVEY_ID = 1;
const surveyJson = {
    elements: [{
      name: "HowDoYouPreferThis",
      title: "How do you prefer...?:",
      type: "text"
    }]
  };  


const Questionaire = () => {

    const survey = new Model(surveyJson);
    const alertResults = useCallback((sender) => {
        const results = JSON.stringify(sender.data);
        alert(results)
    }, [])
    const surveyComplete = useCallback((sender) => {
        saveSurveyResults(
           "http://localhost:4000/add",
            sender.data
        )
    }, []);



    survey.onComplete.add(surveyComplete);


    return (
        <Survey model={survey}/>
    )
}

function saveSurveyResults(url, json) {
  const request = new XMLHttpRequest();
  request.open('POST', url);
  request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  request.addEventListener('load', () => {
    // Handle "load"
  });
  request.addEventListener('error', () => {
    // Handle "error"
  });
  console.log(json)
  request.send(JSON.stringify(json));
}
  export default Questionaire