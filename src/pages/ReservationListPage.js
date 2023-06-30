import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function ReservationListPage() {
  const API_URL = "http://localhost:5005";

  const [reservations, setReservations] = useState([]);
  
  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const storedToken = localStorage.getItem("authToken");
        const response = await axios.get(`${API_URL}/api/reservations`, { headers : { Authorization: `Bearer ${storedToken}`}});

        setReservations(response.data);
      } catch (error) {
        console.error("Failed to fetch reservations:", error);
      }
    };

    fetchReservations();
  }, []);

  console.log(reservations);

  return (
    <div>
      <Link to="/create">
        <button>Create Service</button>
      </Link>
      
      <Link to="/myService">
        <button>Your Own Service</button>
      </Link>
      {reservations.map(element => {
        return(
          <div key={element._id}>
              <h1>{element.fullName}</h1>
              {/* <h3>Service ID: {element.service._id}</h3> */}
              <p>Total Person: {element.totalPerson}</p>
              <p>Date: {element.date}</p>
          </div>
        )
      })}
    </div>
  );
}

export default ReservationListPage;
