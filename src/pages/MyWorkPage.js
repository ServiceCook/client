import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import deleteImg from '../images/delete-icon.png'
import editImg from '../images/edit-icon.png'


function MyWorkPage() {
  const API_URL = process.env.REACT_APP_SERVER_URL

  const [reservations, setReservations] = useState([]);
  const [ownerId, setOwnerId] = useState("");
  const [userId, setUserId] = useState("");

  const storedToken = localStorage.getItem("authToken");

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/reservations/all`, { headers : { Authorization: `Bearer ${storedToken}`}});
        setReservations(response.data);
        const userId = response.data.map(element => {
          console.log(element.service.owner._id, "owner id")
          return element.service.owner._id}
        )
        

        const arrayOfId = userId.map(element => {console.log(element, "test"); return element})

        // const userIdObject = arrayOfId.join("");
        setOwnerId(arrayOfId);
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

  const fetchingProfile = () => {
    axios.get(`${API_URL}/auth/profile`, { headers : { Authorization: `Bearer ${storedToken}`}})
      .then(response => {
        setUserId(response.data._id) //id of the user who reserved the service
      })
      .catch(e => console.log("failed fetching data"));
  }
  useEffect(() => {
    fetchingProfile();
  }, []);

  console.log(userId, "and", ownerId)

  const converObjectToArray = [userId];
  const checkIfTrue = converObjectToArray.every((userId) => ownerId.includes(userId));
console.log(checkIfTrue);



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
      <div className="allMyReservation">
      { !checkIfTrue 
      ? (
        <div className="reservation-message">
          <h3>No order at this moment</h3>
        </div>
      ) : (
        reservations.map((element) => (
          <div key={element._id} className="reservation-list-page">
            <p>Total Person: {element.totalPerson}</p>
            <p>Price Per Person: {element.pricePerPerson} €</p>
            <p>Total Price: {element.totalPrice} €</p>
            <p>Address : {element.user.address}</p>
            <h3> Service By {element.fullName}</h3>
            <p>Date: {new Date(element.date).toLocaleDateString("en", { day: "2-digit", month: "long", year: "numeric" })}</p>
            <p>Hour: {element.hour}</p>
            <div className="btn-reservationList">
            <Link to={`/reservations/edit/${element._id}`}>
              <img className="edit-myReservation" src={editImg} alt="editImg"/>
            </Link>
            <img onClick={() => deleteReservation(element._id)} src={deleteImg} alt="editImg" className="delete-myReservation"  />
            </div>
          </div>
        ))

      )}
      </div>
    </div>
  );
}

export default MyWorkPage;