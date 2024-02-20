import wmnTop from '../images/6.jpg';
import wmnDress from '../images/3.jpg';
import { Link } from 'react-router-dom';


function Home() {
    return (
        <div className='container'>
            <section> 
              <Link to="/tops"> 
                <div> <img className="homeImgs" src={wmnTop} alt='homeImg'/> </div> 
                <div className='shopTopTxtDiv'>  <h1 className='topTxt'> Shop Tops </h1>  </div> 
             </Link>                   
            </section>
            

            <section> 
              <Link to="/dresses"> 
                <div> <img className='homeImgs' src={wmnDress} alt='homeImg'/> </div>
                <div className='shopDressesTxt'> <h1> Shop Dresses </h1> </div> 
              </Link>
            </section>
            
        </div>
    )
};

export default Home;