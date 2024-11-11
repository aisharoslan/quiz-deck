import React, {useState} from 'react'
import Header from '../components/Header'
import TitleInput from '../components/TitleInput'
import FileUpload from '../components/FileUpload'

const HomePage = () => {
  const [filename, setFilename] = useState('')

  const handleSubmit = (title) => {
    setFilename(title)
    console.log(title)
  }

  return (
    <div className='flex flex-col justify-center items-center'>
        <Header />
        <div className="color_box h-5/6 w-30 rounded-lg flex flex-col justify-center">
            <TitleInput handleSubmit={handleSubmit} />
            <FileUpload filename={filename} />
        </div>
    </div>
  )
}

export default HomePage