import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditServicesPage(props) {
  const API_URL = "http://localhost:5005";

  const { serviceId } = useParams();
  const navigate = useNavigate();

  const [picture, setPicture] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [place, setPlace] = useState("");
  const [description, setDescription] = useState("");
  const [amountOfPeople, setAmountOfPeople] = useState("");
  const [pricePerPerson, setPricePerPerson] = useState("");

  const storeToken = localStorage.getItem('authToken');


  useEffect(() => {
    axios.get(`${API_URL}/api/services/${serviceId}`, { headers: { Authorization: `Bearer ${storeToken}` } })
      .then(response => {
        const oneService = response.data;
        setPicture(oneService.picture);
        setSpeciality(oneService.speciality);
        setPlace(oneService.place);
        setDescription(oneService.description);
        setAmountOfPeople(oneService.amountOfPeople);
        setPricePerPerson(oneService.pricePerPerson);
      })
      .catch(e => console.log("failed to fetch the service", e));
  }, [serviceId, storeToken]);

  const handleSubmitUpdate = (e) => {
    e.preventDefault();

    const requestBodyService = {
      picture,
      speciality,
      place,
      description,
      amountOfPeople,
      pricePerPerson,
    };

    axios
      .put(`${API_URL}/api/services/${serviceId}`, requestBodyService, { headers: { Authorization: `Bearer ${storeToken}` } })
      .then(response => {
        navigate("/services");
      })
      .catch(e => console.log("failed to edit the service", e));
  };


  const deleteService = () => {
    axios
      .delete(`${API_URL}/api/services/${serviceId}`, { headers: { Authorization: `Bearer ${storeToken}` } })
        .then(() => {
          navigate("/services")
        })
        .catch(e => console.log("error to delete", e));
  }

  return (
    <div className="edit-service-page">
      <form onSubmit={handleSubmitUpdate}>
        <label>Speciality</label>
        <input
          type="text"
          name="speciality"
          value={speciality}
          onChange={e => { setSpeciality(e.target.value) }}
        />
        <label>Image</label>
        <input
          type="text"
          name="picture"
          value={picture}
          onChange={e => { setPicture(e.target.value) }}
        />

        <label>Place</label>
        <input
          type="text"
          name="place"
          value={place}
          onChange={e => { setPlace(e.target.value) }}
        />

        <label>Description</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={e => { setDescription(e.target.value) }}
        />

        <label>Amount Of People</label>
        <input
          type="number"
          name="amountOfPeople"
          value={amountOfPeople}
          onChange={e => { setAmountOfPeople(e.target.value) }}
        />

        <label>Price Per Person</label>
        <input
          type="number"
          name="pricePerPerson"
          value={pricePerPerson}
          onChange={e => { setPricePerPerson(e.target.value) }}
        />
        <button type="submit">Update</button>
      </form>

      <button onClick={deleteService}>Delete</button>
    </div>
  );
}

export default EditServicesPage;
