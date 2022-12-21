import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Body, ButtonImg, Button } from './styles';

const QuizApp = (props) => {
  const { artist } = props; 
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
    return <div className='flex_col_cent'>
        <p className='text-center'>You have completed the quiz! Your score was {(correctAnswers / totalQuestions) * 100}%! {fanType(correctAnswers)}</p>
      </div>
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <>
      <Body bg={currentQuestion.image} />
      <div className="question-wrap">

        <div className="question-header">
          <p className="question">{currentQuestion.text}</p>
          <ButtonImg showProceed={showProceed} imgSrc={currentQuestion.image}>
            <Button 
              showProceed={showProceed} 
              children={'>'} 
              onClick={() => handleAnswerClick(currentChoice)} 
            />
          </ButtonImg>
        </div>

        {currentQuestion.choices.map(choice => (
            <button 
              id={currentChoice === choice ? 'selected' : ''} 
              key={choice} 
              onClick={ () => { setCurrentChoice(choice); setShowProceed(true) } }
              children={choice}
            />
        ))}

      </div>
    </>
  );
};

export default QuizApp;