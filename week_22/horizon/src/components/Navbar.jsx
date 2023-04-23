import React from 'react'
import logo from '../images/logo.png'


function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href=""><img src={logo} alt="" width="50px" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#"><img src="https://vectorflags.s3.amazonaws.com/flags/us-square-01.png" alt="" width="30px" height="20px"/></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><img src="https://cdn.britannica.com/54/5054-004-A09ABCDF/Flag-Ghana.jpg" alt="" width="30px" height="20px" /></a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_Nigeria.svg/800px-Flag_of_Nigeria.svg.png" alt="" width="30px" height="20px" /></a>
            </li>
          </ul>
          <div>
            <a href="About Us" className='About'>About Us</a>
          </div>
        </div>
    </nav>
    </div>
  )
}

export default Navbar