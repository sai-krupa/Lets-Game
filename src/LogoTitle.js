import React from 'react';
import { Image, Row, Col } from 'react-bootstrap';
import LetsGame from "./Images/LetsGameLogo.png";

function LogoTitle(){
    return(
        <Row>
            <Col><Image src={LetsGame} className="logo-title" /></Col>
        </Row>
    )
}

export default LogoTitle;