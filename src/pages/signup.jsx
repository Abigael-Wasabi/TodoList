import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { Nav } from 'react-bootstrap';
import '../App.css'

function Signup() {
  return (
    <div>
        <Navbar/>
        <form style={{marginTop:'200px', marginBottom:'250px'}}>
        <legend>SIGN UP</legend>
        <label>Username</label><br></br>
        <input></input><br></br>
        <label>Email</label><br></br>
        <input></input><br></br>
        <label>Password</label><br></br>
        <input></input><br></br>
        <Nav.Link href="/tasks"><button>Sign up</button></Nav.Link>
        
        <Nav.Link  style={{marginBottom:'30px'}} href="/login">I'm a member.Login</Nav.Link>
        </form>
        <Footer/>

    </div>
    
  )
}

export default Signup;