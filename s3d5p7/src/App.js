import React from 'react';
import UserProfile from './UserProfile';
import Notifications from './Notifications';

function App() {
  const user = {
    name: "Aditya Mohanty",
    email: "Adi.Moh@ex.com",
    // avatarUrl: "", // Try commenting this out to see the placeholder!
    bio: "Frontend developer and React enthusiast."
  };

  const notifications = [
    {
      message: "Your order has been shipped!",
      date: "2025-06-27",
      time: "10:24 AM",
      read: false
    },
    {
      message: "Password changed successfully.",
      date: "2025-06-26",
      time: "08:12 PM",
      read: true
    }
  ];

  return (
    <div>
      <UserProfile {...user} />
      <Notifications notifications={notifications} />
    </div>
  );
}

export default App;
