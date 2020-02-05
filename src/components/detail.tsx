import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import '../styles/detail.scss';
import IconLinks from './single/iconLinks';
import StyleButton from './single/styleButton';
import * as PDF from '../resume/Abdul_Zahir-ic.pdf';



const Detail: React.FC<object>=()=>{
    return(
        <Container fluid className="detail">
            <Row>
                <Col md={5} className="heading">
                    <h2>Who I Am</h2>
                </Col>

                <Col md={{span:6}} className="detaillinks">
                    <p>
                    I'm a developer from Pakistan, currently focusing on front-end, 
                    with a goal to become full-stack developer. 
                    Check out some of my <a href="#work">projects</a> down below.
                    </p>
                    <Row className="btnLinks">
                        <Col md={6} className="colBtnLinks">
                            <StyleButton to={PDF} label="Download CV" type="anchor" tgt={true}/>
                            <div><IconLinks/></div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Detail;