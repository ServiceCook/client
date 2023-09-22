import { Link } from 'react-router-dom';
import descriptionImg from '../images/Homepage.png'
import pasta from '../images/Pasta-copy.jpg'
import logo from '../images/logo.svg'

function HomePage() {

    return (
      <div className="home-page">
        <div className='coverHomepage'>
          <img src={pasta} alt="HomePage"/>
        <div>
            <img className='logo-home' src={logo} alt='logo-homepage'/>
        </div>
        </div>

        <div className='article-home'>
        <div className='carousselHome'>
          <img src={descriptionImg} alt='descriptionImg' className='img-description'/>
          <div>
            <h1 className='who-are-we-text'>Who are we ? </h1>
            <p className='description-who-are-we'>We make our application available for any individual looking for a home chef and for home chefs looking for customers in their area.</p>
            <Link to="/services"><h3 className='look-all-chef-text'>Look all chef →</h3></Link>
          </div>
        </div>
      </div>
    </div>
    );
  }
  
  export default HomePage;
  