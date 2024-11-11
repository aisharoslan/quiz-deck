import React from 'react';

const KeywordBox = ({ keyword, isSelected, onToggle }) => {
  return (
    <div
      onClick={() => onToggle(keyword)}
      className={`mx-6 px-6 py-4 text-xl text-center rounded cursor-pointer hover:text-white hover:bg-black hover:scale-105
        ${isSelected ? 'text-white bg-black' : 'text-black bg-[#D9D9D9]'}`}
    >
      {keyword}
    </div>
  );
};

export default KeywordBox;
