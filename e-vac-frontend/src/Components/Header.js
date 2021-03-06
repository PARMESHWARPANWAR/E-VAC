import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import "./header.css";
import { UserContext } from "../App";


const Header = () => {
  const { state, dispatch } = useContext(UserContext);
  if (state) {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Link to="/">
              <Navbar.Brand>
                <img
                  alt=""
                  src={logo}
                  width="120"
                  height="60"
                  className="d-inline-block align-top"
                />{" "}
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown title="Hospitals" id="collasible-nav-dropdown">
                  <NavDropdown.Item as={Link} to={"/nearby"}>
                    Near-By Hospitals
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to={"/search"}>
                    Search Hospitals
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to={"/about"}>
                  About us
                </Nav.Link>
                <Nav.Link as={Link} to={"/help"}>
                  Help
                </Nav.Link>
              </Nav>
              <Nav>
                <Button variant="danger">
                  <NavDropdown title="Emergency" id="collasible-nav-dropdown">
                    <NavDropdown.Item as={Link} to={"/user/ambulance"}>
                      Accident
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={"/user/ambulance"}>
                      Heart Attack
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={"/user/ambulance"}>
                      pregnancy
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      others
                    </NavDropdown.Item>
                  </NavDropdown>
                </Button>
              </Nav>
              <Nav>
                <Nav.Link as={Link} to={"/logout"}>
                  Logout
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
  else {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Link to="/">
              <Navbar.Brand>
                <img
                  alt=""
                  src={logo}
                  width="120"
                  height="60"
                  className="d-inline-block align-top"
                />{" "}
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown title="Hospitals" id="collasible-nav-dropdown">
                  <NavDropdown.Item as={Link} to={"/nearby"}>
                    Near-By Hospitals
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to={"/search"}>
                    Search Hospitals
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to={"/about"}>
                  About us
                </Nav.Link>
                <Nav.Link as={Link} to={"/help"}>
                  Help
                </Nav.Link>
              </Nav>
              <Nav>
                <Button variant="danger">
                  <NavDropdown title="Emergency" id="collasible-nav-dropdown">
                    <NavDropdown.Item as={Link} to={"/user/ambulance"}>
                      Accident
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={"/user/ambulance"}>
                      Heart Attack
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={"/user/ambulance"}>
                      pregnancy
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      others
                    </NavDropdown.Item>
                  </NavDropdown>
                </Button>
              </Nav>
              <Nav>
                <Nav.Link as={Link} to={"/login"}>
                  Login
                </Nav.Link>
              </Nav>

            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
};

export default Header;
