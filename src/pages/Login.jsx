import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdminContext } from '../context/AdminContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AdminContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = login(username, password);
    if (user) {
      if (user?.role === "Admin") {
        navigate('/users');
      } else {
        navigate("/products");
      }
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form shadow" onSubmit={handleSubmit}>
        <h2 className="text-center mb-4">Login</h2>
        <input
          className="form-control mb-3"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          className="form-control mb-3"
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
};

export default Login;