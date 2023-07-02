import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Link } from "react-router-dom";

function NavBar() {
  const { isLoggedIn, logOutUser } = useContext(AuthContext);

  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="navbar">
          <p>Home</p>
        </Link>

        <Link to="/services" className="navbar">
          <p>List of Service</p>
        </Link>

        {isLoggedIn && (
          <>
            <Link to="/profile">
              <p>Profile</p>
            </Link>
          </>
        )}

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
      </nav>

      {/* <div>
      {isLoggedIn && (
          <>
            <div className="btn-logout navbar">
              <button onClick={logOutUser}>Log Out</button>
            </div>
          </>
        )}
      </div> */}
    </div>
  );
}

export default NavBar;
