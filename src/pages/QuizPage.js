import React from 'react'
import QuizBox from '../components/QuizBox'
import { useNavigate } from 'react-router-dom';

const QuizPage = () => {
  const navigate = useNavigate();

  const goToNextPage = () => {
    navigate('/answerkey'); // Replace with your desired route
  };

  return (
    <>
      <img src="/assets/logo.png" alt="QuizDeck Logo" className='absolute right-0 top-0 mt-8 mr-8 h-10'/>
      <div className='flex flex-row justify-center items-center'>
        <QuizBox />
      </div>
      <button className='flex items-center gap-2 px-4 py-3 bg-black w-42 rounded-md justify-between text-xl absolute left-24 medium_font' onClick={goToNextPage}>
        Answer Explanation
      </button>
    </>
  )
}

export default QuizPage