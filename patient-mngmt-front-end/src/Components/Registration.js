import React, { useState } from 'react';

function Registration() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const handleRegister = () => {
    // Implement registration logic here
  };

  return (
    <div>
      <h1>Patient Report Management</h1>
      <h2>Registration</h2>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label>Role:</label>
        <input
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
      </div>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Registration;
