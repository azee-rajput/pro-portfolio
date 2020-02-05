import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Navbar from './components/navbar';
import Intro from './components/intro';
import {Container, Row } from 'react-bootstrap';
import Breaker from './components/breaker';
import Skills from './components/skills';
import Detail from './components/detail';
import Work from './components/work';
import Experience from './components/experience';
import Contact from './components/contact';
import BottomLinks from './components/bottomLinks';
import Footer from './components/footer';


const App: React.FC = () => {
  return (
    <Container fluid className="App">
      <Row><Navbar/></Row>
      <Row id="intro"><Intro/></Row>
      <Row>
        <Breaker/>
      </Row>
      <Row id="skill">
        <Skills/>
      </Row>

      <Row id="about">
        <Detail/>
      </Row>

      <Row id="work">
        <Work/>
      </Row>

      <Row>
        <Experience/>
      </Row>

      <Row id="contact">
        <Contact/>
      </Row>

      <Row>
        <BottomLinks/>
      </Row>

      <Row>
        <Footer/>
      </Row>
    </Container>
  );
}

export default App;
