import {React, useState, useEffect} from "react";

const AddQuestion = () => {
    const [question, setQuestion] = useState('')
    const [passPhrase, setPassPhrase] = useState('')
//When clicked, input should pop up
//Dialogue should ask for passphrase
//If passphrase matches, ask for new question to go into the bank
//This input goes into the database
   return (
    <>
    <h1 className='new-Question' onClick={e => {
        //Verify user with passphrase
        let answer = prompt("Enter the passphrase.")
        if (answer === "1") {
            //User enters question. Question should fetch from database.
            let newQuestion = prompt("Enter question you want to ask the players.")
           
            let options = JSON.stringify({
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body:newQuestion
            })
            console.log(options, "this is body!")

            fetch('http://localhost:4000/add', options)
                .then(res => res.json())
                .then(data => console.log(data, 'THIS IS DATA'))
            //Correct
        } else {
            alert('Incorrect passphrase!')
            fetch('http://localhost:4000/retrieve')
            .then(data => data.json())
            .then(data => console.log(data, 'this is DATA')) 
            .catch(error => console.log(error))

        }

    }}>Enter New Question</h1>
    </>
   )
}


export default AddQuestion;