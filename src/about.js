import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogoTitle from './LogoTitle.js';
import Footer from './Footer.js';
import { Container, Row, Col, Image } from 'react-bootstrap';

import placeholderImageGM from "./Images/GM.jpg";
import leul from "./Images/LE.png";
import TKB from "./Images/TKB.jpg";
import placeholderImageKrupa from './Images/Krupa.jpeg';


function About(){
    return(
        <Container fluid class="con">
            <LogoTitle />
            <Row style={{marginTop:"10px"}}>
                <Col className="page-title"><h1>About Us</h1></Col>
            </Row>
            <Row className="body-row">
                <Col className="section-title"><h2>MISSION</h2></Col>
            </Row>
            <Row className="body-row">
                <Col className="section-content mission-text"><p>Playing games allows an escape from reality into another reality. The competition to win by itself gives gaming an addictive flavor to it. Mainly our system aims to solve the hustle gamers have to go through to find the perfect gaming partner. In order to comprehend and completely immerse once self into this multi playing competitive environment perfectly selected complimentary skill set between team mates or partners is needed. Once that is achieved the likelihood of winning sky rockets than prior odds. Our mission is mainly to provide that for gamers so that they have the perfect team and partnerships and win every match they go in to.</p></Col>
            </Row>
            <Row className="body-row">
             <Col className="section-title OS_Title"><h2>OUR STORY</h2></Col>
            </Row>
            <Row className="body-row">
             <Col className="section-content Our-Story"><p>The LetsGame team is comprised of four unique individuals with a common goal: creating a platform to help players find their team. With LetsGame, you can match with gamers with similar interests and skill level. LetsGame is the premier site to match gamers all over the world and is the perfect haven for locating your ideal team.
                                                    Upon seeing first-hand how difficult it can be to find teammates for online games, we began developing this app to help gamers globally and to fill a sector of the gaming world that's missing. 
                                                    Use LetsGame to find players who are in search of teammates with similar skill sets, tendencies, and attitudes. Our team wants to help you find your team.</p></Col>
            </Row>
            <Row className="body-row">
               <Col className="section-title teamTitle"><h2>MEET THE TEAM MEMBERS</h2></Col>
            </Row>
            <Row className="body-row body-row-member">
                <Col><div><Image src={leul} className="member-img" /></div></Col>
                 <Col className="member-info LeulName">
                    <h3><strong>Leul Endashaw</strong></h3>
                    <h5>Product Owner</h5>
                    <p>I’m a students at Kennesaw state university doing my masters in software engineering. I did my bachelors degree in computer science, which started me on this journey and encouraged me to pursue it more. I’m currently working in this game matching project which has thought me a lot and gave me a chance to collaborate with my team mates.</p>
                </Col>
            </Row>
            <Row className="body-row body-row-member">
                <Col><div><Image src={placeholderImageGM} className="member-img" /></div></Col>
                <Col className="member-info GopiName">
                    <h3><strong>Gopi Macha</strong></h3>
                    <h5>Scrum Master</h5>
                    <p>Gopi is currently a graduate student at Kennesaw State University.He had Two Years experience in Software field.Mainly with Front-end part of the applications. </p>
                </Col>
            </Row>
            <Row className="body-row body-row-member">
                <Col><div><Image src={placeholderImageKrupa} className="member-img" /></div></Col>
                <Col className="member-info SaiName">
                    <h3><strong>Sai Krupa Bariki Vidura</strong></h3>
                    <h5>Development Team</h5>
                    <p>Pursuing Masters in Software Engineering at Kennesaw State University. Technology enthusiast and interested in software development and programming</p>
                </Col>
            </Row>
        
       
            <Row className="body-row body-row-member">
                <Col ><div><Image src= {TKB} className="member-img" /></div></Col>
                <Col className="member-info TerryName">
                  
                <h3><strong>Terry Boyett</strong></h3>
                    <h5>Development Team</h5>
                    <p>Computer Science bachelors from Valdosta State University, Software Engineering gradute student at Kennesaw State University,interested in web and videogame programming. </p>
                </Col>
            </Row>
            <Footer />
        </Container>
        
    )
}
export default About;
