import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img1 from "../../assets/images/2a.png";
import img2 from "../../assets/images/2b.png";
import img3 from "../../assets/images/2c.png";
import img4 from "../../assets/images/2d.png";
import img5 from "../../assets/images/2e.png";

import MusicCard from "../singleComponent/MusicCard";

const NuoviEpisodi = () => {
  return (
    <Container>
      <h1 className="ms-3 my-4">
        Nuovi Episodi Radio <i className="bi bi-arrow-right-short"></i>
      </h1>
      <hr></hr>
      <Container className="mt-5">
        <Row className="gap-1">
          <Col>
            <MusicCard
              imageUrl={img1}
              altText="Immagine 1"
              cardTittle="Prologo con Abuelo"
            />
          </Col>
          <Col>
            <MusicCard
              imageUrl={img2}
              altText="Immagine 2"
              cardTittle="The Wanderer"
            />
          </Col>
          <Col>
            <MusicCard
              imageUrl={img3}
              altText="Immagine 3"
              cardTittle="Micheal Buble & Carly Pearce"
            />
          </Col>
          <Col className="d-none d-md-block">
            <MusicCard
              imageUrl={img4}
              altText="Immagine 4"
              cardTittle="Stephan Muccio"
            />
          </Col>
          <Col className="d-none d-lg-block">
            <MusicCard
              imageUrl={img5}
              altText="Immagine 5"
              cardTittle="Chart Spotlight"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default NuoviEpisodi;
