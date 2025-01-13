import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const MenageAccount = () => {
  return (
    <Container fluid className="w-75 py-3 bg-white">
      <h1>Account</h1>
      <hr />
      <Container fluid className="p-0">
        <Row>
          <Col xs={12} md={3} className="pb-3 pb-md-0">
            <h5 className="text-secondary">MEMBERSHIP & BILLING</h5>
            <Button className="shadow-sm text-black btn-light">
              Cancel Membership
            </Button>
          </Col>
          <Col xs={12} md={9}>
            <Container fluid className="p-0">
              <Row className="g-0">
                <Col xs={6}>
                  <h6 className="fw-bold m-0 email">User@gmail.com</h6>
                  <p className="text-secondary m-0">Password : *********</p>
                  <p className="text-secondary m-0">Phone : +39 320 561 34567</p>
                </Col>
                <Col xs={6} className="d-flex flex-column">
                  <a href="#" className="text-end m-0">
                    Change account email
                  </a>
                  <a href="#" className="text-end m-0">
                    Change password
                  </a>
                  <a href="#" className="text-end m-0">
                    Change phone number
                  </a>
                </Col>
              </Row>
              <hr />
              <Row className="g-0">
                <Col xs={5} className="d-flex align-items-center">
                  <img
                    src="https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404_1280.png"
                    width="60"
                    alt="PayPal"
                  />
                  <h6 className="mx-3 fw-bold m-0 email">User@gmail.com</h6>
                </Col>
                <Col xs={7} className="d-flex flex-column">
                  <a href="#" className="text-end m-0">
                    Update payment info
                  </a>
                  <a href="#" className="text-end m-0">
                    Billing details
                  </a>
                  <a href="#" className="text-end m-0">
                    Redeem gift card or promo code
                  </a>
                  <a href="#" className="text-end m-0">
                    Where to buy gift cards?
                  </a>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
        <hr />

        <Row>
          <Col xs={12} md={3}>
            <h5 className="text-secondary">PLAN DETAILS</h5>
          </Col>
          <Col xs={12} md={9}>
            <Container fluid className="p-0">
              <Row className="g-0">
                <Col xs={6}>
                  <h6 className="fw-bold">
                    Standard <i className="bi bi-badge-hd"></i>
                  </h6>
                </Col>
                <Col xs={6} className="d-flex flex-column">
                  <a href="#" className="text-end m-0">
                    Change plan
                  </a>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
        <hr />

        <Row>
          <Col xs={12} md={3}>
            <h5 className="text-secondary">SETTINGS</h5>
          </Col>
          <Col xs={12} md={9}>
            <div className="d-flex flex-column">
              <a href="#" className="my-2">
                Parent Controls
              </a>
              <a href="#" className="my-2">
                Test Participation
              </a>
              <a href="#" className="my-2">
                Manage download devices
              </a>
              <a href="#" className="my-2">
                Activate a device
              </a>
              <a href="#" className="my-2">
                Recent device streaming activity
              </a>
              <a href="#" className="my-2">
                Signout all devices
              </a>
            </div>
          </Col>
        </Row>
        <hr />

        <Row>
          <Col xs={12} md={3}>
            <h5 className="text-secondary">MY PROFILE</h5>
          </Col>
          <Col xs={12} md={9}>
            <Container fluid className="p-0">
              <Row className="g-0">
                <Col xs={8} className="d-flex align-items-center">
                  <img
                    src="assets/img/avatar.png"
                    width="40"
                    height="40"
                    alt="Avatar"
                  />
                  <h6 className="fw-bold mx-3" id="nickname2">
                    User
                  </h6>
                </Col>
                <Col xs={4} className="d-flex flex-column">
                  <a href="#" className="text-end m-0">
                    Manage profiles
                  </a>
                  <a href="#" className="text-end m-0">
                    Add profile email
                  </a>
                </Col>
              </Row>
              <Row className="g-0">
                <Col xs={12} md={4}>
                  <div className="d-flex flex-column">
                    <a href="#" className="my-2">
                      Language
                    </a>
                    <a href="#" className="my-2">
                      Playback settings
                    </a>
                    <a href="#" className="my-2">
                      Subtitle appearance
                    </a>
                  </div>
                </Col>
                <Col xs={12} md={4}>
                  <div className="d-flex flex-column">
                    <a href="#" className="my-2">
                      Viewing activity
                    </a>
                    <a href="#" className="my-2">
                      Ratings
                    </a>
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default MenageAccount;
