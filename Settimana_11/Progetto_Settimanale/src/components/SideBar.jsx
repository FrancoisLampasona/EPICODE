import React from "react";
import Nav from "react-bootstrap/Nav";
import appleLogo from "../assets/logos/apple.svg";
import SearchBar from "./singleComponent/SearchBar";
import Container from "react-bootstrap/esm/Container";

const SideBar = () => {
  return (
    <div
      className="vh-100 ps-4 pt-5"
      style={{
        width: "250px",
        position: "fixed",
        top: 0,
        left: 0,
        backgroundColor: "rgba(210, 210, 210, 0.82)",
      }}
    >
      <div className="d-flex">
        <img
          src={appleLogo}
          alt="Apple Music Logo"
          style={{ width: "30px", height: "30px", marginRight: "5px" }}
          className="ps-1 ms-3"
        />
        <h3 className="mb-4 ps-3">Music</h3>
      </div>

      <Nav className="flex-column fs-5">
        <Container
          fluid
          href="#Search"
          className="text-dark text-decoration-none mb-3 ps-0 pe-4"
        >
          <SearchBar></SearchBar>
        </Container>
        <Nav.Link href="#home" className="text-dark text-decoration-none mb-3">
          <i className="bi bi-house me-3"></i>Home
        </Nav.Link>
        <Nav.Link
          href="#new-releases"
          className="text-dark text-decoration-none mb-3"
        >
          <i className="bi bi-ui-radios-grid me-3"></i>Novità
        </Nav.Link>
        <Nav.Link
          href="#favorites"
          className="text-dark text-decoration-none mb-3"
        >
          <i className="bi bi-broadcast me-3"></i>Radio
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default SideBar;
