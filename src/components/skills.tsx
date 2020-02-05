import * as React from 'react';
import '../styles/skills.scss';
import SkillCard from './single/skillcard';
import { Container, Row, Col } from 'react-bootstrap';
import {Javascript} from 'styled-icons/boxicons-logos/Javascript';
import {Bootstrap} from 'styled-icons/fa-brands/Bootstrap';
import {Sass} from 'styled-icons/fa-brands/Sass';
import {ReactLogo} from 'styled-icons/fa-brands/ReactLogo';


const Skills: React.FC<object>=()=>{
    return(
        <Container fluid className="skills">
            <Row className="skillrow">
                <Col lg={12}>
                    <h3>What Skills Do I Have</h3>
                </Col>
                <Col lg={5}>
                    <SkillCard
                    icon={<Javascript size="100" color="#f0db4f"/>} title="JavaScript"/>
                </Col>
                <Col lg={5}>
                    <SkillCard icon={<Bootstrap size="100" color="#602c50 "/>} title="Bootstrap"/>
                </Col>
                <Col lg={5}>
                    <SkillCard icon={<Sass size="100" color="#cc6699"/>} title="Sass"/>
                </Col>
                <Col lg={5}>
                    <SkillCard icon={<ReactLogo size="100" color="#61dbfb"/>} title="React JS"/>
                </Col>
            </Row>
        </Container>
    )
}

export default Skills;