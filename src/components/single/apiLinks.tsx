import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import '../../styles/apiLinks.scss';

const ApiLinks: React.FC<object>=()=>{
    return(
        <Container fluid className="apiLinks">
            <Row className="rowApi">
                <Col lg={11} className="colApi">
                    <a href="https://openweathermap.org/api" target="_blank" rel="noopener noreferrer">
                        <img src={require("../../img/owm-logo.png")} alt="openweathermap.org"/>
                    </a>

                    <a href="https://www.thecocktaildb.com/api.php" target="_blank" rel="noopener noreferrer">
                        <img src={require("../../img/tcdb-logo.png")} alt="thecocktaildb"/>
                    </a>

                    <a href="https://www.themealdb.com/api.php" target="_blank" rel="noopener noreferrer">
                        <img src={require("../../img/tmealdb-logo.jpg")} alt="themealdb"/>
                    </a>

                    <a href="https://www.themoviedb.org/documentation/api" target="_blank" rel="noopener noreferrer">
                        <img src={require("../../img/tmdb-logo.png")} alt="themoviedb"/>
                    </a>

                    <a href="https://developers.deezer.com/api" target="_blank" rel="noopener noreferrer">
                        <img src={require("../../img/deezer-logo.png")} alt="deezer"/>
                    </a>
                </Col>
            </Row>
        </Container>
    )
}

export default ApiLinks;