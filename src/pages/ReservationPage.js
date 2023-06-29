import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams, } from "react-router-dom";


function ReservationPage(props){
   
    const [reservation, setReservation] = useState([]);
    const [service, setService] = useState("");
    const [user, setUser] = useState("");
    const [fullName, setFullName] = useState("");
    const [totalPerson, setTotalPerson] = useState("");
    const [pricePerPerson, setPricePerPerson] = useState("");
    const [totalPrice, setTotalPrice] = useState("");
    const [date, setDate] = useState("")

    const API_URL = "http://localhost:5005"
    
    const { serviceId } = useParams();
    const navigate = useNavigate()
    

    const getService = () => {

        const storedToken = localStorage.getItem("authToken");
        
        axios
            .get(`${API_URL}/api/services/${serviceId}`, { headers : { Authorization: `Bearer ${storedToken}`}})
                .then((e) => {
                    const infoService = e.data
                    setPricePerPerson(infoService.pricePerPerson)
                    setFullName(infoService.owner.name)
                })
                .catch((e) => console.log(e))
    }


    

    const getReservation = (e) => {

        e.preventDefault();

        const newReservation = {
            service, 
            user,
            totalPerson,
            pricePerPerson,
            totalPrice: (totalPerson * pricePerPerson),
            date,
            fullName,
          };

        const storedToken = localStorage.getItem("authToken");
    
        axios
            .post(`${API_URL}/api/services/${serviceId}/reserve`, newReservation, { headers : { Authorization: `Bearer ${storedToken}`}})
                .then((response) => {
                    const reservationData = response.data;
                    setService(reservationData._id);
                    setUser("");
                    setTotalPerson("");
                    setTotalPrice("");
                    setDate("");

                    navigate('/confirmation')
                })
                .catch(err => {
                    console.log("failed to reserve the service", err);
                })
    }
    
     useEffect(() => {
        getService();
     })
    

    
    if(reservation === undefined) {
        return <h1>Loading...</h1>
    } else {
        return(
            <div>
                <div>
                    <h1>Reservation</h1>
                    <h2>Chef Cook : {fullName}</h2>
                    <h3>Price per Person : {pricePerPerson}$</h3>
                </div>
                <form onSubmit={getReservation}>
                    <label>Total Person</label>
                    <input 
                        type="number"
                        name="totalPerson"
                        value={totalPerson}
                        onChange={(e) => {setTotalPerson(e.target.value)}}
                    />
                    <label>Date</label>
                    <input 
                        type="date"
                        name="date"
                        value={date}
                        onChange={(e) => {setDate(e.target.value)}}
                    />
                    
                    <button type="submit">Reserve</button>

                </form>
                    <h2>{totalPrice}</h2> 


            </div>

        )
    }

}
export default ReservationPage;


            