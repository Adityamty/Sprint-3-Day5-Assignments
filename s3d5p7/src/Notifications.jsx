import React from 'react';
import './Notifications.css';

function Notifications({ notifications }) {
  return (
    <div className="notifications-list">
      {notifications.map((note, idx) => (
        <div
          key={idx}
          className={`notification-card ${note.read ? 'read' : 'unread'}`}
        >
          <div className="notification-message">{note.message}</div>
          <div className="notification-meta">
            <span>{note.date}</span>
            <span>{note.time}</span>
            <span className="notification-state">
              {note.read ? 'Read' : 'Unread'}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Notifications;
