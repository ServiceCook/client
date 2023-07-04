import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditReservationPage(props) {
  const API_URL = process.env.REACT_APP_SERVER_URL
  
  const { reservationId } = useParams();
  
  const navigate = useNavigate();

  const[fullName, setFullName] = useState("");
  const[totalPerson, setTotalPerson] = useState("");
  const[pricePerPerson, setPricePerPerson] = useState("");
  const[totalPrice, setTotalPrice] = useState("");
  const[date, setDate] = useState("");

  const storeToken = localStorage.getItem('authToken');

  useEffect(() => {
    axios.get(`${API_URL}/api/reservations/${reservationId}`, { headers: { Authorization: `Bearer ${storeToken}` } })
    .then(response => {
      const oneReservation = response.data;
      setFullName(oneReservation.fullName);
      setTotalPerson(oneReservation.totalPerson);
      setPricePerPerson(oneReservation.pricePerPerson);
      setTotalPrice(oneReservation.totalPrice);
      setDate(oneReservation.date);
    })
    .catch(err => console.log("failed updating the reservation"));
  }, [reservationId]);


  const handleEditReservation = (e) => {
    e.preventDefault();

    const requestBodyReservation = {
      fullName,
      totalPerson,
      pricePerPerson,
      totalPrice,
      date,
    };

    axios
      .put(`${API_URL}/api/reservations/${reservationId}`, 
      requestBodyReservation,
      { headers: { Authorization: `Bearer ${storeToken}` } })
      .then(response => {
        navigate("/reservations");
      })
      .catch(e => console.log("failed to edit the service", e));
  };
  
  return(
    <div className="edit-reservation-page">
      <form onSubmit={handleEditReservation}>
        <label>Full Name</label>
        <input 
          type="text"
          name="fullName"
          value={fullName}
          onChange={e => {setFullName(e.target.value)}}
        />

        <label>Total Person</label>
        <input 
          type="number"
          name="totalPerson"
          value={totalPerson}
          onChange={e => {setTotalPerson(e.target.value)}}
        />

        <label>Price Per Person</label>
        <input 
          type="number"
          name="pricePerPerson"
          value={pricePerPerson}
          onChange={e => {setPricePerPerson(e.target.value)}}
        />

        <label>Total Price</label>
        <input 
          type="number"
          name="totalPrice"
          value={totalPrice}
          onChange={e => {setTotalPrice(e.target.value)}}
        />

        <label>Date</label>
        <input 
          type="date"
          name="date"
          value={date}
          onChange={e => {setDate(e.target.value)}}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  )
};

export default EditReservationPage;