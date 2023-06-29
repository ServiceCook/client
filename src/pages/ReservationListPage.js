import axios from "axios";
import { useEffect, useState } from "react";

function ReservationListPage() {
  const API_URL = "http://localhost:5005";

  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/reservations`);

        setReservations(response.data);
      } catch (error) {
        console.error("Failed to fetch reservations:", error);
      }
    };

    fetchReservations();
  }, []);

  return (
    <div>
      <h1>Reservation List</h1>
      {reservations.length === 0 ? (
        <p>No reservations found.</p>
      ) : (
        <ul>
          {reservations.map((reservation) => (
            <li key={reservation._id}>
              <p>Service ID: {reservation.service}</p>
              <p>Total Person: {reservation.totalPerson}</p>
              <p>Date: {reservation.date}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ReservationListPage;
