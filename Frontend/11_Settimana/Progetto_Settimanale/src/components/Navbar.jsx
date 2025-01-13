import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import appleLogo from "../assets/logos/apple.svg";

const NavBarra = function () {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary d-md-none">
        <Container>
          <div className="d-flex align-items-center justify-content-between w-100">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Brand
              href="#"
              aria-label="Apple Music Home"
              className="d-flex align-items-center mx-auto"
            >
              <img
                src={appleLogo}
                alt="Apple Music Logo"
                style={{ width: "40px", height: "40px", marginRight: "10px" }}
              />
              <span>Apple Music</span>
            </Navbar.Brand>
          </div>
          <Navbar.Collapse id="basic-navbar-nav" className="fs-3 ms-2">
            <Nav className="w-100 justify-content-center mt-3">
              <Nav.Link href="#home">
                <i class="bi bi-house me-3"></i>Home
              </Nav.Link>
              <Nav.Link href="#new-releases">
                <i class="bi bi-ui-radios-grid  me-3"></i>Novità
              </Nav.Link>
              <Nav.Link href="#favorites">
                <i class="bi bi-broadcast  me-3"></i>Radio
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBarra;
