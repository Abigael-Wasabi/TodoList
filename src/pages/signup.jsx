import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css'

function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleUsernameChange = (event) =>{
    setUsername(event.target.value);
    updateButtonState(event.target.value, email, password);
  };

  const handleEmailChange = (event) =>{
    setEmail(event.target.value);
    updateButtonState( event.target.value, username, password);
  };

  const handlePasswordChange = (event) =>{
    setPassword(event.target.value);
    updateButtonState( event.target.value, username, email);
  };

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
        alert("Invalid email address");
        return;
      }
      if (!isPasswordValid(password)) {
        console.log("Password does not meet complexity requirements");
        alert("Password does not meet complexity requirements");
        return;
      }
      console.log(response.data); //response from the server
      alert(`Welcome ${username}`);
      navigate("/tasks");
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
        <input 
          type="text"
          onChange={handleUsernameChange}
          id="username"
          value={username} /><br />

        <label>Email</label><br />
        <input 
          type="email"
          onChange={handleEmailChange}
          id="email"
          value={email} /><br />

        <label>Password</label><br />
        <input 
          type="password"
          onChange={handlePasswordChange}
          id="password"
          value={password} /><br />

        <Link to="/login"
          disabled={
            isPasswordValid(password) && 
            isEmailValid(email)}>
          <button disabled={
          !isPasswordValid(password) || 
          !isEmailValid(email) ||
          isButtonDisabled}
          onClick={handleSignUp}>Sign Up</button>
      </Link>

        <Nav.Link style={{ marginBottom: '30px' }} href="/login">I'm a member. Login</Nav.Link>
      </form>
      <Footer />
    </div>
  )
}

export default Signup;
