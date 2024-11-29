import React from "react";
import { Container, Row, Col, Button, Dropdown, Form } from "react-bootstrap";

const EditProfile = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={0} md={3} lg={4}></Col>
        <Col xs={12} md={6} lg={4}>
          <Container fluid>
            <h1 className="text-md-center display-4 fw-bold">Edit Profile</h1>
            <hr />
            <Row>
              <Col xs={12} md={6} className="text-center text-md-start">
                <img src="assets/img/avatar.png" width="100" alt="Avatar" />
              </Col>
              <Col xs={12} md={6}>
                <Form.Control
                  type="text"
                  className="bg-secondary w-75 mb-3"
                  id="nickname2"
                  placeholder="Epicoder #1"
                />
                <h5 className="my-3 text-secondary">Language:</h5>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="outline-secondary"
                    className="rounded-0 border border-1 border-light"
                  >
                    English
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="bg-black">
                    <Dropdown.Item href="#">Italian</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <hr />
                <h5 className="my-3 text-secondary">Maturity Settings:</h5>
                <Button className="btn-dark rounded-0 w-75 fw-bold px-2 mb-3">
                  ALL MATURITY SETTINGS
                </Button>
                <p>Show files for all maturity settings for this profile.</p>
                <Button
                  variant="outline-secondary"
                  className="rounded-0 w-50 text-secondary border border-1 border-secondary"
                >
                  EDIT
                </Button>
                <hr />
                <h5 className="my-3 text-secondary">Autoplay Controls:</h5>
                <Form.Check
                  type="checkbox"
                  id="autoplay1"
                  label="Autoplay next episode in a series on all devices"
                  className="text-white"
                />
                <Form.Check
                  type="checkbox"
                  id="autoplay2"
                  label="Autoplay previews while browsing on all devices"
                  className="text-white"
                />
              </Col>
            </Row>
            <hr />
            <Row>
              <Col xs={12} xl={4} className="mb-2">
                <Button
                  id="salva"
                  variant="light"
                  className="fw-bold rounded-0 w-100 h-100 border border-1 border-dark text-dark"
                >
                  SAVE
                </Button>
              </Col>
              <Col xs={12} xl={4} className="mb-2">
                <Button
                  variant="outline-secondary"
                  className="fw-bold rounded-0 w-100 h-100 text-secondary"
                >
                  CANCEL
                </Button>
              </Col>
              <Col xs={12} xl={4}>
                <Button
                  variant="outline-secondary"
                  className="fw-bold rounded-0 w-100 h-100 text-secondary"
                >
                  DELETE PROFILE
                </Button>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col xs={0} md={3} lg={4}></Col>
      </Row>
    </Container>
  );
};

export default EditProfile;
