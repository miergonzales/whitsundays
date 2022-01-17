/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {Container, Col, Row, Button} from 'react-bootstrap';
import './App.css';
import logo from './logo.png';
import man from './man.png';
import woman from './woman.png';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark  justify-content-center bg-dark top-most">
        <div className='nav-bar-wide'>
          <div className="navbar-nav nav-border center-content">
          <Button className='btn btn-link'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-play" viewBox="0 0 16 16">
            <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
          </svg></Button>
            <a className="nav-item nav-link " href="#">Background & Challenges</a>
            <a className="nav-item nav-link " href="#">Solution</a>
            <a className="nav-item nav-link " href="#">Result & Effectiveness</a>
            <a className="nav-item nav-link " href="#">Slideshow</a>
          </div>
        </div>
        
      </nav>

      <div class="play-btn top-most">
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
            <polygon class="play-btn__svg" points="9.33 6.69 9.33 19.39 19.3 13.04 9.33 6.69"/>
            <path class="play-btn__svg" d="M26,13A13,13,0,1,1,13,0,13,13,0,0,1,26,13ZM13,2.18A10.89,10.89,0,1,0,23.84,13.06,10.89,10.89,0,0,0,13,2.18Z"/>
          </svg> 
        </a>
      </div>
      <Container fluid className='hero'>
        
        <Row className="hero-container ">
          <Col lg={12} md={12} xl={6} className=''>
          <img className='mt-add col-9' src={logo} alt='logo' />
          </Col>

          <Col lg={12} md={12} xl={6}>
          <div className='mt-add-people'>
          <img className='hero-people man-height' src={man} alt='logo' />
          
          <img className='hero-people woman-margin woman-height' src={woman} alt='logo' />
          </div>
          </Col>
        </Row>
        
      </Container>
      <Container fluid className="core d-flex ">
        <Row className="margin-center">
          <Col className="justify-content-center" lg={12}  md={12} xl={6}>
            <img className='core-logo' src={logo} alt='logo' />
          </Col>
          <Col lg={12} md={12} xl={6}>
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
            <a className="nav-item nav-link active active-nav" href="#">Video</a>
            <a className="nav-item nav-link active" href="#">Photography</a>
            <a className="nav-item nav-link active" href="#">Social</a>
            <a className="nav-item nav-link active" href="#">PR</a>
            <a className="nav-item nav-link active" href="#">Radio</a>
          </div>
        </div>
      </nav>
        <Col lg={8} className="embed-responsive embed-responsive-16by9">
        
          <iframe className="embed-responsive-item"src="https://www.youtube.com/embed/dhKEFcnU508" title="Whitsundays"></iframe>
        
        </Col>
        <Col className="" lg={3}>
          <p>
          A 60 second promotional movie trailer played on TV, online as pre rolls and via Facebook, to promote the movie that was waiting to be written to our movie-loving target audience, and encourage them to enter.
          </p>

          <Button className='btn col-11'>View Project</Button>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;
