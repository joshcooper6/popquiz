const express = require('express');
const bodyParser = require('body-parser');
const PORT = 5000;
const app = express();

app.use(bodyParser.json());

const questions = [{    
    id: 1,    
    question: "What is Lady Gaga's real name?",    
    answers: ["Stefani Joanne Angelina Germanotta", "Madonna", "Beyonce", "Jennifer Lopez"],
    correctAnswer: "Stefani Joanne Angelina Germanotta"
  },
  {
    id: 2,
    question: "What year did Lady Gaga release her debut album, 'The Fame'?",
    answers: ["2008", "2010", "2012", "2014"],
    correctAnswer: "2008"
  },
  {
    id: 3,
    question: "Which of the following is NOT a Lady Gaga album?",
    answers: ["Born This Way", "Artpop", "The Fame Monster", "Revival"],
    correctAnswer: "Revival"
  },
  {
    id: 4,
    question: "How many Grammy Awards has Lady Gaga won?",
    answers: ["6", "8", "10", "12"],
    correctAnswer: "6"
  },
  {
    id: 5,
    question: "Lady Gaga co-wrote the song 'Telephone' with which artist?",
    answers: ["Britney Spears", "Katy Perry", "Madonna", "Beyonce"],
    correctAnswer: "Beyonce"
  },
  {
    id: 6,
    question: "Lady Gaga played the lead role in which 2018 film?",
    answers: ["A Star is Born", "Bohemian Rhapsody", "Rocketman", "The Greatest Showman"],
    correctAnswer: "A Star is Born"
  },
  {
    id: 7,
    question: "Lady Gaga's song 'Bad Romance' was inspired by which singer?",
    answers: ["Madonna", "Britney Spears", "Christina Aguilera", "Janet Jackson"],
    correctAnswer: "Madonna"
  },
  {
    id: 8,
    question: "In which city was Lady Gaga born?",
    answers: ["New York", "Los Angeles", "Chicago", "Miami"],
    correctAnswer: "New York"
  },
  {
    id: 9,
    question: "Lady Gaga has a tattoo of which animal on her left arm?",
    answers: ["Wolf", "Tiger", "Elephant", "Bear"],
    correctAnswer: "Tiger"
  },
  {
    id: 10,
    question: "Lady Gaga has a bachelor's degree in what field?",
    answers: ["Music", "Art", "Theater", "Education"],
    correctAnswer: "Music"
  }
];

app.get('/questions', (req, res) => {
    const questionsWithoutAnswers = questions.map(question => {
      return {
        id: question.id,
        text: question.question,
        choices: question.answers
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