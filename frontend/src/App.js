import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuizApp = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [results, setResults]= useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const totalQuestions = questions.length;
  const correctAnswers = results.filter(results => results.result === true).length;

  useEffect(() => {
    // Fetch the questions from the server when the component mounts
    axios.get('/questions').then(res => {
      setQuestions(res.data);
      setIsLoading(false);
    });
  }, []);

  // useEffect(() => {
  //   console.log(totalQuestions);
  // }, [questions]);

  // useEffect(() => {
  //   console.log(answers);
  // }, [answers]);

  const fanType = (score) => {
    if (score <= 0) { return `You have no idea who she is.` }
    if (score <= 3) { return `You have basic knowledge of who she is.` }
    if (score <= 6) { return 'You are a pretty good fan, I would say.' }
    if (score <= 10) { return 'Nice to meet you, fellow monster!' }
  };

  useEffect(() => {
    console.log(results);
    console.log('Correct', correctAnswers);
  }, [results]);

  const handleAnswerClick = answer => {
    setAnswers(prevAnswers => [...prevAnswers, answer]);

    axios.post('/answers', {
      questionId: questions[currentQuestionIndex].id,
      answer
    }).then(res => {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      setResults([...results, {
        id: questions[currentQuestionIndex].id,
        result: res.data.correct
      }])
    });
  };

  if (isLoading) {
    return <p>Loading questions...</p>;
  }

  if (currentQuestionIndex >= questions.length) {
    return <p>You have completed the quiz! Your score was {(correctAnswers / totalQuestions) * 100}%! {fanType(correctAnswers)}</p>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center text-center">
      <p>{currentQuestion.id}. {currentQuestion.text}</p>
      {currentQuestion.choices.map(choice => (
        <button key={choice} onClick={() => handleAnswerClick(choice)}>{choice}</button>
      ))}
    </div>
  );
};

export default QuizApp;