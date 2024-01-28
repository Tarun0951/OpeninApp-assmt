import React from 'react';

import ReactDOM from 'react-dom/client';
import './index.css';
import Signin from './SiginPage'; // Update the import statement
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    { /* Update the component being rendered */ }
    <Signin />
  </React.StrictMode>
);

reportWebVitals();
