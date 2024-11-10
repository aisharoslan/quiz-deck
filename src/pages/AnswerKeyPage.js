import React from 'react'
import { useNavigate } from 'react-router-dom';
import AnswerKey from '../components/AnswerKey';

const AnswerKeyPage = () => {
  const navigate = useNavigate();
  const correctAnswer = 'C';

  const goToNextPage = () => {
    navigate('/final'); // Replace with your desired route
  };

  return (
    <>
      <img src="/assets/logo.png" alt="QuizDeck Logo" className='absolute right-0 top-0 mt-8 mr-8 h-10'/>
      <div className='flex flex-row justify-center items-center mt-28'>
        <AnswerKey correctAnswer={correctAnswer} />
      </div>
      <button className='px-4 py-3 bg-black w-42 rounded-md text-xl right-40 bottom-24 absolute' onClick={goToNextPage}>
          Next Question
      </button>
    </>
  )
}

export default AnswerKeyPage