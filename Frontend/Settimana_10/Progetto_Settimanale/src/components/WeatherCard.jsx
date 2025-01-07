import { Container, Row, Col, Spinner } from "react-bootstrap";
import AnimatedSVG from "./AnimatedSVG";
import Info from "./Info";
import SearchBar from "./SearchBar";
import { useState } from "react";
import "../assets/css/style.css";

const WeatherCard = function () {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true); 

  const handleWeatherDataReceived = (data) => {
    setWeatherData(data);
    setLoading(false);
    console.log("Dati meteo ricevuti dal componente figlio:", data);
  };

  return (
    <>
      <Container
        fluid
        className="d-flex flex-column align-items-center justify-content-center "
      >
        <Row>
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={12}
            className="mx-auto rounded-4"
            style={{
              background:
                "linear-gradient(220.55deg, #ffed46 0%, #ff7ec7 100%)",
              padding: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          >
            <SearchBar onWeatherDataReceived={handleWeatherDataReceived} />

            {loading ? (
              <Spinner className="mt-5 mb-5" animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            ) : (
              <>
                <AnimatedSVG statoTempo={weatherData.description} />
                <Info datiTempo={weatherData} />
              </>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default WeatherCard;
