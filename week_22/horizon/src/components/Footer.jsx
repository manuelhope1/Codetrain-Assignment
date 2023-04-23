import React from 'react'

function Footer() {
  return (
    <div>
        <div className="container-fluid backG">
        <div className="row">
            <div className="col-md-4">
                <h4>Visit Us in Ghana</h4>
                <span className="text-warning">Accra, Ghana</span>
                <p>No. 2 Feo Eyeo Street, Accra</p>
                <p>Plot No. 30 Airport Residential Area, Accra</p>
                
            </div>
            <div className="col-md-4">
                <h4>Visit Us in Nigeria</h4>
                <span className="text-warning">Abuja, Nigeria</span>
                <p>3 Adeyemo Alakija Street, Victoria Island, Lagos</p>
                <p>14B Yedseram Street, Maitama, Abuja</p>
            </div>
            <div className="col-md-4">
                <h4>Visit Us in Canada</h4>
                <span className="text-warning">Toronto, Canada</span>
                <p>100 King St W, Toronto, ON</p>
                <p>900-510 Burrard St, Vancouver, BC</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Footer