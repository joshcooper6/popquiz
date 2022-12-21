import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Body, ButtonImg, Button } from './styles';
import { ArtistContext } from '../../context/ArtistContext';

const QuizApp = (props) => {
  const { artist } = useContext(ArtistContext); 
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [results, setResults]= useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const totalQuestions = questions.length;
  const correctAnswers = results.filter(results => results.result === true).length;
  const [currentChoice, setCurrentChoice] = useState('');
  const [showProceed, setShowProceed] = useState(false);

  function shuffleArray(array) {
    if (array.length <= 1) return array; // if the array is empty or has only one element, return it as is
  
    let shuffledArray = array.slice(); // create a copy of the array
    let currentIndex = shuffledArray.length;
    let temporaryValue, randomIndex;
  
    // while there are elements to shuffle
    while (0 !== currentIndex) {
      // pick a remaining element
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // and swap it with the current element
      temporaryValue = shuffledArray[currentIndex];
      shuffledArray[currentIndex] = shuffledArray[randomIndex];
      shuffledArray[randomIndex] = temporaryValue;
    }
  
    return shuffledArray;
  }

  useEffect(() => {
    axios.get('/questions').then((res) => {
      setQuestions(shuffleArray(res.data));
      setIsLoading(false);
    });
  }, []);

  const reset = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setResults([]);
    setCurrentChoice('');
  };

  useEffect(() => {
    axios.post('/changeQuestions', { artist: artist }).then((res) => {
      setQuestions(shuffleArray(res.data));
    });
    reset();
  }, [artist]);

  const fanType = (score) => {
    if (score <= 0) { return `You have no idea who she is.` }
    if (score <= 3) { return `You have basic knowledge of who she is.` }
    if (score <= 6) { return 'You are a pretty good fan, I would say.' }
    if (score <= 10) { return 'Nice to meet you, super fan!' }
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
      answer,
      artist
    }).then(res => {
      nextQuestion();
      setResults([...results, {
        id: questions[currentQuestionIndex].id,
        result: res.data.correct
      }]);
      setShowProceed(false);
      setCurrentChoice('');
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