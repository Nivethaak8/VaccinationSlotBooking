// frontend/src/components/UserDashboard.js
import React from 'react';

const UserDashboard = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    alert('Logged out successfully');
  };

  return (
    <div>
      <h2>User Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserDashboard;
