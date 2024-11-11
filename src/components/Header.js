import React from 'react'

const Header = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-20'>
        <img src="/assets/logo.png" alt="QuizDeck Logo" className='w-5/12' />
        <p className='text-xl mb-8'>GenAI-powered Quiz Generation &amp; Content Summarization</p>
    </div>
  )
}

export default Header