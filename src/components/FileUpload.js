import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { LuUploadCloud } from "react-icons/lu";
import AWS from 'aws-sdk';

AWS.config.update({
  region: 'us-east-2',
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-2:d644ab58-ba3b-4fc1-96d2-0d7038c18f4e',
  }),
});

const s3 = new AWS.S3();

const FileUpload = (props) => {
    const [file, setFile] = useState(null);
    const {filename} = props

    const navigate = useNavigate();

    const goToNextPage = () => {
        navigate('/wait', { state: { filename } }); // Replace with your desired route
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
        console.log(file)
    };

    const uploadFileToS3 = async () => {
      if (!file) return alert('Please select a file to upload');
  
      const params = {
        Bucket: 'textract-console-us-east-2-55ba1af0-2148-4203-a96b-f1cbca97043f',
        Key: filename,
        Body: file,
        ContentType: file.type,
      };
  
      try {
        const result = await s3.upload(params).promise();
        console.log('File uploaded successfully:', result);
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    };

    return (
        <div className='flex flex-col items-start justify-start mt-20 ml-32'>
            <p className='pb-2 font-semibold medium_font'>Upload File:</p>
            <div className='flex flex-row space-between items-center'>
                <input type="file" onChange={handleFileChange} />
                <button 
                className='flex items-center gap-2 px-4 py-3 bg-black w-42 rounded-md justify-between ml-48 text-xl' 
                onClick={() => {
                  uploadFileToS3();
                  goToNextPage();
                }}>
                    Upload <LuUploadCloud />
                </button>
            </div>
        </div>
    );
}

export default FileUpload