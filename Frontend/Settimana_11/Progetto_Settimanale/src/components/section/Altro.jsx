import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GenereCard from "../singleComponent/GenereCard";

const Altro = () => {
  const ArrayGeneri = [
    "Esplora per genere",
    "Worldwide",
    "Video Musicali",
    "Decenni",
    "Classifiche",
    "Nuovi Artisti",
    "Attività e stati d'animo",
    "Audio spazio",
    "Hit del Passato",
  ];

  return (
    <Container className="pb-4">
      <h1 className="ms-3 my-4">
        Altro da esplorare <i className="bi bi-arrow-right-short"></i>
      </h1>
      <hr></hr>
      <Container className="mt-5">
        <Row className="gx-3 gy-4">
          {ArrayGeneri.map((genere, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={4}>
              <GenereCard cardTittle={genere} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Altro;
