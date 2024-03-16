import React from 'react';
import { useState } from 'react';
import axios from 'axios'; 
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css'

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@(gmail\.com|yahoo\.com)$/i;
    return emailRegex.test(email);
  };

  const isPasswordValid = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const updateButtonState = (email, password) => {
    if (email && password) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/user/signup', {
        username: username,
        email: email,
        password: password,
      });

      if (!isEmailValid(email)) {
        console.log("Invalid email address");
        return;
      }
      if (!isPasswordValid(password)) {
        console.log("Password does not meet complexity requirements");
        return;
      }
      console.log(response.data); //response from the server
    } catch (err) {
      if (err.response && err.response.status === 400) {
        alert(`User with email ${email} already exists`);
        console.log(err.response.data.message);
      } else {
        alert('An error occurred. Please try again later.');
      }
      console.log(err.message);
    } finally {
      updateButtonState(email, password);
    }
  };

  return (
    <div>
      <Navbar />
      <form style={{ marginTop: '200px', marginBottom: '250px' }} onSubmit={handleSignUp}>
        <legend>SIGN UP</legend>
        <label>Username</label><br />
        <input type="text" onChange={(e) => setUsername(e.target.value)} value={username} /><br />
        <label>Email</label><br />
        <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} /><br />
        <label>Password</label><br />
        <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} /><br />
        <Link to='/tasks'>
          <button type="submit"
          onClick={handleSignUp}>Sign up</button>
        </Link>
        <Nav.Link style={{ marginBottom: '30px' }} href="/login">I'm a member. Login</Nav.Link>
      </form>
      <Footer />
    </div>
  )
}

export default Signup;
