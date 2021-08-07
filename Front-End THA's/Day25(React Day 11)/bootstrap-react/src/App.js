import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Nav,
  Navbar,
  Container,
  NavDropdown,
  Button,
  Card,
  Alert,
} from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import VeriCarousel from "./VeriCarousel";
function App() {
  const [isDisabled, setDisabled] = useState(false);
  const [isAlert, setAlert] = useState(false);

  return (
    <div className="App">
      <Router>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">
                  Main
                </Nav.Link>

                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  
                  <NavDropdown.Item as={Link} to="/Carousel">
                    {" "}
                    Carousel
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/About">
                    {" "}
                    About
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Switch>
          <Route exact path="/">
            Welcome to bootstrap components Select a component from dropdown
            list
          </Route>
          <Route exact path="/Toast">
            <div>Click to toggle a toast</div>
            <>
              <Button
                variant="primary"
                size="lg"
                active
                onClick={() => setDisabled(!isDisabled)}
              >
                Toggle Toast
              </Button>{" "}
            </>
          </Route>
          <Route path="/Carousel">
            <VeriCarousel></VeriCarousel>
          </Route>
          <Route path="/about">
            {isAlert ? (
              <Alert
                variant="danger"
                onClose={() => setAlert(false)}
                dismissible
              >
                <Alert.Heading>:( Your Pc Encountered an error</Alert.Heading>
              </Alert>
            ) : (
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://i.pinimg.com/originals/6e/cb/2a/6ecb2abced73e345736baaf114412f9d.gif
              "
                />
                <Card.Body>
                  <Button variant="primary" onClick={() => setAlert(true)}>
                    Click to show alert
                  </Button>
                </Card.Body>
              </Card>
            )}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
