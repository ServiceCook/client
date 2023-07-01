import { useContext } from "react";
import { AuthContext } from "../context/auth.context"
import { Link } from "react-router-dom";

function NavBar() {
    const{
        isLoggedIn,
        logOutUser, 
    } = useContext(AuthContext);

    return(
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
                    <div className="btn-logout navbar">
                        <button onClick={logOutUser} >Log Out</button>
                    </div>
                </>
            )}

            {!isLoggedIn && (
                <>
                    <Link to="/signup"> <p>Sign Up</p> </Link>
                    <Link to="/login"> <p>LogIn</p> </Link>
                </>
            )}
        </nav>
    )
}

export default NavBar;
