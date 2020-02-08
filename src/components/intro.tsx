import * as React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import '../styles/intro.scss';


const Intro: React.FC<object>=()=>{
    return(
        <Container fluid className="sectionIntro">
            <Row className="rowIntro">
                <div className="dots1">
                    <img src={require("../img/bgdots.jpg")} alt="dots"/>
                </div>
                <div className="dots2">
                    <img src={require("../img/bgdots.jpg")} alt="dots"/>
                </div>
                <Col md={5} className="intro">
                    <div>
                        <h1>Hello, <br/> I'm Abdul Zahir</h1>
                        <p>Frontend Web Developer</p>
                    </div>
                </Col>
                <Col md={{span:4,offset:0}} className="myImage">
                    <div className="contain">
                    <div className="square"> <div className="smallCircle"></div> </div>
                    <div className="circle"> <div className="triangle"></div> </div>
                    <img src={require('../img/me3.jpg')} alt="A.Zahir"/>
                    </div>
                </Col>
            </Row>

        </Container>
    )
}

export default Intro;