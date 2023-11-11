import React from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import img1 from './../../assets/img/phone-icn.webp'
import img2 from './../../assets/img/chat-icn.png'
import Button from 'react-bootstrap/Button';
import './SupportSection.css'

const SupportSection = () => {
  return (
    <section className="WELCOME-TO-PHONO-SUPPORT-WERE-HERE-TO-HELP my-5">
      <Container>
        <h2 className="text-center">WELCOME TO PHONO SUPPORT. WE'RE HERE TO HELP.</h2>
        <p className="text-center">ALWAYS ON YOUR SIDE WHEN YOU NEED HELP</p>
        <Row>
          <div className="col-sm-6">
            <Card className="d-flex flex-row align-items-center">
              <img src={img1} alt="" />
              <Card.Body>
                <p>HAVE ANY DOUBTS?</p>
                <h4>CALL US NOW</h4>
                <p>This Number is Toll Free <br />0000 - 123 - 456789</p>
              </Card.Body>
            </Card>
            <Button variant="dark" className='btn'>Dark</Button>
          </div>
          <div className="col-sm-6">
            <Card className="d-flex flex-row align-items-center">
              <img src={img2} alt="" />
              <Card.Body>
                <p>WANNA TALK TO US?</p>
                <h4>LIVE CHAT NOW</h4>
                <p>
                  Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.Lorem ipsum dolor
                </p>
              </Card.Body>
            </Card>
            <Button variant="dark" className='btn'>Dark</Button>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default SupportSection;