import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import KeywordBox from '../components/KeywordBox';
import { useNavigate, useLocation } from 'react-router-dom';
import { HiOutlineArrowRight } from "react-icons/hi";
import axios from 'axios';
import AWS from 'aws-sdk'; // Import AWS SDK

AWS.config.update({
  region: 'us-east-2', // Specify your region
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-2:d644ab58-ba3b-4fc1-96d2-0d7038c18f4e', // Your identity pool ID
  }),
});

const s3 = new AWS.S3();

const KeywordPage = () => {
  const location = useLocation();
  const [keywords, setKeywords] = useState(['system', 'resources', 'Cont.', 'os', 'file', '0', 'information', 'Linux', 'mode bit', '1']);
  const [selectedKeywords, setSelectedKeywords] = useState([]);  // New state for selected keywords
  const [filename, setFilename] = useState('LEC04.pdf');

  useEffect(() => {
    if (location.state) {
      setKeywords(location.state.keywords);  // Retrieve the keywords
      setFilename(location.state.filename);  // Retrieve the filename
    }
  }, [location]);

  const getFileFromS3 = async (bucket, key) => {
    const params = {
      Bucket: bucket,
      Key: key,
      ResponseCacheControl: 'max-age=0',
    };
    try {
      const data = await s3.getObject(params).promise();
      return data.Body.toString('utf-8'); // Return the file content as a string
    } catch (err) {
      console.error('Error fetching file from S3', err);
      throw err;
    }
  };

  const generateQuiz = async () => {
    try {
      // Fetch the txt file from the first bucket
      const jsonFile = `${filename}_pages.json`;
      const jsonFileData = await getFileFromS3('textract-console-json',`${jsonFile}`)

      // Fetch the json file from the second bucket
      const txtFile = `processed_${filename}_detected_text.json.json`;
      const txtFileData = await getFileFromS3('keywords-comprehend-console-us-east-2',`${txtFile}`);

      console.log({
        filenameInput: filename,
        jsonFileData: jsonFileData,
        txtFileData: txtFileData,
      });

      const response = await axios.post('https://t4t2ty2bca.execute-api.us-east-2.amazonaws.com/beta/generate-quiz', {
        filenameInput: filename,
        txtFileData: txtFileData,
        jsonFileData: jsonFileData,
      });
        
      console.log(response.data);
      } catch (error) {
        console.error('Error generating quiz:', error);
      }
      console.log('Generating quiz with selected keywords:', selectedKeywords);
      console.log('Filename:', filename);
  };
  
  const navigate = useNavigate();

  const goToNextPage = async () => {
    try {
      await generateQuiz();  // Wait for quiz generation to complete
      navigate('/questions', { state: { selectedKeywords, filename } }); // Pass state to next page
    } catch (error) {
      console.error('Error while navigating:', error);  // Handle navigation failure
    }
  };

  const handleToggleKeyword = (keyword) => {
    setSelectedKeywords((prevSelected) =>
      prevSelected.includes(keyword)
        ? prevSelected.filter((kw) => kw !== keyword)  // Remove if already selected
        : [...prevSelected, keyword]  // Add if not selected
    );
  };

  return (
    <div className='flex flex-col justify-center items-center'>
        <Header />
        <div className="answer_key_box w-6/12 min-h-[450px] rounded-xl flex justify-center items-center">
          <div className="grid grid-cols-2 gap-2 mt-4 mb-42">
            {keywords.slice(0, 12).map((keyword, index) => (
                <KeywordBox
                  key={index}
                  keyword={keyword}
                  isSelected={selectedKeywords.includes(keyword)}
                  onToggle={handleToggleKeyword}
                />
            ))}
          </div>
        </div>
        <button 
            className='flex items-center gap-2 px-4 py-3 bg-black w-42 rounded-md justify-between ml-5 text-xl right-8 bottom-8 absolute' 
            onClick={goToNextPage}
          >
              Generate Quiz <HiOutlineArrowRight />
        </button>
    </div>
  );
}

export default KeywordPage;
