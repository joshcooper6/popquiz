import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';

const FadeIn = keyframes`
  from { opacity: 0 } to { opacity: 1 }
`

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 100vw;
  min-height: 100vh;
  background: url(${props => props.bg});
  background-size: cover;
  background-position: center;
  filter: blur(1em);
  -webkit-filter: blur(1em);
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  scale: 1.1;
`

const ButtonImg = styled.div`
    background: url(${props => props.imgSrc});
    background-size: cover;
    background-position: center;
    height: 80px;
    width: 80px;
    border-radius: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 1em;
    // opacity: ${props => props.showProceed ? 0.5 : 1};
    z-index: 0;
`

const Button = styled.button`
  display: ${props => props.showProceed ? 'block' : 'none'};  
  height: 100%;
  width: 100%;
  border: 0;
  border-radius: 100%;
  opacity: ${props => props.showProceed ? '1' : '0'};
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  cursor: pointer;
  background-blend-mode: multiply;
  font-weight: 800;
  transition: 1s ease;
  font-size: 2em;
  animation: ${FadeIn} 500ms linear forwards;
`



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
      nextQuestion();
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

  // window.onblur = function() {
  //   setLeft(true)
  // };


  return (
    <>
    <Body bg={currentQuestion.image} />
    <div className="question-wrap">
      <div className="question-header">
        <p className="question">{currentQuestion.text}</p>
        <ButtonImg showProceed={showProceed} imgSrc={currentQuestion.image}>
          <Button showProceed={showProceed} children={'>'} onClick={() => handleAnswerClick(currentChoice)} />
        </ButtonImg>
      </div>
      {currentQuestion.choices.map(choice => (
        <button id={currentChoice === choice && 'selected'} key={choice} onClick={() => {setCurrentChoice(choice); setShowProceed(true)} }>{choice}</button>
      ))}

      {/* { showProceed ? <button children={'>>'} onClick={() => handleAnswerClick(currentChoice)} /> : null } */}

    </div>
    </>
  );
};

export default QuizApp;