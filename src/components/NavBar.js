import { useContext } from "react";
import { AuthContext } from "../context/auth.context"
import { Link } from "react-router-dom";

function NavBar() {
    const{
        isLogin,
        user,
        logOutUser, 
    } = useContext(AuthContext)

    return(
        <nav>
            <Link to="/">
                <p>HomePage</p>
            </Link>

            <Link to="/services">
                <p>List of Service</p>
            </Link>

            {isLogin && (
                <>
                    <Link to="/profil">
                        <p>Profil</p>
                    </Link>
                    <button onClick={logOutUser}>Log Out</button>
                    <span>{user.name}</span>
                </>
            )}

            {!isLogin && (
                <>
                    <Link to="/signup"> <p>Sign Up</p> </Link>
                    <Link to="/login"> <p>LogIn</p> </Link>
                </>
            )}
        </nav>
    )
}

export default NavBar
