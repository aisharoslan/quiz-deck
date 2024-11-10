import React, {useState} from 'react'

const TitleInput = (props) => {
  const [title, setTitle] = useState('')
  const {handleSubmit} = props

  const handleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    handleSubmit(title)
  }

  return (
    <div className='flex flex-col justify-start items-stretch ml-32 mt-4'>
        <p className='pb-5 font-semibold medium_font'>Enter Slide Title:</p>
        <form onSubmit={handleFormSubmit}>
          <div className='flex flex-row'>
            <input
              type="text"
              placeholder="Slide Title"
              className="rounded-md py-2 w-8/12 pl-4 text-black"
              value={title}
              onChange={handleChange}
            />
            <button type="submit" className='px-4 py-3 bg-black w-42 rounded-md justify-between ml-5 text-xl'>
              Enter
            </button>
          </div>
        </form>
    </div>
  )
}

export default TitleInput