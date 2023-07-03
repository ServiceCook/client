import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Link } from "react-router-dom";

function NavBar() {
  const { isLoggedIn, logOutUser } = useContext(AuthContext);

  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="">
          <p>Home</p>
        </Link>

        <Link to="/services" className="">
          <p>Our chefs</p>
        </Link>

        {isLoggedIn && (
          <>
            <Link to="/profile">
              <p>Profile</p>
            </Link>
          </>
        )}
      <div className="navbarAuth">
        {!isLoggedIn && (
          <>
            <Link to="/signup">
              {" "}
              <p>Sign Up</p>{" "}
            </Link>
            <Link to="/login">
              {" "}
              <p>LogIn</p>{" "}
            </Link>
          </>
        )}

        
      {isLoggedIn && (
          <>
            <div className="btn-logout navbar">
              <button onClick={logOutUser}>Log Out</button>
            </div>
          </>
        )}
      </div>
      </nav>


    </div>
  );
}

export default NavBar;
