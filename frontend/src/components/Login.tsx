// Login.tsx
import React, { useState } from 'react';
import axios from 'axios';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState<string | null>(null);

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3001/auth/login', {
        username,
        password,
      });
      console.log("Login Response:", response);
      const token = response.data.access_token;
      localStorage.setItem('jwt_token', token);
      setLoginError(null);
      window.location.href = "/"; // Redirect after successful login
    } catch (error: any) {
      console.error("Login Error:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      } else if (error.request) {
        console.error("Request:", error.request);
      } else {
        console.error('Error message:', error.message);
      }
      setLoginError(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleLogin}>Login</button>
      {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
    </div>
  );
};

export default Login;