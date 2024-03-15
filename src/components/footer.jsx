import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import '../App.css';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <div>
        <hr></hr>
        <Row>
          <p style={{textAlign: 'center', fontWeight: 'bold', marginTop:'20px', marginBottom:'30px'}}>&copy;
           {currentYear} Todo List. All Rights Reserved.</p>
        </Row>
    </div>
  );
};

export default Footer;