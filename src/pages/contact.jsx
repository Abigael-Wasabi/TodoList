import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import '../App.css'

function Contact() {
  return (
    <div style={{height: '100vh'}}>
        <Navbar/>

        <Row style={{ textAlign: 'center' }}>
            <a target='_blank' href="+254 567 234" rel="noreferrer">
            Drop us a line
                <div>
                    <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                </div>
            </a>
            <a target='_blank' href="https://location.todo" rel="noreferrer">
              Find Us 
                <div>
                    <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />
                </div>
                Moi Avenue, Twins Tower
            </a>
            <a target='_blank' href="tel:+254111583196" rel="noreferrer">
              Talk to us
                <div>
                    <FontAwesomeIcon icon={faPhone} size="2x" />
                </div>
            </a>
            <a target='_blank' href="mailto:abiwasabi03@gmail.com" rel="noreferrer">Let's connect
                <div>
                    <FontAwesomeIcon icon={faEnvelope} size="2x" />
                </div>
            </a>
        </Row>
        <div style={{marginBottom:'10px'}}>
        <Footer/>
        </div>
        
    </div>
  )
}

export default Contact;




        