import * as React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import '../styles/intro.scss';


const Intro: React.FC<object>=()=>{
    return(
        <Container fluid className="sectionIntro">
            <Row className="rowIntro">
                <Col md={5} className="intro">
                    <div>
                        <h1>Hello, <br/> I'm Abdul Zahir</h1>
                        <p>Frontend Web Developer</p>
                    </div>
                </Col>
                <Col md={{span:4,offset:1}} className="myImage">
                    <img src={require('../img/me3.jpg')} alt="A.Zahir" />
                </Col>
            </Row>

        </Container>
    )
}

export default Intro;