import { useContext } from "react";
import { AuthContext } from "../context/auth.context"
import { Link } from "react-router-dom";

function ProfilePage() {
  const{
    isLogin,
    user,
} = useContext(AuthContext)

  return(
    <div className="profile">
      <div>
        {isLogin && <h1>Welcome <span>{user.name}</span></h1>}
      </div>

      <Link to="/create">
        <button>Create Service</button>
      </Link>

      <Link to="/reservations">
        <button>Your Order</button>
      </Link>

      <Link to="#">
        <button>Your Own Service</button>
      </Link>
     
      
    </div>
  )
}

export default ProfilePage;