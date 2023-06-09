const express = require('express');
const app = express();
const { Client } = require('pg');
const PORT = process.env.PORT || 4000;
const cors = require('cors');
const config = require('../../backend/config.js')[process.env.NODE_ENV || "dev"];

const connectionString = config.connectionString;
const client = new Client({
    connectionString: connectionString,
});

client.connect();
app.use(express.json());
app.use(cors());

app.get('/retrieve', (req, res) => {
    // client.query('SELECT * FROM questions;')
    client.query('SELECT * FROM answers;')
    .then(result => res.send(result.rows))

    // console.log(res, 'response');
});

app.post('/add', (req, res) => {
        //AnswerSurvey.jsx contains SurveyJSON Element. It is sending the request here to be placed into the databse.
    try {

        console.log('the request', req.body)
        let answer = Object.values(req.body)
        console.log(answer, 'answer')
        answer.forEach(answer => client.query(`INSERT INTO answers (answer) VALUES('${answer}');`))
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