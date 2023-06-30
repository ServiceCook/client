import axios from "axios";
import { useState } from "react";

const API_URL = "http://localhost:5005";

function AddReview(props) {
  const [description, setDescription] = useState("");
  const [showForm, setShowForm] = useState(false); // Track form visibility

  const handleSubmitNewReview = (e) => {
    e.preventDefault();
    const { serviceId } = props;
    const requestBodyReview = {description, serviceId};
    const storedToken = localStorage.getItem("authToken");
    
    axios
      .post(`${API_URL}/api/reviews`, requestBodyReview, {headers: { Authorization: `Bearer ${storedToken}` } })
      .then(response => {
        setDescription("");
        props.getService(); // refers to the element of the AddReview
        setShowForm(false); // Hide the form after submitting
      })
      .catch(err => console.log(err));
  };

  const toggleFormVisibility = () => {
    setShowForm(!showForm);
  };
  
  return(
    <div>
      <button onClick={toggleFormVisibility}>Give your review</button>
      {showForm && (
        <div>
          <h4>Description</h4>
          <form onSubmit={handleSubmitNewReview}>
            <textarea 
              type="text"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      )}

      <h4>Reviews:</h4>
     
    </div>
  )
};

export default AddReview;