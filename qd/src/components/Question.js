import React from 'react'

const Question = (props) => {
    const {question} = props
    return (
        <div className='question_box px-6 py-4 text-white mid_font rounded-lg font-semibold'>
            {question}
        </div>
    )
}

export default Question