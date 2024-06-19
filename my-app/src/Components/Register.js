import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = ({ setAuth }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('isAuthenticated', 'true');
    setAuth(true);
    navigate('/dashboard');
  };

  return (
    <div className='login_box'>

    
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      <button type="submit">Register</button>
    </form>
    <Link to={"/login"} >Login</Link>
    </div>
  );
};

export default Register;
