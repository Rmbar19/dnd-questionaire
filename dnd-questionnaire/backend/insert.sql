DROP TABLE IF EXISTS questions;
DROP TABLE IF EXISTS answers;

CREATE TABLE questions (
    id SERIAL PRIMARY KEY,
    question varchar(500)
);

CREATE TABLE answers (
    id SERIAL PRIMARY KEY,
    answer varchar(3000)
);

INSERT INTO questions (question) VALUES('test question?');
INSERT INTO answers (answer) VALUES ('THIS IS THE ANSWERRRR');