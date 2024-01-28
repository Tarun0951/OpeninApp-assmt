// Assuming JavaScript and CSS modules are being used based on existing code

import React, { useState } from 'react';
import './uptable.css'; // We will continue using the up.css, but this might need to be a new or different CSS file that matches your application's structure

const TagDropdown = ({ onSelect }) => {
  return (
    <select className="tag-dropdown" onChange={(e) => onSelect(e.target.value)}>
      <option value="">Select Tags</option>
      <option value="Tag 1">Tag 1</option>
      <option value="Tag 2">Tag 2</option>
      <option value="Tag 3">Tag 3</option>
      <option value="Tag 4">Tag 4</option>
      <option value="Tag 5">Tag 5</option>
    </select>
  );
};

const UpTable = () => {
  const [data, setData] = useState([
    { id: '01', link: 'www.google.com', prefix: 'prefixsample', tags: [] },
    { id: '02', link: 'www.google.com', prefix: 'prefixsample', tags: [] },
    // ...more data
  ]);

  const handleTagSelect = (tag, rowIndex) => {
    setData(prevData => {
      const newData = [...prevData];
      newData[rowIndex].tags = [...newData[rowIndex].tags, tag];
      return newData;
    });
  };

  const removeTag = (tagToRemove, rowIndex) => {
    setData(prevData => {
      const newData = [...prevData];
      newData[rowIndex].tags = newData[rowIndex].tags.filter(tag => tag !== tagToRemove);
      return newData;
    });
  };

  return (
    
    <div className="upload-table">
      <h3>Uploads</h3>
      <table>
        <thead>
          <tr>
            <th>SI No.</th>
            <th>Links</th>
            <th>Prefix</th>
            <th>Add Tags</th>
            <th>Selected Tags</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.link}</td>
              <td>{row.prefix}</td>
              <td>
                <TagDropdown onSelect={(tag) => handleTagSelect(tag, rowIndex)} />
              </td>
              <td>
                {row.tags.map((tag, index) => (
                  <span key={index} className="selected-tag">
                    {tag} <button onClick={() => removeTag(tag, rowIndex)}>×</button>
                  </span>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UpTable;
