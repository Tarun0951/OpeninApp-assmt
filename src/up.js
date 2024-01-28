import React, { useState } from 'react';
import './up.css'; // Import the customized CSS file for styling
// Remove the unused import statement
import UpTable from './UpTable'; 

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showTable, setShowTable] = useState(false); // Add state to control the visibility of the table

  const handleFileSelect = (event) => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.csv, application/vnd.ms-excel';
    fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      setSelectedFile(file);
    });
    fileInput.click();
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setShowTable(false); // Hide the table when the file is removed
  };

  const handleUpload = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowTable(true); // Show the table when the upload is completed
    }, 2000); // 2 seconds delay

    // Add your upload logic here
  };

  return (
    <div className="upload-page">
      <h1 className="upload-header">Upload CSV</h1>
      <div className="upload-container">
        <div className="upload-card">
          <div className="upload-drag-drop">
            {selectedFile ? (
              <>
                <img width="48" height="48" src="https://img.icons8.com/fluency/48/ms-excel.png" alt="ms-excel" />
                <p>{selectedFile.name}</p>
                <button className="remove-button" onClick={handleRemoveFile}>
                  Remove
                </button>
              </>
            ) : (
              <>
                <img width="48" height="48" src="https://img.icons8.com/fluency/48/ms-excel.png" alt="ms-excel" />
                <p>
                  Drop your excel sheet here or
                  <span className="browse-link" onClick={handleFileSelect}> browse</span>
                </p>
              </>
            )}
          </div>
          <button className="upload-button" onClick={handleUpload}>
            {isLoading ? (
              <div className="spinner"></div>
            ) : (
              <>
                <img width="18" height="12" src="https://img.icons8.com/fluency-systems-regular/48/000000/upload--v1.png" alt="upload--v1" style={{ filter: 'brightness(0) invert(1)' }} />
                Upload
              </>
            )}
          </button>
        </div>
      </div>
        {selectedFile && showTable && <UpTable />} {/* Render the UpTable component when a file is selected and the upload is completed */}
    </div>
  );
};

export default Upload;
