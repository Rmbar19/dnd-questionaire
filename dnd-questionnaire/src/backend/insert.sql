DROP TABLE IF EXISTS questions;
DROP TABLE IF EXISTS answers;

CREATE TABLE questions (
    id SERIAL PRIMARY KEY,
    question varchar(500)
);

CREATE TABLE answers (
    id SERIAL PRIMARY KEY,
    answer1 varchar(3000),
    answer2 varchar(3000),
    answer3 varchar(3000),
    answer4 varchar(3000),
    answer5 varchar(3000),
    answer6 varchar(3000),
    answer7 varchar(3000),
    answer8 varchar(3000),
    answer9 varchar(3000),
    answer10 varchar(3000),
    answer11 varchar(3000),
    answer12 varchar(3000),
    answer13 varchar(3000),
    answer14 varchar(3000),
    answer15 varchar(3000),
    answer16 varchar(3000),
    answer17 varchar(3000),
    answer18 varchar(3000),
    answer19 varchar(3000),
    answer20 varchar(3000),
);


INSERT INTO questions (question) VALUES('Do you believe your characters morality is absolute or can it be swayed by circumstances? (Yes/No)');
INSERT INTO questions (question) VALUES('Does your character believe in doing whatever it takes to achieve their goals, even if it goes against their moral code? (Yes/No)');
INSERT INTO questions (question) VALUES('Is your character willing to compromise their personal beliefs for the benefit of the group or the mission? (Yes/No)');
INSERT INTO questions (question) VALUES('Would your character intervene if they saw an innocent person in danger, even if it could potentially expose them to danger as well? (Yes/No)');
INSERT INTO questions (question) VALUES('Does your character respect the laws and norms of society, even if they disagree with them on a personal level? (Yes/No)');

INSERT INTO questions (question) VALUES('Does your character believe in karma or the idea that their actions have consequences that will come back to them in the future? (Yes/No)');
INSERT INTO questions (question) VALUES('Is your character willing to take a life if necessary? (Yes/No)');
INSERT INTO questions (question) VALUES('Would your character steal from the rich to give to the poor? (Yes/No)');
INSERT INTO questions (question) VALUES('Is your character likely to lie to protect someones feelings or to avoid conflict? (Yes/No)');
INSERT INTO questions (question) VALUES('Does your character believe that some people are innately good or evil, or do they believe people are shaped by their experiences? (Yes/No)');

INSERT INTO questions (question) VALUES('Would your character forgive someone who betrayed them? (Yes/No)');
INSERT INTO questions (question) VALUES('Does your character believe in redemption and second chances? (Yes/No)');
INSERT INTO questions (question) VALUES('Would your character put their own life at risk to save a stranger? (Yes/No)');
INSERT INTO questions (question) VALUES('Does your character believe that everyone deserves to be treated with respect and kindness, regardless of their actions? (Yes/No))');
INSERT INTO questions (question) VALUES('Is your character willing to sacrifice their own happiness for the happiness of others? (Yes/No)');

INSERT INTO questions (question) VALUES('True/False: Your character believes that ends justify the means.');
INSERT INTO questions (question) VALUES('True/False: Your character believes that everyone, regardless of their actions, is capable of redemption.');
INSERT INTO questions (question) VALUES('True/False: Your character would break the law if they believed it was the right thing to do.');
INSERT INTO questions (question) VALUES('True/False: Your character believes in a strict code of conduct and will not deviate from it, even under duress.');
INSERT INTO questions (question) VALUES('True/False: Your character believes that one should always prioritize the needs of the many over the needs of the few or the one.');

INSERT INTO answers (answer) VALUES ('THIS IS THE ANSWERRRR');