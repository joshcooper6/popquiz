const express = require('express');
const bodyParser = require('body-parser');
const PORT = 5000;
const app = express();
const db = require('./db.js');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

const database = db.db;
let artist = 'Lady Gaga';
const images = database[artist].images;
const questions = database[artist].questions;

const randomImage = (array) => {
  let randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

function getObjectPropertyNames(db) {
  return Object.keys(db);
};

app.get('/getArtists', (req, res) => {
  res.send(getObjectPropertyNames(database));
});

app.get('/questions', (req, res) => {
    const questionsWithoutAnswers = questions.map(question => {
      return {
        id: question.id,
        text: question.question,
        choices: question.answers,
        image: randomImage(images)
      };
    });
    res.json(questionsWithoutAnswers);
  });

  app.post('/changeQuestions', (req, res) => {
    console.log(req.body);
    const artist = req.body.artist;
    const questionsWithoutAnswers = database[artist].questions.map(question => {
      return {
        id: question.id,
        text: question.question,
        choices: question.answers,
        image: randomImage(database[artist].images)
      };
    });
    res.json(questionsWithoutAnswers);
  });

app.post('/answers', (req, res) => {
  const { questionId, answer } = req.body;
  const question = questions.find(q => q.id === questionId);
  if (!question) {
    return res.status(404).json({ error: 'Question not found' });
  }
  if (answer === question.correctAnswer) {
    return res.json({ correct: true });
  }
  return res.json({ correct: false });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

