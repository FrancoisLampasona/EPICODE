import WeatherCard from "./components/WeatherCard";
import "./assets/css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

function App() {

  return (
    <>
      <Container className="text-center ">
        <h1 id="title" className="mb-4">
          Weather App
        </h1>
        <WeatherCard></WeatherCard>
      </Container>
    </>
  );
}

export default App;
