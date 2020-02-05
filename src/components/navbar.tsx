import * as React from 'react';
import { NavLink } from './single/navLink';
import '../styles/navbar.scss';

import {Container, Row, Col} from 'react-bootstrap';




const Navbar: React.FC<object>=()=>{
    return(
        <Container fluid className="topbar">
            <Row>
                <Col md={{span:2, offset:0}} className="title"><h1><a href="#">Title</a></h1></Col>

                <Col md={{span:5, offset:5}} className="navlinks">
                    <ul>
                        <NavLink link="#about" name="About"/>
                        <NavLink link="#skill" name="Skills"/>
                        <NavLink link="#work" name="Portfolio"/>
                        <NavLink link="#contact" name="Contact"/>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default Navbar;