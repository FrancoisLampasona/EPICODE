import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img1 from "../../assets/images/1a.png";
import img2 from "../../assets/images/1b.png";
import MusicPoster from "../singleComponent/MusicPoster";

const Novità = () => {
  return (
    <Container>
      <h1 className="ms-3 my-4">Novità :</h1>
      <hr></hr>
      <Container>
        <Row>
          <Col md={6} className="mb-4">
            <div className="mb-3">
              <p>Nuova Stazione Radio :</p>
              <h4>Rilassati, al resto pensiamo noi. Ascolta Apple Music !</h4>
            </div>
            <MusicPoster imageUrl={img1} altText="Immagine 1" />
          </Col>

          <Col md={6} className="mb-4">
            <div className="mb-3">
              <p>Nuova Stazione Radio :</p>
              <h4>Ecco la nuova casa della musica latina.</h4>
            </div>
            <MusicPoster imageUrl={img2} altText="Immagine 2" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Novità;
