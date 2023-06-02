const express = require('express');
const app = express();
const { Client } = require('pg');
const PORT = process.env.PORT || 4000;
const cors = require('cors');

const connectionString = 'postgresql://postgres:docker@127.0.0.1:5432/questionaire';
const client = new Client({
    connectionString: connectionString,
});

client.connect();
app.use(express.json());
app.use(cors());

app.get('/retrieve', (req, res) => {

    client.query('SELECT * FROM questions')
    .then(result => res.send(result.rows))

    // console.log(res, 'response');
});

app.get('/add', (req, res) => {
    res.send('hi')
})
app.post('/add', (req, res) => {
    try {
        // console.log(req, 'the request')
        client.query(`INSERT INTO questions (question) VALUES('${req.body.newQuestion}');`)
        // .then(res.send(`Added ${req.body.newQuestion} to database!`))
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

app.listen(PORT, () => {
    console.log('listening on port', PORT);
});