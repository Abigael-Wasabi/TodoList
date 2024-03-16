import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css'

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    updateButtonState(event.target.value, password);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    updateButtonState(event.target.value, email);
  };

  const updateButtonState = (email, password) => {
    if (email && password) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }; 

  const handleLogin = async (event) => {
    event.preventDefault(); 
    try { 
      const response = await axios.post('http://localhost:4000/user/login', {
        email: email,
        password: password,
      }); 
      console.log('Response:', response.data);
      if (response.data.userData) {
        navigate('/tasks');
        alert(`Welcome ${email}`);
      };
    } catch (err) {
      if (err.response && err.response.status === 404) {
        alert('User not found.');
      } else if (err.response && err.response.status === 401) {
        alert('Incorrect password.');
      } else {
        alert('An error occurred. Please try again later.');
      }
      console.log(err.message);
    } finally {
      updateButtonState(email, password,);
    }
  };

  return (
    <div>
        <Navbar/>
        <form style={{marginTop:'200px', marginBottom:'321px'}}>
        <legend>LOGIN</legend>
        <label>Email</label><br></br>
        <input
        type="text"
        id="email"
        value={email}
        onChange={handleEmailChange}></input><br></br>

        <label>Password</label><br></br>
        <input
        type="password"
        id="password"
        value={password}
        onChange={handlePasswordChange}></input><br></br>

        <Link to="/tasks">
          <button
          disabled={isButtonDisabled}
          onClick={handleLogin}>Login</button>
        </Link>
        <Nav.Link  style={{marginBottom:'30px'}} href="/signup">I'm new.Sign up</Nav.Link>
        </form>
        <Footer/>
    </div>
    
  )
}

export default Signup;