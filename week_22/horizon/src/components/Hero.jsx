import React from 'react'

function Hero() {
  return (
    <div>
        <div id="carouselExampleControls" className="carousel slide img-fluid" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={require('../images/1.jpg')} className="d-block w-100 img-fluid" alt="..." height="600px"/>
          </div>
        
        </div>
       
    </div>
    </div>
  )
}

export default Hero