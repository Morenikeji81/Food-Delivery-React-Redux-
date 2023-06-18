import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import logo from "../../assets/images/res-logo.png";
import '../../styles/footer.css'

const Footer = () => {
  return <footer className='footer'>
    <Container>
      <Row>
        <Col lg='3' md='4' sm='6'>
        <div className="logo footer__logo text-start">
            <img src={logo} alt="logo" />
            <h5>Tasty Treat</h5>
            <p className='mt-3'>
              Lorem ipsum dolor sit, amet consectetur 
              adipisicing elit. Voluptatum unde quae eligendi. 
              </p>
          </div>
        </Col>

        <Col lg='3' md='4' sm='6'>
        <h5 className='footer__title'>Delivery Time</h5>

        <ListGroup className='deliver__time-list'>
          <ListGroupItem className='delivery__time-item border-0 ps-0'>
            <span>Sunday - Thursday</span>
            <p>10:00am - 11:00pm</p>
          </ListGroupItem>

          <ListGroupItem className='delivery__time-item border-0 ps-0'>
            <span>Friday - Saturday</span>
            <p>Off Day</p>
          </ListGroupItem>
        </ListGroup>
        </Col> 

        <Col lg='3' md='4' sm='6'>
        <h5 className='footer__title'>Contact</h5>
        <ListGroup className='deliver__time-list'>

        <ListGroupItem className='delivery__time-item border-0 ps-0'>
            <p>Location: ZindaBazar, Sylhet-3100, Bangladesh</p> 
          </ListGroupItem>

          <ListGroupItem className='delivery__time-item border-0 ps-0'>
            <span>Phone: 080003428600</span> 
          </ListGroupItem>

          <ListGroupItem className='delivery__time-item border-0 ps-0'>
            <span>Email: example@gmail.com</span>
          </ListGroupItem>
        </ListGroup>
        </Col>

        <Col lg='3' md='4' sm='6'>
        <h5 className='footer__title'>Newsletter</h5>
        <p>Subscribe our newsletter</p>
        <div className="newsletter">
          <input type="email" placeholder='Enter your email' />
          <span><i class="ri-send-plane-line"></i></span>
        </div>
        </Col>
      </Row>
    </Container>
  </footer>
}

export default Footer