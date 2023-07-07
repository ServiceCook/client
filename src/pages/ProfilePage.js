import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth.context";
import { Link } from "react-router-dom";
import axios from "axios";

function ProfilePage() {

  const API_URL = process.env.REACT_APP_SERVER_URL; 
  const { isLoggedIn, user } = useContext(AuthContext);
  const[profile, setProfile] = useState("");
  const storedToken = localStorage.getItem("authToken");

  const fetchingProfile = () => {
    axios.get(`${API_URL}/auth/profile`, { headers : { Authorization: `Bearer ${storedToken}`}})
      .then(response => {
        console.log(response.data._id, "give this data")
        setProfile(response.data)
      })
      .catch(e => console.log("failed fetching data"));
  }

  useEffect(() => {
    fetchingProfile();
  }, []);
  

  return(
    <div>
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

        <Link to="/mywork">
          <button>My Work</button>
        </Link>
      </div>

      <div className="profile">
        {isLoggedIn && user && (
          <div>
            <h1>Welcome {profile.name}</h1>
            <div>
              <img src={profile.picture} alt="img" className="profile-picture"/>
            </div>
            <h3>Address: {profile.address}</h3>
            <p>Email: {profile.email}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfilePage;
