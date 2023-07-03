import { Link } from 'react-router-dom';
import descriptionImg from '../images/Homepage.png'
// import coverImg from '../images/homepageDescription.jpg'
import pasta from '../images/Pasta.jpg'

function HomePage() {
    return (
      <div className="home-page">
        <div className='coverHomepage'>
          <img src={pasta} alt="HomePage"/>
        <div>
            <h1>Chef on the way</h1>
        </div>
        </div>

        <div className='article-home'>
        <div className='carousselHome'>
          <img src={descriptionImg} alt='descriptionImg'/>
          <div>
            <h1>Who are we ? </h1>
            <p>We make our application available for any individual looking for a home chef and for home chefs looking for customers in their area.</p>
            <Link to="/services"><h3>Look all chef →</h3></Link>
          </div>
        </div>
      </div>
    </div>
    );
  }
  
  export default HomePage;
  