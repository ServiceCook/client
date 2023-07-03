import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5005";

function AddNewService(props) {
  const navigate = useNavigate();

  const [picture, setPicture] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [place, setPlace] = useState("");
  const [description, setDescription] = useState("");
  const [pricePerPerson, setPricePerPerson] = useState("");

  const uploadImage = (file) => {
    return axios
      .post(`${API_URL}/api/upload`, file)
      .then((res) => res.data)
      .catch((e) => console.log(e));
  };

  const handleFileUpload = (e) => {
    const uploadData = new FormData();

    uploadData.append("picture", e.target.files[0]);

    uploadImage(uploadData)
      .then((response) => {
        console.log(response.picture);
        setPicture(response.picture);
      })
      .catch((err) => console.log("Error while uploading the file: ", err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBodyService = {
      picture,
      speciality,
      place,
      description,
      pricePerPerson,
    };

    const storeToken = localStorage.getItem("authToken");

    axios
      .post(`${API_URL}/api/services`, requestBodyService, {
        headers: { Authorization: `Bearer ${storeToken}` },
      })
      .then((response) => {
        setPicture("");
        setSpeciality("");
        setPlace("");
        setDescription("");
        setPricePerPerson("");

        navigate("/services");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="btn-reservation-list">
        <Link to="/reservations">
          <button>Your Order</button>
        </Link>

        <Link to="/myService">
          <button>Your Own Service</button>
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="add-new-service">
        <label>Speciality :</label>
        <input
          type="text"
          name="speciality"
          value={speciality}
          placeholder="ex: French Food"
          onChange={(e) => {
            setSpeciality(e.target.value);
          }}
        />
        <label>Image :</label>
        <input
          type="file"
          name="picture"
          onChange={(e) => handleFileUpload(e)}
        />

        <label>Place :</label>
        <input
          type="text"
          name="place"
          value={place}
          placeholder="ex : Paris and Dublin"
          onChange={(e) => {
            setPlace(e.target.value);
          }}
        />

        <label>Description :</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />

        <label>Price Per Person :</label>
        <input
          type="number"
          name="pricePerPerson"
          value={pricePerPerson}
          min={1}
          placeholder="ex : 80$"
          onChange={(e) => {
            setPricePerPerson(e.target.value);
          }}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default AddNewService;
