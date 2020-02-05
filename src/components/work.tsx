import React from 'react';

import {Container, Row, Col} from 'react-bootstrap';
import Project from './single/project';
import StyleButton from './single/styleButton';

import watch2ni8 from '../img/watch2ni8.jpg';

import '../styles/work.scss';


const Work: React.FC<object>=()=>{
    return(
        <Container fluid className="work">
            <Row className="workRow">
                <Col className="workCol1" md={{span:5, offset:1}}>
                    <Project name="project1" demo="testlink" info="testinfo" github="testgit" srcImg={watch2ni8}/>
                    <Project name="project2" demo="testlink" info="testinfo" github="testgit" srcImg={watch2ni8}/>
                    <Project name="project3" demo="testlink" info="testinfo" github="testgit" srcImg={watch2ni8}/>
                    <span className="viewBtn"><StyleButton label="view all work" type="anchor" to="#" /></span>
                </Col>
                <Col className="workCol2" md={{span:5, offset:0}}>
                    <h3>My Selected Work</h3>
                    <Project name="project4" demo="testlink" info="testinfo" github="testgit" srcImg={watch2ni8}/>
                    <Project name="project5" demo="testlink" info="testinfo" github="testgit" srcImg={watch2ni8}/>
                    <Project name="project6" demo="testlink" info="testinfo" github="testgit" srcImg={watch2ni8}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Work;