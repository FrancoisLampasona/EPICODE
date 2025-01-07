import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Button,
  Image,
} from "react-bootstrap";
import LogoNetflix from "../../public/assets/img/netflix_logo.png";
import AvatarIcon from "../../public/assets/img/avatar.png";

const NavBar = () => {
  return (
    <Navbar expand="lg" bg="black" variant="dark" className="py-3">
      <Container fluid>
        <Navbar.Brand href="home" className="ms-4">
          <Image src={LogoNetflix} width="130" alt="Logo Netflix" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto">
            <Nav.Link href="home" className="text-white">
              Home
            </Nav.Link>
            <Nav.Link href="home" className="text-white">
              Tv Shows
            </Nav.Link>
            <Nav.Link href="home" className="text-white">
              Movies
            </Nav.Link>
            <Nav.Link href="home" className="text-white">
              Recently Added
            </Nav.Link>
            <Nav.Link href="home" className="text-white">
              Other Option
            </Nav.Link>
          </Nav>
          <div className="d-flex align-items-center me-5">
            <NavDropdown
              title={
                <Button variant="link" className="p-0">
                  <Image
                    src={AvatarIcon}
                    width="40"
                    alt="Avatar Icon"
                    roundedCircle
                  />
                </Button>
              }
              id="user-dropdown"
              align="end"
              menuVariant="dark"
            >
              <NavDropdown.Item href="profilepage" className="text-white">
                <Image
                  src={AvatarIcon}
                  width="30"
                  alt="Avatar"
                  className="me-2"
                />
                <span id="nickname">Users</span>
              </NavDropdown.Item>
              <NavDropdown.Item href="profilepage" className="text-white">
                Manage Profiles
              </NavDropdown.Item>
              <NavDropdown.Item href="accountpage" className="text-white">
                Account
              </NavDropdown.Item>
            </NavDropdown>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
