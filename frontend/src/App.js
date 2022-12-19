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

  const [currentChoice, setCurrentChoice] = useState('');
  const [showProceed, setShowProceed] = useState(false);

  useEffect(() => {
    axios.get('/questions').then(res => {
      setQuestions(res.data);
      setIsLoading(false);
    });
  }, []);

  // useEffect(() => {
  //   setShowProceed(true)
  // }, [currentChoice]);

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

  const nextQuestion = () => {
    setCurrentQuestionIndex(prevIndex => prevIndex + 1);
  };

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
      }]);
      setShowProceed(false);
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
    <div className="question-wrap">
      <p>{currentQuestion.id}. {currentQuestion.text}</p>
      {currentQuestion.choices.map(choice => (
        <button className={currentChoice === choice && 'selected'} key={choice} onClick={() => {setCurrentChoice(choice); setShowProceed(true)} }>{choice}</button>
      ))}

      { showProceed ? <button id={'proceed-btn'} children={'>>'} onClick={() => handleAnswerClick(currentChoice)} /> : null }

      <img src={currentQuestion.image} className="ques_img" />
    </div>
  );
};

export default QuizApp;