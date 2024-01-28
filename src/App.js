// App.js
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Upload from './up';
import Invoice from './Invoice';
import './App.css';
import Top from './topicon';
// Import other page components

const App = () => {
  const [activeOption, setActiveOption] = useState('dashboard');

  const renderPage = () => {
    switch (activeOption) {
      case 'dashboard':
        return <Dashboard />;
      case 'upload':
        return <Upload />;
      case 'invoice':
        return <Invoice />;
      case 'schedule':
        return <div>Schedule</div>;
        case 'calendar':
          return <div>Calendar</div>;
          case 'notification':
            return <div>Notification</div>;
            case 'settings':
              return <div>Settings</div>;
            

      default:
        return null;
    }
  };

  return (
    <div className="app">
      <div className="header" style={{ display: 'flex', alignItems: 'center' }}>
        <a href="https://imgbb.com/">
          <img src="https://i.ibb.co/2s6nw96/Screenshot-2024-01-28-182307.png" alt="BASE" border="0" style={{ width: '40px', height: '40px', marginRight: '10px' }} />
        </a>
        <h3 style={{ margin: '0' }}>BASE</h3>
      </div>
      <div className="content">
        <Sidebar setActiveOption={setActiveOption} activeOption={activeOption} />
        <div className="main-content">{renderPage()}</div>
      </div>
      <Top />
    </div>
  );
};

export default App;
