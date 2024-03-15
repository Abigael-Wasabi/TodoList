import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { Nav } from 'react-bootstrap';
import '../App.css'

function Signup() {
  return (
    <div>
        <Navbar/>
        <form style={{marginTop:'200px', marginBottom:'321px'}}>
        <legend>LOGIN</legend>
        <label>Email</label><br></br>
        <input></input><br></br>
        <label>Password</label><br></br>
        <input></input><br></br>
        <Nav.Link href="/tasks"><button>Login</button></Nav.Link>
        <Nav.Link  style={{marginBottom:'30px'}} href="/signup">I'm new.Sign up</Nav.Link>
        </form>
        <Footer/>
    </div>
    
  )
}

export default Signup;