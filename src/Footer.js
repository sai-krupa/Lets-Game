import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import logo from "./Images/LetsGameLogo.png";
import placeholderImageFB from "./Images/fb.png";
import placeholderImageIS from "./Images/insta.png";
import placeholderImageLI from "./Images/linkedIn.png";
import placeholderImageTW from "./Images/twitter2.png";

function Footer(){
    return(
        <Row className="footer-con">
            {/* <Row className="footer-header">
                <Col><a href="/"><Image src={logo} className="logo-image"/></a></Col>
            </Row> */}
            <Row className="footer-navigation">
              <Col className="footer-navigation-col FooterHome"><h5><a href="/" className="anchor"><div className='FooterHome'>Home</div></a><span className="separation"></span></h5></Col>
                <Col className="footer-navigation-col FooterAU"><h5><a href="/about" className="anchor"><div className='FooterAU'>About Us</div></a><span className="separation"></span></h5></Col>
                <Col className="footer-navigation-col FooterHIW"><h5><a href="/how-it-works" className="anchor">How it works</a></h5></Col>
            </Row>
            <Row><div className="footer-line"></div></Row>
            <Row className="social-media">
                <Col><a href="https://www.instagram.com/p/CN9DgVZBO2-/?utm_source=ig_web_copy_link" target="_blank"><Image src={placeholderImageIS} className="media-img" /></a></Col>
                <Col><a href="https://www.facebook.com/letsgame.ksu/posts/109819027907966" target="_blank"><Image src={placeholderImageFB} className="media-img" /></a></Col>
                <Col><a href="https://www.linkedin.com/posts/letsgame-ksu-8a54a2210_playing-games-allows-an-escape-from-reality-activity-6790956551352971264-JjQG" target="_blank"><Image src={placeholderImageLI} className="media-img"/></a></Col>
                <Col><a href="https://twitter.com/LetsGam38020362/status/1384994419070410764?s=20" target="_blank"><Image src={placeholderImageTW} className="media-img" /></a></Col>
            </Row>
            <Row className="copyright">
                <Col>@2021 Emerging Software Engineering Team#</Col>
            </Row>
        </Row>
    )
}
export default Footer;
