import React from 'react'
import { Nav } from 'react-bootstrap';

function Navbar() {
    let img;img= require('../assets/logo.jpg');
  return (
    <div>
    <div className='navbar'>
        <Nav.Link href='/'>
        <img style={{height: '70px',borderRadius:'50%'}}
        src={img} alt="logo"></img></Nav.Link>
        <p style={{fontWeight:'bold'}}>HappyTodoList</p>
        <Nav.Link href='/'>Home</Nav.Link>
        <Nav.Link href='/features'>Features</Nav.Link>
        <Nav.Link href='contact'>Contact</Nav.Link>
        <Nav.Link href='/signup'>Sign In</Nav.Link>
    </div>
        <hr></hr></div>

  )
}

export default Navbar