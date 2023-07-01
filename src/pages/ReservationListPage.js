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
      <div className="btn-reservation-list">
        <Link to="/create">
          <button>Create Service</button>
        </Link>
        
        <Link to="/myService">
          <button>Your Own Service</button>
        </Link>
      </div>

      {reservations.length === 0 
      ? (
        <div className="reservation-message">
          <h3>You haven't made any reservations yet.</h3>
          <h4>Please, make your order now.</h4>
          <Link to="/services">
            <button>Order</button>
          </Link>
        </div>
      ) : (
        reservations.map((element) => (
          <div key={element._id} className="reservation-list-page">
            <p>Total Person: {element.totalPerson}</p>
            <p>Price Per Person: {element.pricePerPerson} €</p>
            <p>Total Price: {element.totalPrice} €</p>
            <h3> Service By {element.fullName}</h3>
            <p>Date: {element.date}</p>
            <Link to={`/reservations/edit/${element._id}`}>
              <button>Edit</button>
            </Link>
            <button onClick={() => deleteReservation(element._id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
}

export default ReservationListPage;
