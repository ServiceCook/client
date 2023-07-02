import { Link } from 'react-router-dom';
import coverImg from '../images/Homepage.png'
import descriptionImg from '../images/homepageDescription.jpg'
function HomePage() {
    return (
      <div className="home-page">

        <div>
          <img src={coverImg} alt="HomePage"/>
            <h1>Name of Applicatation</h1>
            <p></p>
        </div>

        <div>
          <img src={descriptionImg} alt='descriptionImg'/>
          <div>
            <h1>Who are we ? </h1>
            <p>We make our application available for any individual looking for a home chef and for home chefs looking for customers in their area.</p>
            <Link to="/services">Look all chef </Link>
          </div>
        </div>
      </div>
    );
  }
  
  export default HomePage;
  