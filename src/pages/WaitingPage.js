import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import AWS from 'aws-sdk';

// Initialize AWS S3
AWS.config.update({
  region: 'us-east-2',
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-2:d644ab58-ba3b-4fc1-96d2-0d7038c18f4e',
  }),
});
const s3 = new AWS.S3();

const WaitingPage = () => {
  const location = useLocation();  // Access the state passed through navigation
  const [loadingMessage, setLoadingMessage] = useState('Checking if the file is ready...');
  const [fileData, setFileData] = useState(null);  // State to store file content
  const navigate = useNavigate();

  const filename = location.state?.filename;  // Retrieve filename passed from homepage
  const intervalIdRef = useRef(null);  // Declare intervalId using useRef

  // Define the function to check the file
  const checkProcessedFile = async () => {
    if (!filename) {
      console.error('No filename provided');
      return;
    }

    const processedFileKey = `processed_${filename}_detected_text.json.json`;
    
    const params = {
      Bucket: 'keywords-comprehend-console-us-east-2',
      Key: processedFileKey,
    };

    try {
      await s3.headObject(params).promise(); // Check if the file exists

      const fileDataResponse = await s3.getObject(params).promise();
      const fileContent = fileDataResponse.Body.toString('utf-8');  // Assuming the file is text

      // Split the content by new lines to get individual keywords
      const keywords = fileContent.split('\n').map((line) => line.trim()).filter((line) => line);  // Remove empty lines

      // Store the keywords in state
      setFileData(keywords);
      
      setLoadingMessage('File is ready! Redirecting...');
      navigate('/keywords', { state: { fileData, filename } });  // Pass the keywords and filename
      
    } catch (error) {
      if (error.code === 'NotFound') {
        setLoadingMessage('File not found yet, checking again...');
      } else {
        console.error('Error checking for processed file:', error);
        clearInterval(intervalIdRef.current); // Stop polling if an error occurs
      }
    }
  };

  useEffect(() => {
    intervalIdRef.current = setInterval(async () => {
      await checkProcessedFile();
    }, 5000); // Poll every 5 seconds

    return () => clearInterval(intervalIdRef.current); // Cleanup on unmount
  }, [filename]);  // Add filename as a dependency if it's derived from props or route

  return (
    <div className='flex flex-col justify-center items-center'>
      <Header />
      <div className="color_box h-5/6 w-30 rounded-lg flex flex-col justify-center items-center">
        <h1 className='large_font font-semibold'>Analyzing...</h1>
        <h3 className='text-xl'>{loadingMessage}</h3>
      </div>
    </div>
  );
}

export default WaitingPage;
