const express = require('express');
const app = express();
const { Client } = require('pg');
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const config = require('../backend/config.js')[process.env.NODE_ENV || "dev"];

const connectionString = config.connectionString;
const client = new Client({
    connectionString: connectionString,
});

client.connect();
app.use(express.json());
app.use(cors());

app.get('/retrieve', (req, res) => {
  let answerObject = {};
  let tracker = 1;
    // client.query('SELECT * FROM questions;')
    for (let i = 1; i <= 20; i++) {
      client.query(`SELECT answer${i} AS response, question FROM answers, questions WHERE questions.id=${i};`)
      .then(result => {
        // answerObject[`${question}`] = answer
        // console.log(result.rows[0].question)
        // result.rows.map(response => answerObject[result.rows[response].question] = response.response)
        result.rows.map(response => {

          // let answers = ''
          // for (let i = 0; i < result.rows.length; i++) {
          //   answers += answers + result.rows.response[i]
          // }
          if (answerObject[response.question]) {
            answerObject[response.question] += `, ${response.response}`
          } else {
            answerObject[response.question] = response.response
          }
          
          if (i === 20 && tracker) {
            if (tracker < result.rows.length) {
              tracker++
            } else {
              res.send(answerObject)
            }
            // console.log(answerObject)
            
          }
        
        }
        )
        

      })
    
      

    }
    

    
    // client.query('SELECT answer14, answer15, question FROM answers, questions WHERE questions.id=14, questions.id=15;')
    // .then(result => res.send(result.rows))

    // console.log(res, 'response');
});

app.post('/add', (req, res) => {
        //AnswerSurvey.jsx contains SurveyJSON Element. It is sending the request here to be placed into the databse.
    try {

        console.log('the request', req.body)
        let answer = Object.values(req.body)
        console.log(answer, 'answer')
          client.query(`INSERT INTO answers (answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9, answer10, answer11, answer12, answer13, answer14, answer15, answer16, answer17, answer18, answer19, answer20) VALUES('${answer[0]}', '${answer[1]}', '${answer[2]}', '${answer[3]}', '${answer[4]}', '${answer[5]}', '${answer[6]}', '${answer[7]}', '${answer[8]}', '${answer[9]}', '${answer[10]}', '${answer[11]}', '${answer[12]}', '${answer[13]}', '${answer[14]}', '${answer[15]}', '${answer[16]}', '${answer[17]}', '${answer[18]}', '${answer[19]}');`)
        // client.query(`INSERT INTO answers (answer) VALUES('${req.body.HowDoYouPreferThis}');`)
        // client.query(`INSERT INTO questions (question) VALUES ('${question}');`)
      } catch (error) {
        console.error(error);
        // Expected output: ReferenceError: nonExistentFunction is not defined
        // (Note: the exact output may be browser-dependent)
      }
      
    
    // .then(data => {
    // console.log(data)})
    
    // .catch(error => console.log(error))
    // console.log(req.body.newQuestion, 'this is req')
    // console.log(question, 'this is question');
    // res.send((JSON.stringify(req.body)));
    
});

try {app.listen(PORT, () => {
    console.log('listening on port', PORT);
})} catch (error) {
    console.error(error);
    // Expected output: ReferenceError: nonExistentFunction is not defined
    // (Note: the exact output may be browser-dependent)
  }

  