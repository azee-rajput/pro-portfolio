import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import '../styles/contact.scss';


const Contact: React.FC<object>=()=>{
    return(
        <Container fluid className="contact">
            <Row className="rowContact">
            
                <Col sm={8} className="colContact">
                <div className="shadowDiv">
                    <div className="square"> <div className="smallCircle"></div> </div>
                    <div className="circle"> <div className="triangle"></div> </div>
                    <p>Have Any Project In Mind? Say Hello At</p>
                    <h1>azee.rajput.7@gmail.com</h1>
                    </div>
                </Col>
                
            </Row>
        </Container>
    )
}

export default Contact;