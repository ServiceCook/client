import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function ReservationListPage() {
  const API_URL = "http://localhost:5005";

  const [reservations, setReservations] = useState([]);
  const storedToken = localStorage.getItem("authToken");
  
  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/reservations`, { headers : { Authorization: `Bearer ${storedToken}`}});

        setReservations(response.data);
      } catch (error) {
        console.error("Failed to fetch reservations:", error);
      }
    };

    fetchReservations();
  }, []);

  const deleteReservation = (reservationId) => {
    axios
      .delete(`${API_URL}/api/reservations/${reservationId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then(() => {
        // Remove the deleted reservation from the state
        setReservations((prevReservations) =>
          prevReservations.filter((reservation) => reservation._id !== reservationId)
        );
      })
      .catch((error) => {
        console.log("Failed to delete reservation:", error);
      });
  };

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
              <p>Total Person: {element.totalPerson}</p>
              <p>Price Per Person : {element.pricePerPerson} €</p>
              <p>Total Price: {element.totalPrice} €</p>
              <p>Date: {element.date}</p>
              <Link to={`/reservations/edit/${element._id}`}>
                <button>Edit</button>
              </Link>
              <button onClick={() => deleteReservation(element._id)}>Delete</button>
              
          </div>
        )
      })}
    </div>
  );
}

export default ReservationListPage;
