import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { Row, Col } from 'react-bootstrap';

function Features() {
  let img;img= require('../assets/addsub.jpg');
  let imgsrc;imgsrc= require('../assets/addtask.jpg');
  let srcimg;srcimg= require('../assets/completetask.jpg');
  let srci;srci= require('../assets/undo.webp');
  return (
    <div style={{height: '100vh', textAlign:'center'}}>
        <Navbar/>
        <p style={{fontSize: '25px', fontWeight:'bold'}}>Feel overwhelmed by your never-ending to-do list? Don't worry, we've got you covered. </p>
        <Row>
          <Col>
          <p style={{fontWeight:'bold'}}>Add Task</p>
           You're free to add new tasks to your to-do list whenever 
           you need to. This feature allows you to expand your list 
           by inputting the title and details of the task.
          </Col>
          <Col>
          <img style={{height: '120px',borderRadius:'50%'}}
           src={imgsrc} alt="logo"></img>
          </Col>
        </Row>
        <Row>
          <Col>
          <img style={{height: '120px',borderRadius:'50%'}}
           src={img} alt="logo"></img>
          </Col>
          <Col>
          <p style={{fontWeight:'bold'}}>Add Subtask</p>
          Break down larger tasks into smaller, manageable subtasks. This 
          feature helps you organize your tasks more effectively and tackle 
          complex projects with step-by-step progress tracking.
          </Col>
        </Row>
        <Row>
          
          <Col>
          <p style={{fontWeight:'bold'}}>Complete Task</p>
          Once you've finished a task, mark it as complete. 
          This helps you keep track of what you've accomplished and what's 
          still pending on your list.
          </Col>
          <Col>
          <img style={{height: '120px',borderRadius:'50%'}}
           src={srcimg} alt="logo"></img>
          </Col>
        </Row>
        <Row>
          <Col>
          <img style={{height: '120px',borderRadius:'50%'}}
           src={srci} alt="logo"></img>
          </Col>
          <Col>
          <p style={{fontWeight:'bold'}}>Undo Complete</p>
          If you accidentally mark a task as complete or change 
          your mind, you can easily undo the completion status. This gives you 
          the flexibility to manage your tasks the way you want.
          </Col>
        </Row>
        <Footer/>
    </div>
  )
}

export default Features;