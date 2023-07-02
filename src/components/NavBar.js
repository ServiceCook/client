import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Link } from "react-router-dom";

function NavBar() {
  const { isLoggedIn, logOutUser } = useContext(AuthContext);

  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="navbar">
          <h3>HOME</h3>
        </Link>

        <Link to="/services" className="navbar">
          <h3>LIST OF SERVICE</h3>
        </Link>

        {isLoggedIn && (
          <>
            <Link to="/profile">
              <h3>PROFILE</h3>
            </Link>
          </>
        )}

        {/* {!isLoggedIn && (
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
        )} */}
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
