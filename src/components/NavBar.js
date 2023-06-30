import { useContext } from "react";
import { AuthContext } from "../context/auth.context"
import { Link } from "react-router-dom";

function NavBar() {
    const{
        isLoggedIn,
        logOutUser, 
    } = useContext(AuthContext)

    return(
        <nav className="navbar">
            <Link to="/">
                <p>Home Page</p>
            </Link>

            <Link to="/services">
                <p>List of Service</p>
            </Link>

            {isLoggedIn && (
                <>
                    <Link to="/profile">
                        <p>Profile</p>
                    </Link>
                    <button onClick={logOutUser}>Log Out</button>
                    {/* <span>{user.name}</span> */}
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

export default NavBar
