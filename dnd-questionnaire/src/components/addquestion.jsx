import {React, useState, useEffect} from "react";



const AddQuestion = ({displaySurvey, setDisplaySurvey}) => {

    const [passPhrase, setPassPhrase] = useState(false)
    const [questionsAndAnswers, setQuestionsAndAnswers] = useState(<></>)

    const appender = () => {
    
        fetch('http://localhost:5000/retrieve')
        .then(data => data.json())
        .then (data => {
            console.log(data)
            let keys = Object.keys(data)
            // let values = Object.values(data)
    
                setQuestionsAndAnswers( keys.map(element => <><h1>{data[element]}</h1><p>{element}</p></>))
               
                
    
        }) 
    }

   return (

    //Break this up into separate functions
    <>
    <h1 className='new-Question' onClick={e => {
        //Verify user with passphrase
        let answer = prompt("Enter the passphrase.")
        if (answer === "1") {
            setPassPhrase(true)
            setDisplaySurvey(false)
            appender()
             
        } 

    }}>{!passPhrase && (<h1>See Results</h1>)}
    {passPhrase && (questionsAndAnswers)}
    </h1>
        
    </>
   )
}


export default AddQuestion;