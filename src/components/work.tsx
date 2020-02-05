import React from 'react';

import {Container, Row, Col} from 'react-bootstrap';
import Project from './single/project';

import watch2ni8 from '../img/watch2ni8.jpg';
import weather from '../img/weatherReact.png';
import song from '../img/30song.jpg';
import food from '../img/food.jpg';

import '../styles/work.scss';


const Work: React.FC<object>=()=>{
    return(
        <Container fluid className="work">
            <Row className="workRow">
                <Col className="workCol1" md={{span:5, offset:1}}>
                    <Project name="30s-Songs"
                             info="A Single page application for searching songs and play songs preview of 30 seconds,
                              hence the name 30s-songs. APIs are consumed from Deezer.
                              Technologies used for creating this app are React.js, Bootstrap, JavaScript,
                             HTML and CSS. This app is deployed on netlify."
                             demo="https://nervous-blackwell-0a05a6.netlify.com/#/" 
                             github="https://github.com/azee-rajput/30s-songs" 
                             srcImg={song}/>

                    <Project name="Weather" 
                             info="Weather app forecast the current weather and five day forecast for current location
                             using geolocation. You can also search other cities to see their weather. 
                             APIs are consumed from openweathermap.
                             Technologies used for creating this app are React.js, Bootstrap, JavaScript,
                             HTML and CSS." 
                             github="https://github.com/azee-rajput/react-weather" 
                             demo="https://azee-rajput.github.io/react-weather/#/"
                             srcImg={weather}/>
                </Col>

                <Col className="workCol2" md={{span:5, offset:0}}>
                    <h3>My Selected Work</h3>
                     <Project name="Watch2Ni8" 
                            info="Watch2ni8 is movie and TV show browsing app that displays trending, popular and top rated
                             shows and consumes APIs from TheMovieDB.
                             Technologies used for creating this app are React.js, Bootstrap, JavaScript,
                             HTML and CSS. This app is deployed on netlify." 
                            github="https://github.com/azee-rajput/watch2ni8" 
                            demo="https://angry-saha-53e493.netlify.com/"
                            srcImg={watch2ni8}/>                   

                    <Project name="Food" 
                             info="Food is a website for browsing recipes. Recipes can be searched by their name, 
                             categories/tags, area and ingredients. APIs are consumed from TheMealDb.
                              Technologies used for creating this app are React.js, Bootstrap, JavaScript,
                             HTML and CSS."
                             demo="https://azee-rajput.github.io/react-food/#/" 
                             github="https://github.com/azee-rajput/react-food" 
                             srcImg={food}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Work;