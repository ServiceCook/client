import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Link } from "react-router-dom";
import logo from '../images/logo.svg'
function NavBar() {
  const { isLoggedIn, logOutUser } = useContext(AuthContext);

  return (
    <div>
      <nav>
          <Link to="/" >
            <img className="logo" src={logo} alt="logo"/> 
          </Link>

          <Link to="/services" >
            <p>Our chefs</p>
          </Link>
       

        {isLoggedIn && (
          <>
            <Link to="/profile">
              <p>Profile</p>
            </Link>
            <Link to="/message">
              <p>Contact Us</p>
            </Link>
          </>
        )}
      <div className="navbarAuth">
        {!isLoggedIn && (
          <>
            <div className='signup-login'>
              <Link to="/signup">
                {" "}
                <p>Sign Up</p>{" "}
              </Link>
              <Link to="/login">
                {" "}
                <p>LogIn</p>{" "}
              </Link>
            </div>
          </>
        )}

        
      {isLoggedIn && (
          <>
            <div className="btn-logout navbar">
              <p onClick={logOutUser}>Log Out</p>
            </div>
          </>
        )}
      </div>
      
      </nav>


    </div>
  );
}

export default NavBar;
