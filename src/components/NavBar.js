import { useContext, useState } from "react";
import { AuthContext } from "../context/auth.context";
import { Link } from "react-router-dom";
import logo from '../images/logo.svg'
function NavBar() {

  const  [isLoggedIn, logOutUser] = useContext(AuthContext);
  const [showLink, setShowLink] = useState(false)

 const handleShowLinks = () => {
    setShowLink(!showLink);
  }
  console.log(showLink);
  return (
    <div>
      {/* <nav>
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

      <button className="navbar-burger">
          <span className="burger-bar"></span>
      </button>
      
      </nav> */}

      <nav className={`${showLink ? "showNav" : "hide-nav"}`}>
        <div>
          <ul>
            <Link to='/'>
              <img className="logo" src={logo} alt="logo"/>
            </Link>

            <Link to="/services">
              <li>Our chefs</li>
            </Link>


            {isLoggedIn && (
            <> 
                <Link to="/profile">
                  <li>Profile</li>
                </Link>
                <Link to="/message">
                  <li>Contact Us</li>
                </Link>

              <div className="btn-logout navbar">
                <Link>
                  <li onClick={logOutUser}>Log Out</li>
                </Link>
              </div>
            </>
            )}


            {!isLoggedIn && (
            <div className="navbarAuth navbar">
            
              <Link to="/signup">
                <li>Sign Up</li>
              </Link>
              <Link to="/login">
                <li>Log In</li>
              </Link>
            </div>
            )}
          </ul>
        </div>
        <button className="navbar-burger" onClick={handleShowLinks}>
          <span className="burger-bar"></span>
        </button>
      </nav>


    </div>
  );
}

export default NavBar;
