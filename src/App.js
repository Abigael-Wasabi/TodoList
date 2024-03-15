import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Features from './pages/features';
import Contact from './pages/contact';
import Login from './pages/login';
import Signup from './pages/signup';
import Tasks from './pages/tasks';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/features" element={<Features/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/tasks" element={<Tasks/>} />
        </Routes>
      </Router>
      </Container>
    </div>
  );
}

export default App;
