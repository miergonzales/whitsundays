import {Container, Col, Row} from 'react-bootstrap';
import './App.css';
import logo from './logo.png';
import man from './man.png';
import woman from './woman.png';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <Container fluid className='hero'>
        
        <Row className="hero-container">
          <Col className="col-xs-12 col-md-6">
          <img className='mt-add' src={logo} alt='logo' />
          </Col>

          <Col className="flex-end col-xs-12 col-md-6">
          <div className='mt-add-people'>
          <img className='hero-people man-height' src={man} alt='logo' />
          
          <img className='hero-people woman-margin woman-height' src={woman} alt='logo' />
          </div>
          </Col>
        </Row>
        
      </Container>
      <Container fluid className="core">
        <Row className="margin-center">
          <Col className="d-flex justify-content-center" lg={12}  md={12} xl={6}>
            <img className=' core-logo' src={logo} alt='logo' />
          </Col>
          <Col  lg={12} md={12} xl={6}>
          <h1> Background<br/>& Audience </h1>
          <p>Tourism & Events Queensland wanted to increase consideration 
          of The Whitsundays amongst ‘social fun seekers’; digitally savvy <br />
          consumers that socialize substantially online. </p>

          <h2>Problem</h2>
          <p>The Whitsundays was losing its cachet as an aspirational <br/>holiday location.</p>
          
          <h2>Objective</h2>
          <p>Shift perceptions and re-build the Whitsundays’ social currency<br/> as a world-class destination. </p>
          
          </Col>
        </Row>
      </Container>
      
      
      <Container fluid className="solution-content d-flex align-items-center">
      
        <Row className="margin-center">
        <h1>Solution</h1>
          <Col lg={6}>
          <p >
            We knew movies rated high on the list of our target’s interests <br /> and, with incredible beaches, seaplanes, yachts and glamorous locations, the Whitsundays is the perfect setting for a movie. 
          </p>
          <p>So we invited Australians to write it:  </p>

          <h3>The Whitsundays.<br/> A movie that's waiting to be written.</h3>
          <p>We enlisted world-renowned screenwriter Craig Pearce as Script Supervisor. Then for 20 days we posted a daily storyboard image on Facebook and Instagram, inviting the public to write scenes for a chance to win a $10,000 luxury holiday.</p>
          </Col>
          <Col lg={6}>
            <p>The campaign launched with a trailer, radio and online advertising. <br />

                We reacted to the storyline as it developed, selecting and treating images according to the previous winning scene.<br />

                Each scene written and shared became a compelling “ad” for the Whitsundays. <br />

                Together, a Hollywood screenwriter and the Australian public had created the world’s first crowd-sourced movie storyboard and a story universe with millions of possible permutations.<br /> 
            </p>
          </Col>
        </Row>
      </Container>
      <Container fluid className="footer">
      
      <Row className="margin-center">
      <nav className="navbar navbar-expand-lg navbar-dark  justify-content-center">
        
        
        <div>
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#">Video</a>
            <a className="nav-item nav-link active" href="#">Photography</a>
            <a className="nav-item nav-link active" href="#">Social</a>
            <a className="nav-item nav-link active" href="#">PR</a>
            <a className="nav-item nav-link active" href="#">Radio</a>
          </div>
        </div>
      </nav>
        <Col lg={6}>
        <p >
          We knew movies rated high on the list of our target’s interests <br /> and, with incredible beaches, seaplanes, yachts and glamorous locations, the Whitsundays is the perfect setting for a movie. 
        </p>
        <p>So we invited Australians to write it:  </p>

        <h3>The Whitsundays.<br/> A movie that's waiting to be written.</h3>
        <p>We enlisted world-renowned screenwriter Craig Pearce as Script Supervisor. Then for 20 days we posted a daily storyboard image on Facebook and Instagram, inviting the public to write scenes for a chance to win a $10,000 luxury holiday.</p>
        </Col>
        <Col lg={6}>
          <p>The campaign launched with a trailer, radio and online advertising. <br />

              We reacted to the storyline as it developed, selecting and treating images according to the previous winning scene.<br />

              Each scene written and shared became a compelling “ad” for the Whitsundays. <br />

              Together, a Hollywood screenwriter and the Australian public had created the world’s first crowd-sourced movie storyboard and a story universe with millions of possible permutations.<br /> 
          </p>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;
