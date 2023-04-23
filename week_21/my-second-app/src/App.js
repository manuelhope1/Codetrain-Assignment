import logo from './dress.jpg';
import './App.css';
    

function App() {
  return (
    

    <div className="App">
     <div className='Cont'>

      <div className='Image'>
        <img src={logo} className='Img' />
      </div>
      <div className='Info'>
      <h3 className='Head'>Fashion</h3>
      <h2 className='Nba'>NBA On The Rebound Lakers Sweatpants</h2>
      <em className='Color'>Yellow</em>
      <p className='Para'>Show off your Lakers pride in comfort with our yellow NBA Lakers
        sweatpants! These cozy pants feature the iconic Lakers logo and branding,
        a drawstring waistbrand amd elastic cuffs for a secure fit.
      </p>
      <h1 className='Price'>$10.98</h1>
      <button className='Buy'>Add to Cart<i class='bx bxs-cart' id='Cart' > </i></button>
      </div>
      
     </div>
    </div>
  );
}

export default App;
