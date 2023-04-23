
import './App.css';
import Avatar from './avatar.webp';
import Shazam from './shazam.webp';

function App() {
  return (
    <>
      <div className="info">
        <h1 className='head'>MY FAVOURITE MOVIES</h1>
      </div>
      <div className='moviebox'>
        <img src={Avatar} id="mimg" />
        <div style={{paddingLeft: "20px",width:"400px"}}>
          <h1 style={{color:"r",paddingTop:"0",}}>Avatar</h1>
          <p>"Avatar" is a 2009 sci-fi movie about a disabled ex-marine sent to control an "Avatar" 
            on the planet Pandora to mine a valuable mineral. He falls in love with a Na'vi woman and 
            becomes conflicted as tensions escalate between humans and Na'vi</p>
        </div>

      </div>

      <div className='moviebox' style={{marginTop:"20px"}}>
        <img src={Shazam} id="mimg" />
        <div style={{paddingLeft: "20px",width:"400px"}}>
          <h1 style={{color:"r",paddingTop:"0",}}>Shazam</h1>
          <p>"Shazam!" is a 2019 superhero movie about a foster kid named Billy Batson who gains 
            the ability to transform into an adult superhero named Shazam by saying the word "Shazam!" 
            He must use his powers to fight the evil Dr. Thaddeus Sivana.</p>
        </div>

      </div>
    </>
  );
}

export default App;
