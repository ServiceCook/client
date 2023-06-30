import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5005";

function AddNewService(props) {
  const navigate = useNavigate();

  const[picture, setPicture] = useState("");
  const[speciality, setSpeciality] = useState("");
  const[place, setPlace] = useState("");
  const[description, setDescription] = useState("");
  //const[amountOfPeople, setAmountOfPeople] = useState("");
  const[pricePerPerson, setPricePerPerson] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBodyService = {
      picture,
      speciality,
      place,
      description,
      //amountOfPeople,
      pricePerPerson,
    };

    const storeToken = localStorage.getItem('authToken');

    axios.post(`${API_URL}/api/services`, requestBodyService, { headers: { Authorization: `Bearer ${storeToken}` } })
      .then(response => {
        setPicture("");
        setSpeciality("");
        setPlace("");
        setDescription("");
        //setAmountOfPeople("");
        setPricePerPerson("");
        
        props.updateServices();
        navigate("/services")
      })
      .catch(err => {
        console.log(console.error());
      })
  }


  return(
    <div>
      <form onSubmit={handleSubmit}>
        <label>Speciality</label>
          <input 
            type="text"
            name="speciality"
            value={speciality}
            onChange={e => {setSpeciality(e.target.value)}}
          />
          <label>Image</label>
          <input 
            type="text"
            name="picture"
            value={picture}
            onChange={e => {setPicture(e.target.value)}}
          />

          <label>Place</label>
          <input 
            type="text"
            name="place"
            value={place}
            onChange={e => {setPlace(e.target.value)}}
          />

          <label>Description</label>
          <input 
            type="text"
            name="description"
            value={description}
            onChange={e => {setDescription(e.target.value)}}
          />

          <label>Price Per Person</label>
          <input 
            type="number"
            name="pricePerPerson"
            value={pricePerPerson}
            onChange={e => {setPricePerPerson(e.target.value)}}
          />
        <button type="submit">Create</button>
      </form>

    </div>
  )
};

export default AddNewService;
