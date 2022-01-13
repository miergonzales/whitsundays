import {Container, Col, Row} from 'react-bootstrap';
import './App.css';
import logo from './logo.png';
import man from './man.png';
import woman from './woman.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Animate }  from 'react-simple-animate';


function App() {
  return (
    <div>
      <Container fluid className='hero'>
        <div className="mt-10">
        <Row>
          <Col lg={6}>
          <img className='ml-5 mt-add' src={logo} alt='logo' />
          </Col>

          <Col className="flex-end" lg={6}>
          
          <img className='hero-people man-height' src={man} alt='logo' />
          
          <img className='hero-people woman-margin woman-height' src={woman} alt='logo' />
          </Col>
        </Row>
        </div>
      </Container>
      <Container fluid className="core">
        <Row>
          <Col className="d-flex justify-content-center ">
            <img className='ml-5 core-logo' src={logo} alt='logo' />
          </Col>
          <Col>
          <h1> Background<br/>& Audience </h1>
          <p>Tourism & Events Queensland wanted to increase consideration <br />
          of The Whitsundays amongst ‘social fun seekers’; digitally savvy <br />
          consumers that socialize substantially online. </p>

          <h2>Problem</h2>
          <p>The Whitsundays was losing its cachet as an aspirational <br/>holiday location.</p>
          
          <h2>Objective</h2>
          <p>Shift perceptions and re-build the Whitsundays’ social currency<br/> as a world-class destination. </p>
          
          </Col>
        </Row>
      </Container>
      <Container fluid className="solution">
        
      </Container>
      <Container fluid className="solution-content">
      <h1>Solution</h1>
        <Row>
          <Col lg={2}/>
          <Col lg={4}>
          <p className='text-right'>
            We knew movies rated high on the list of our target’s interests <br /> and, with incredible beaches, seaplanes, yachts and glamorous locations, the Whitsundays is the perfect setting for a movie. 
          </p>
          <p>So we invited Australians to write it:  </p>
          </Col>
          <Col>
          
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
