import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";

const FilmCarousel = ({ title, films }) => {
  const chunkSize = 6;
  const filmChunks = [];

  for (let i = 0; i < films.length; i += chunkSize) {
    filmChunks.push(films.slice(i, i + chunkSize));
  }

  return (
    <Container fluid className="py-3">
      <h4 className="pb-4 ps-3">{title}</h4>
      <Carousel indicators={false} interval={null}>
        {filmChunks.map((chunk, idx) => (
          <Carousel.Item key={idx}>
            <Row className="g-3">
              {chunk.map((film, idx) => (
                <Col key={idx} xs={12} md={2}>
                  <img
                    src={film.Poster}
                    alt={film.Title}
                    className="d-block w-100 card-img-film"
                    style={{ height: "400px", objectFit: "fill" }}
                  />
                  <p className="text-center text-white mt-2">{film.Title}</p>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default FilmCarousel;
