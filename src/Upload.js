// Upload.js
import React, { useState } from 'react';
import './Upload.css'; // Import the CSS file for styling

const Upload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  return (
    <div className="upload-page">
      <h3>Upload CSV</h3>
      <div className="upload-container">
        <div className="upload-card">
          {/* Content of your card goes here */}
          <input type="file" onChange={handleFileChange} />
          <a href="#" onClick={() => {}}>
            Browse
          </a>
          {file && <img src={URL.createObjectURL(file)} alt="Uploaded File" />}
        </div>
      </div>
    </div>
  );
}

export default Upload;
