import { useContext } from "react";
import { AuthContext } from "../context/auth.context"
import { Link } from "react-router-dom";

function ProfilePage() {
  const{
    isLoggedIn,
    user,
    logOutUser 
} = useContext(AuthContext)

  return(
    <div className="profilPage">
      <div className="btn-reservation-list">
        <Link to="/create">
          <button>Create Service</button>
        </Link>

        <Link to="/reservations">
          <button>Your Order</button>
        </Link>

        <Link to="/myService">
          <button>Your Own Service</button>
        </Link>
      </div>

      <div className="profile">
        {isLoggedIn && <h1>Welcome <span>{user.name}</span></h1>}
      </div>
      
    </div>
  )
}

export default ProfilePage;