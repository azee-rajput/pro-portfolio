import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import '../styles/footer.scss';


const Footer: React.FC<object>=()=>{
    return(
        <Container fluid className="footer">
            <Row className="rowFooter">
                <Col md={12}>
                    <h6>A.bdul Zahir. All rights reserved.</h6>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;