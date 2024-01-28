// Sidebar.js
import React from 'react';
import './Sidebar.css';

const Sidebar = ({ setActiveOption, activeOption }) => {
  const options = [
    { name: 'dashboard', icon: 'https://img.icons8.com/external-kmg-design-glyph-kmg-design/32/000000/external-dashboard-ui-essential-kmg-design-glyph-kmg-design.png', label: 'Dashboard' },
    { name: 'upload', icon: 'https://img.icons8.com/external-kmg-design-glyph-kmg-design/32/000000/external-upload-ui-essential-kmg-design-glyph-kmg-design.png', label: 'Upload' },
    { name: 'invoice', icon: 'https://img.icons8.com/sf-regular-filled/48/000000/invoice.png', label: 'Invoice' },
    { name: 'schedule', icon: 'https://img.icons8.com/plumpy/24/000000/overview-pages-2.png', label: 'Schedule' },
    { name: 'calendar', icon: 'https://img.icons8.com/external-kmg-design-glyph-kmg-design/32/000000/external-calendar-ui-essential-kmg-design-glyph-kmg-design.png', label: 'Calendar' },
    { name: 'notification', icon: 'https://img.icons8.com/ios-filled/50/000000/appointment-reminders--v1.png', label: 'Notification' },
    { name: 'settings', icon: 'https://img.icons8.com/ios-filled/50/000000/settings.png', label: 'Settings' }
  ];

  return (
    <div className="sidebar">
      {options.map(option => (
        <div
          key={option.name}
          className={`sidebar-option ${activeOption === option.name ? 'active' : ''}`}
          onClick={() => setActiveOption(option.name)}
        >
          <img
            src={option.icon}
            alt={option.label}
            className="sidebar-icon"
            width="32"
            height="32"
          />
          <span className="sidebar-label">{option.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
