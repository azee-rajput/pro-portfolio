import * as React from 'react';
import '../styles/breaker.scss';
import IconLinks from './single/iconLinks';
import { Container, Col, Row } from 'react-bootstrap';




const Breaker: React.FC<object>=()=>{
    return(
        <Container fluid className="breaker">
            <Row>
                <Col sm={10} className="line"><hr/></Col>
                <Col sm={2} className="icons">
                    <IconLinks/>
                </Col>
            </Row>
            
        </Container>
    )
}

export default Breaker;