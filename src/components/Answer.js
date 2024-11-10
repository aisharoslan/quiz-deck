import React from 'react'

const Answer = (props) => {
    const { letter, desc, answer, correctAnswer, onClick } = props;

    const backgroundColor = answer === letter ? letter === correctAnswer
    ? 'bg-green-500' // Green if correct
    : 'bg-red-500'   // Red if incorrect
    : 'bg-[#D9D9D9]'  // Default background color

    return (
        <div
        className={`flex flex-row px-6 py-4 gap-x-12 mb-8 rounded hover:scale-105 ${backgroundColor}`}
        onClick={() => onClick(letter)} // Handle click
        >
        <p className='font-bold text-xl text-black'>{letter}</p>
        <p className='font-semibold text-xl text-black'>{desc}</p>
        </div>
    );
}

export default Answer