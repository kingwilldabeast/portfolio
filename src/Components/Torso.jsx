
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Stack } from 'react-bootstrap';
import { Button, Form, Accordion, Carousel } from 'react-bootstrap';
import mockupB from '../assets/mockup-B.png';
import yahtzeeImage from '../assets/yahtzee-mockup.png'
import pizzaImage from '../assets/pizza.png'
import headshot from '../assets/headshot.jpg'

export default function Torso() {
    
    return (
        <div className='torso'>
            <div className='about-container'>
                <img src={headshot} 
                style={{ width: '200px', borderRadius: '50%' }}

                />
                <div className='about-title'>
                    {/* About Me: */}
                </div>
                <div className='about-content'>
                    I am a full stack developer with 3+ 
                    years' experience in frontend design 
                    including React, Bootstrap, and JavaScript. 
                    I am also familar with backend databases 
                    such as Python, Django, and Mongoose. 
                    I have an eye for sleek and user-friendly layouts.
                    In my spare time I enjoy improv comedy, playing the 
                    piano, and exploring the beautiful hiking 
                    trails in Austin, Texas. 
                </div>
            </div>
            
            
            <div className='projects-container'>
                <p className='label'>Projects</p>
                    {/* <img src= {mockupB} className= 'project-image' text="First slide" /> */}
                {/* <Carousel.Item className='' interval={90000}> */}

                <Carousel interval={5000} pause={false} wrap={true}>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src= {mockupB}
          alt="First slide"
        />
        <Carousel.Caption className="carousel-caption-custom">
          <h3>Harry Potter API</h3>
          <a 
            href="https://harry-potter-api.surge.sh" 
            target="_blank" 
            rel="noopener noreferrer" 
          >
            harry-potter-api.surge.sh
          </a>
          <p>Whimsical interface allows a user to view details regarding Harry Potter books, movies, characters</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src= {yahtzeeImage}
          alt="Second slide"
        />
        <Carousel.Caption className="carousel-caption-custom">
          <h3>Yahtzee</h3>
          <a 
            href="https://yahtzee-colorful.surge.sh/" 
            target="_blank" 
            rel="noopener noreferrer" 
          >
            yahtzee-colorful.surge.sh
          </a>
          <p>Simple yet elegant browser-based game allows a user to roll dice, select patterns, and view their score</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src= {pizzaImage}
          alt="Third slide"
        />
        <Carousel.Caption className="carousel-caption-custom">
          <h3>Bernoulli's Pizza</h3>
          <p>Elegant design allows a user to build and order a pizza</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            </div>
        </div>
    )
}