import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="mt-5 bg-black text-white py-4">
      <Container>
        <Row>
          <Col xs={12} md={3}>
            <div className="d-flex flex-column align-items-start">
              <div className="d-flex fs-3 my-2">
                <i className="bi bi-facebook pe-3"></i>
                <i className="bi bi-instagram pe-3"></i>
                <i className="bi bi-twitter pe-3"></i>
                <i className="bi bi-youtube pe-3"></i>
              </div>
              <a href="#" className="text-white my-2">
                Audio and Subtitles
              </a>
              <a href="#" className="text-white my-2">
                Media Center
              </a>
              <a href="#" className="text-white my-2">
                Privacy
              </a>
              <a href="#" className="text-white my-2">
                Contact Us
              </a>
              <Button variant="outline-secondary" className="rounded-0 my-2">
                Service Code
              </Button>
              <span className="my-2">&copy; 1997-2021 Netflix Inc</span>
            </div>
          </Col>
          <Col xs={12} md={3}>
            <div className="d-flex flex-column align-items-start">
              <a href="#" className="text-white my-2">
                Audio Description
              </a>
              <a href="#" className="text-white my-2">
                Investor Relations
              </a>
              <a href="#" className="text-white my-2">
                Legal Notices
              </a>
            </div>
          </Col>
          <Col xs={12} md={3}>
            <div className="d-flex flex-column align-items-start">
              <a href="#" className="text-white my-2">
                Help Center
              </a>
              <a href="#" className="text-white my-2">
                Jobs
              </a>
              <a href="#" className="text-white my-2">
                Cookie Preferences
              </a>
            </div>
          </Col>
          <Col xs={12} md={3}>
            <div className="d-flex flex-column align-items-start">
              <a href="#" className="text-white my-2">
                Gift Cards
              </a>
              <a href="#" className="text-white my-2">
                Terms Of Use
              </a>
              <a href="#" className="text-white my-2">
                Corporate Information
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
