import React from 'react';

const Top = () => {
    return (
        <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
            <span style={{ marginRight: '10px' }}>
                <i className="fa fa-bell-o" aria-hidden="true"></i> {/* Notification icon */}
            </span>
            <span style={{ marginLeft: '10px' }}>
                <i className="fa fa-user-circle-o" aria-hidden="true"></i> {/* User login icon */}
            </span>
        </div>
    );
};

export default Top;