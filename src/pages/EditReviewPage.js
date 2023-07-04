import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const API_URL = process.env.REACT_APP_SERVER_URL

function EditReviewPage(props) {
  
const[description, setDescription] = useState("");
  const { reviewId } = useParams();
  const storedToken = localStorage.getItem('authToken');
  
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_URL}/api/reviews/${reviewId}`, { headers: { Authorization: `Bearer ${storedToken}` } })
      .then(response => {
        console.log(response, "tell me this response");
        const oneReview = response.data;
        setDescription(oneReview.description);
      })
      .catch(err => {
        console.log("fialed to fetch the review", err)
      });
  }, [reviewId]);

  const handleFormSubmitReview = e => {
    e.preventDefault();
    const requestBodyReview = { description };

    axios
      .put(`${API_URL}/api/reviews/${reviewId}`, requestBodyReview, { headers: { Authorization: `Bearer ${storedToken}` } })
      .then(response => {
        // navigate(`/reviews/${reviewId}`);
      })
      .catch(err => {
        console.log("failed to update the review", err);
      })
  };

  return(
    <div>
      <form onClick={handleFormSubmitReview}>
        <label>Description</label>
        <input 
          type="text"
          name="description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        
        <button type="submit">Update Review</button>
      </form>
    </div>
  )

}

export default EditReviewPage;