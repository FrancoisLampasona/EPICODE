import React from "react";
import { Container, Dropdown, Button } from "react-bootstrap";

const GenereBar = function () {
  return (
    <Container fluid className="d-flex justify-content-between py-4">
      <div className="d-flex ms-4 align-items-center">
        <h2 className="me-4">Saghe cinematrografiche del momento :</h2>
      </div>
      <div className="d-flex me-4">
        <Button variant="outline-secondary" className="border rounded-0">
          <i className="bi bi-justify-left text-white"></i>
        </Button>
        <Button variant="outline-secondary" className="border rounded-0 ms-2">
          <i className="bi bi-grid text-white"></i>
        </Button>
      </div>
    </Container>
  );
};

export default GenereBar;
