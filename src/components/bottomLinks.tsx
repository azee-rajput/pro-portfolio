import React from 'react';
import '../styles/bottomLinks.scss';
import {Container, Row, Col} from 'react-bootstrap';
import IconLinks from './single/iconLinks';
import { NavLink } from './single/navLink';

const BottomLinks: React.FC<object>=()=>{
    return(
        <Container fluid className="bottomLinks">
            <Row className="rowBottom">
                <Col sm={6} className="colBottom">
                    <h1><a href="#topbar">Abdul Zahir</a></h1>
                    <ul>
                        <NavLink link="#about" name="About"/>
                        <NavLink link="#skill" name="Skills"/>
                        <NavLink link="#work" name="Portfolio"/>
                        <NavLink link="#contact" name="Contact"/>
                    </ul>
                    <IconLinks/>
                </Col>
            </Row>
        </Container>
    )
}

export default BottomLinks;