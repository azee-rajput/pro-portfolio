import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import '../styles/experience.scss';


const Experience: React.FC<object>=()=>{
    return(
        <Container fluid className="experience">
            <Row className="expRow">
                <Col md={{span:4, offset:0}} className="whyMe">
                    <h3>Why Hire Me</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </Col>
                <Col md={{span:5, offset:1}} className="exp">
                    <div className="shadowDiv">
                        <div className="company">
                            <h4>Company 1</h4>
                            <p>from-till</p>
                        </div>
                    
                        <div className="company">
                            <h4>Company 1</h4>
                            <p>from-till</p>
                        </div>

                        <div className="company">
                            <h4>Company 1</h4>
                            <p>from-till</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Experience;