import React from 'react'
import FinalScore from '../components/FinalScore';

const FinalScorePage = () => {
  return (
    <>
      <img src="/assets/logo.png" alt="QuizDeck Logo" className='absolute right-0 top-0 mt-8 mr-8 h-10'/>
      <div className='flex flex-row justify-center items-center mt-28'>
        <FinalScore />
      </div>
    </>
  )
}

export default FinalScorePage