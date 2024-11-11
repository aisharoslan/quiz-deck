import React from 'react'

const AnswerKey = (props) => {
    const {correctAnswer} = props
    return (
        <div className='answer_key_box w-10/12 min-h-[550px] rounded-xl flex flex-col justify-center items-center'>
            <h1 className='great_font font-semibold'>Answer Key: {correctAnswer}</h1>
            <p className='mid_font'>Reasoning...</p>
        </div>
    )
}

export default AnswerKey