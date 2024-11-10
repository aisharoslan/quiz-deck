import React from 'react'
import { useNavigate } from 'react-router-dom';
import { RiArrowGoBackLine } from "react-icons/ri";

const FinalScore = () => {
    const navigate = useNavigate();
    const goToNextPage = () => {
        navigate('/'); // Replace with your desired route
    };
    
    return (
        <div className='answer_key_box w-10/12 min-h-[550px] rounded-xl flex flex-col justify-center items-center'>
            <h3 className='medium_font font-semibold mb-12'>Amazing work! You scored...</h3>
            <h1 className='large_font font-semibold mb-12'>✨ 10/10 ✨</h1>
            <button className='flex items-center gap-2 px-4 py-3 bg-black w-42 rounded-md justify-between ml-5 text-xl' onClick={goToNextPage}>
                Back to Home <RiArrowGoBackLine />
            </button>
        </div>
    )
}

export default FinalScore