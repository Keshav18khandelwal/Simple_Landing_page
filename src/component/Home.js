import React from 'react'
import pic1 from './images/pic1.jpg';
import pic20 from './images/pic20.jpg';
import pic18 from './images/pic18.jpg';
import Fade from 'react-reveal/Fade'

export default function
  () {
  return (<>
    <div className='' id="home">
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={pic1} className="d-block" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <Fade bottom>
              <h5>First slide label</h5>
              
              </Fade>
              <Fade top>
              <p>Some representative placeholder content for the first slide.</p>
              </Fade>
              
            </div>
          </div>
          <div className="carousel-item">
            <img src={pic20} className="d-block" alt="..." />
            <div className="carousel-caption d-none d-md-block">
            <Fade bottom>
              <h5>First slide label</h5>
              
              </Fade>
              <Fade top>
              <p>Some representative placeholder content for the first slide.</p>
              </Fade>
            </div>
          </div>
          <div className="carousel-item">
            <img src={pic18} className="d-block " alt="..." />
            <div className="carousel-caption d-none d-md-block">
            <Fade bottom>
              <h5>First slide label</h5>
              
              </Fade>
              <Fade top>
              <p>Some representative placeholder content for the first slide.</p>
              </Fade>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      
    </div>
  </>
  )
}
