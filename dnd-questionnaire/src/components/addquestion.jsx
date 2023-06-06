import {React, useState, useEffect} from "react";

const AddQuestion = () => {
    const [question, setQuestion] = useState('')
    const [passPhrase, setPassPhrase] = useState('')
//When clicked, input should pop up
//Dialogue should ask for passphrase
//If passphrase matches, ask for new question to go into the bank
//This input goes into the database
   return (

    //Break this up into separate functions
    <>
    <h1 className='new-Question' onClick={e => {
        //Verify user with passphrase
        let answer = prompt("Enter the passphrase.")
        if (answer === "1") {
            //User enters question. Question should fetch from database.
            let newQuestion = prompt("Enter question you want to ask the players.")
            let options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify({newQuestion})
            }
            // fetch()rs
            fetch('http://localhost:4000/add', options)
                // .then(res => res.json())
                .then(data => console.log(data, 'THIS IS DATA'))
            //Correct
        } else {
            alert('Incorrect passphrase!')
            fetch('http://localhost:4000/retrieve')
            .then(data => data.json())
            .then (data => {
                console.log(data)
                console.log(data[0].question)
            })

        }

    }}>Enter New Question</h1>
    </>
   )
}


export default AddQuestion;