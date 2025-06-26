import React from 'react';
import './UserCard.css';

function UserProfile({
  name = "Anonymous",
  email = "Not provided",
  avatarUrl = "",
  bio = "No bio available."
}) {
  const placeholder = "https://via.placeholder.com/100?text=User";
  return (
    <div className="user-card">
      <img
        className="user-avatar"
        src={avatarUrl || placeholder}
        alt={name}
      />
      <div className="user-info">
        <h2>{name}</h2>
        <p className="user-email">{email}</p>
        <p className="user-bio">{bio}</p>
      </div>
    </div>
  );
}

export default UserProfile;
