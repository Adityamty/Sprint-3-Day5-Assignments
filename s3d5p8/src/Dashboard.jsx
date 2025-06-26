import React from 'react';
import UserProfile from './UserProfile';
import Notifications from './Notifications';

function Dashboard() {
  // Example user data
  const user = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    avatarUrl: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Frontend developer and React enthusiast."
  };

  // Example notifications data
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
    },
    {
      message: "Welcome to the dashboard!",
      date: "2025-06-25",
      time: "09:00 AM",
      read: true
    }
  ];

  return (
    <div style={{ maxWidth: '700px', margin: '0 auto', padding: '32px' }}>
      <UserProfile {...user} />
      <Notifications notifications={notifications} />
    </div>
  );
}

export default Dashboard;
