import axios from "axios";
import { useEffect, useState } from "react";
import MyServiceCard from '../components/MyServiceList'
import { Link } from "react-router-dom";
import IsPrivate from "../components/IsPrivate";

function MyServicePage(props) {
  const API_URL = "http://localhost:5005";
  const [myServices, setMyServices] = useState(undefined);

  const getAllMyServices = () => {
    const storeToken = localStorage.getItem("authToken");

    axios
      .get(`${API_URL}/api/myService`, {
        headers: { Authorization: `Bearer ${storeToken}` },
      })
      .then((result) => {
        console.log(result.data);
        setMyServices(result.data);
      })
      .catch((e) => console.log(e));
  };

  const deleteService = (serviceId) => {
    const storeToken = localStorage.getItem("authToken");

    axios
      .delete(`${API_URL}/api/services/${serviceId}`, {
        headers: { Authorization: `Bearer ${storeToken}` },
      })
      .then(() => {
        getAllMyServices();
      })
      .catch((error) => {
        console.log("Failed to delete service:", error);
      });
  };

  useEffect(() => {
    getAllMyServices();
  }, []);

  if (myServices === undefined) {
    return <h1>Loading .....</h1>;
  } else {
    return (
      <div>
        <div className="btn-reservation-list">
          <Link to="/create">
            <button>Create Service</button>
          </Link>

          <Link to="/reservations">
            <button>Your Order</button>
          </Link>
        </div>
        {myServices.length === 0 ? (
          <div className="reservation-message">
            <h3>You haven't made any service yet.</h3>
            <h4>Please, make your service now.</h4>
          </div>
        ) : (
          <>
          <h1 className="my-own-service">My Own Service</h1>
          <div className="list-of-services">
            {myServices.map((service) => {
              return (

                <div>
                  <MyServiceCard key={service._id} {...service} deleteService={deleteService} />
                </div>
              );
            })}
          </div>
          </>
        )}
      </div>
      
    );
  }
}

export default MyServicePage;
