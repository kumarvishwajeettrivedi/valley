import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, Carousel, Navbar, Nav, NavDropdown, Container, Row, Col, Card } from 'react-bootstrap';
import './Main.css';

const App = () => {
  return (
    <div>
      <title>Valley Eduventures</title>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossOrigin="anonymous"
      />
      <link rel="stylesheet" href="style.css" />
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <Navbar bg="light blue" expand="lg" className="justify-content-right navi ">
      <Container>
        <Navbar.Brand href="/home">
          <h1>Valley Eduventures</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNavDropdown" />
        <Navbar.Collapse id="navbarNavDropdown">
          <Nav className="mr-auto navii">
            <Nav.Link href="/home">Home</Nav.Link>
            <NavDropdown title="Contact" id="contactDropdown">
              <NavDropdown.Item href="#">Mail</NavDropdown.Item>
              <NavDropdown.Item href="#">LinkedIn</NavDropdown.Item>
              <NavDropdown.Item href="#">Facebook</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Discuss" id="discussDropdown">
              <NavDropdown.Item href="#">A</NavDropdown.Item>
              <NavDropdown.Item href="#">B</NavDropdown.Item>
              <NavDropdown.Item href="#">C</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Support" id="supportDropdown">
              <NavDropdown.Item href="#">A</NavDropdown.Item>
              <NavDropdown.Item href="#">B</NavDropdown.Item>
              <NavDropdown.Item href="#">C</NavDropdown.Item>
              <NavDropdown.Item href="#">D</NavDropdown.Item>
              <NavDropdown.Item href="#">E</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link className='login' href="#">
              Sign in/Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    
      <div className="img">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://digitallearning.eletsonline.com/wp-content/uploads/2017/07/DE.jpg"
              alt="First slide"
              height={530}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://digitallearning.eletsonline.com/wp-content/uploads/2017/07/DE.jpg"
              alt="Second slide"
              height={530}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://digitallearning.eletsonline.com/wp-content/uploads/2017/07/DE.jpg"
              alt="Third slide"
              height={530}
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="contex">
        <big>ABOUT US</big>
        <div className="about">
          <div className="schools ele">
            <span className="ol">Schools</span>
            <hr />
            <p className='ol-desc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto neque eum dolorum.</p>
            
          </div>
          <div className="community ele">
            <span className="ol">Community</span>
            <hr />
            <p className='ol-desc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto neque eum dolorum.</p>
          </div>
          <div className="locations ele">
            <span className="ol">Locations</span>
            <hr />
            <p className='ol-desc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto neque eum dolorum.</p>
          </div>
        </div>
      </div>
      {/* Experimental Section */}
      <section className="wrapper">
        <Container>
          <div className="cardtitle">
          <big>Featured</big>
          </div>
          <Row>
            <Col xs={12} sm={4}>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://digitallearning.eletsonline.com/wp-content/uploads/2017/07/DE.jpg"
                />
                <Card.Body>
                  <Card.Title>Recent Event</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error possimus iste voluptatem.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} sm={4}>
            <Card>
              <Card.Img
                variant="top"
                src="https://digitallearning.eletsonline.com/wp-content/uploads/2017/07/DE.jpg"
              />
              <Card.Body>
                <Card.Title>Recent Event</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error possimus iste voluptatem.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={4}>
          <Card>
            <Card.Img
              variant="top"
              src="https://digitallearning.eletsonline.com/wp-content/uploads/2017/07/DE.jpg"
            />
            <Card.Body>
              <Card.Title>Recent Event</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error possimus iste voluptatem.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
            
          </Row>

        </Container>
      </section>
      {/* Last Section */}
      <footer>
        <div className="foot">
          <div className="links">
            <ul className="link">
              <li className="lio">
                <h2>Valley Eduventures</h2>
              </li>
              <li className="lio">
                <a href="ValleyEduventure@gmail.com" className="href">
                  ValleyEduventure@gmail.com
                </a>
              </li>
              <li className="lio">99xxxxxxxxx</li>
              <li className="lio">920xxxxxxxx</li>
            </ul>
          </div>
          <div className="copyright">
            <ul>
              <li className="moto">Educating For Better Tomorrow</li>
              <li>&copy; All Rights Reserved</li>
            </ul>
          </div>
          <div className="footer-social-icons">
            <img
              src="https://i.pinimg.com/originals/0a/1e/6f/0a1e6f9872388e41f03f6886654a8235.png"
              alt=""
              className="insta"
            />
            <img
              src="https://ongpng.com/wp-content/uploads/2023/09/twitter-x-logo.png"
              alt=""
              className="twitter"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv3sP5E9aRSzIFhWWZISUy1UYxpgoDr4gAqUjabFL1Rw&s"
              alt=""
              className="insta"
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
