import NavBarra from "./components/Navbar";
import Novità from "./components/section/Novità";
import NuoviEpisodi from "./components/section/NuoviEpisodi";
import NuoveUscite from "./components/section/NuoveUscite";
import Altro from "./components/section/Altro";
import Footerone from "./components/Footer";
import SideBar from "./components/SideBar";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MusicBar from "./components/singleComponent/MusicBar";

function App() {
  return (
    <>
      <NavBarra></NavBarra>
      <Container fluid>
        <Row>
          <Col
            xs={1}
            md={2}
            lg={3}
            xl={2}
            xxl={1}
            className="d-none d-lg-block"
          >
            <SideBar></SideBar>
          </Col>
          <Col lg={9} xl={10} xxl={11} className="p-0">
            <MusicBar></MusicBar>
            <Novità></Novità>
            <NuoviEpisodi></NuoviEpisodi>
            <NuoveUscite></NuoveUscite>
            <Altro></Altro>
            <Footerone></Footerone>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
