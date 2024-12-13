import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import appleLogo from "../../assets/logos/apple.svg";

const MusicBar = () => {
  return (
    <div className="music-bar bg-body-tertiary text-black py-2 d-none d-md-block">
      <Container>
        <Row className="align-items-center">
          <Col xs={4} className="d-flex justify-content-start gap-3">
            <Button variant="link" className="text-black p-0">
              <i className="bi bi-shuffle fs-4"></i>
            </Button>
            <Button variant="link" className="text-black p-0">
              <i className="bi bi-skip-backward-fill fs-4"></i>
            </Button>
            <Button variant="link" className="text-black p-0">
              <i className="bi bi-play-fill fs-1"></i>
            </Button>
            <Button variant="link" className="text-black p-0">
              <i className="bi bi-skip-forward-fill fs-4"></i>
            </Button>
            <Button variant="link" className="text-black p-0">
              <i className="bi bi-arrow-repeat fs-4"></i>
            </Button>
          </Col>

          <Col
            xs={4}
            className="d-flex justify-content-center p-2 rounded-3"
            style={{ backgroundColor: "rgba(137, 134, 134, 0.46)" }}
          >
            <img
              src={appleLogo}
              alt="Apple Logo"
              style={{ width: "40px", height: "40px" }}
            />
          </Col>

          <Col
            xs={4}
            className="d-flex justify-content-end align-items-center gap-2"
          >
            <i className="bi bi-volume-up fs-5"></i>
            <input
              type="range"
              className="form-range"
              style={{ width: "150px" }}
              min="0"
              max="100"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MusicBar;
