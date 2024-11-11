import React, {useState} from 'react'
import Answer from './Answer'
import Toast from './Toast'

const AnswerSet = () => {
  const [answer, setAnswer] = useState(null)
  const [showToast, setShowToast] = useState(false);
  const correctAnswer = 'C';

  const handleAnswerClick = (letter) => {
    setAnswer(letter);
    if (letter === correctAnswer) {
      setShowToast({ visible: true, message: 'Correct answer! Well done! 🎉', type: 'success' });
    } else {
      setShowToast({ visible: true, message: 'Incorrect answer. Try again! 🤔', type: 'error' });
    }
  };

  const closeToast = () => {
    setShowToast({ visible: false, message: '', type: '' });
  };

  return (
    <div className='flex flex-col mt-12'>
      <Answer letter='A' desc='Answer 1.........................' answer={answer} correctAnswer={correctAnswer} onClick={handleAnswerClick}/>
      <Answer letter='B' desc='Answer 2.........................' answer={answer} correctAnswer={correctAnswer} onClick={handleAnswerClick}/>
      <Answer letter='C' desc='Answer 3.........................' answer={answer} correctAnswer={correctAnswer} onClick={handleAnswerClick}/>
      <Answer letter='D' desc='Answer 4.........................' answer={answer} correctAnswer={correctAnswer} onClick={handleAnswerClick}/>
      
      {/* Render CustomToast conditionally based on showToast state */}
      {showToast.visible && (
        <Toast
          message={showToast.message}
          onClose={closeToast}
          type={showToast.type}
        />
      )}
    </div>
  )
}

export default AnswerSet