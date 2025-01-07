import React, { useEffect, useState } from "react";
import fetchMusic from "../../services/DeezerApi";
import MusicCard from "../singleComponent/MusicCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../assets/css/nuoveuscite.css";

const NuoveUscite = () => {
  const [music, setMusic] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMusic = async () => {
      try {
        const data = await fetchMusic();
        setMusic(data.data);
        setIsLoading(false);
      } catch (err) {
        setError("Impossibile caricare i dati.");
        setIsLoading(false);
      }
    };

    loadMusic();
  }, []);

  return (
    <Container>
      <h1 className="ms-3 my-4">
        Nuove Uscite<i className="bi bi-arrow-right-short"></i>
      </h1>
      <hr></hr>
      <Container className="mt-5">
        {isLoading ? (
          <p>Caricamento in corso...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <>
            <Row className="d-md-none">
              {music.slice(0, 6).map((track, index) => (
                <Col key={index}>
                  <MusicCard
                    imageUrl={track.album.cover_medium}
                    altText={track.title}
                    cardTittle={track.artist.name}
                  />
                </Col>
              ))}
            </Row>

            <Row className="d-none d-md-flex custom-row">
              {music.slice(0, 10).map((track, index) => (
                <Col key={index} className="custom-col mb-4">
                  <MusicCard
                    imageUrl={track.album.cover_medium}
                    altText={track.title}
                    cardTittle={track.artist.name}
                  />
                </Col>
              ))}
            </Row>
          </>
        )}
      </Container>
    </Container>
  );
};

export default NuoveUscite;
