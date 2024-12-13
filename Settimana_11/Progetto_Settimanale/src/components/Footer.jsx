import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footerone = () => {
  return (
    <footer className="bg-body-tertiary mt-5">
      <Container>
        <Row className="pt-4">
          <Col md={6} lg={3} className="mb-3">
            <h5 className="text-uppercase text-dark">Esplora :</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Mac
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  iPhone
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  iPad
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Watch
                </a>
              </li>
            </ul>
          </Col>

          <Col md={6} lg={3} className="mb-3">
            <h5 className="text-uppercase text-dark">Supporto :</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Centro assistenza
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Contatta Apple
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Resi e rimborsi
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Stato dell'ordine
                </a>
              </li>
            </ul>
          </Col>

          <Col md={6} lg={3} className="mb-3">
            <h5 className="text-uppercase text-dark">Informazioni Legali :</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Termini di utilizzo
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Vendite e rimborsi
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Mappa del sito
                </a>
              </li>
            </ul>
          </Col>

          <Col md={6} lg={3} className="mb-3">
            <h5 className="text-uppercase text-dark">Seguici :</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  LinkedIn
                </a>
              </li>
            </ul>
          </Col>
        </Row>

        <Row>
          <Col className="text-center">
            <p className="mb-0 text-dark">
              © {new Date().getFullYear()} Apple Inc. Tutti i diritti riservati.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footerone;
