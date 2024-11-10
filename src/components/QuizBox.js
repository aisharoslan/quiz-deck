import React from 'react'
import Question from './Question'
import AnswerSet from './AnswerSet'

const QuizBox = () => {
  return (
    <div className='flex flex-col mt-24 items-center justify-center'>
      <Question question='Question 1.........................'/>
      <AnswerSet />
    </div>
  )
}

export default QuizBox