import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import { Nav, Row, Col } from 'react-bootstrap';

function Home() {
  let img;img= require('../assets/hero.png');

  return (
    <Container style={{textAlign: 'center'}}>
      <Navbar/>
      <p style={{fontSize: '25px', fontWeight:'bold'}}>Take control of your work and personal life</p>
      <Nav.Link href="/signup"><button style={{backgroundColor:'salmon'}} >GET STARTED</button></Nav.Link>
      <img style={{height: '500px',borderRadius:'40%', background:'#DEE0DD'}}
           src={img} alt="logo"></img>
           <Row >
            <Col><p style={{fontWeight:'bold'}}>Add Task</p>
            Easily input new tasks into your to-do list, ensuring nothing 
            slips through the cracks.
            </Col>
            <Col><p style={{fontWeight:'bold'}}>Add subtask</p>
            Break down larger tasks into smaller, manageable subtasks, 
            helping you tackle complex projects with ease.
            </Col>
            
           </Row>
           <Row>
            <Col><p style={{fontWeight:'bold'}}>Complete Task</p>
            Mark tasks as complete with a simple click or tap, keeping your 
            list organized and up-to-date.
            </Col>
            <Col><p style={{fontWeight:'bold'}}>Undo Complete</p>
            Accidentally marked a task as complete? No worries! Quickly undo 
            the action and restore the task to its previous state.
            </Col>
           </Row>
      <Footer/>
    </Container>
  )
}

export default Home;