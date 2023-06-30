import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5005";

function ReviewCard({description, reviewId  }) {
  const navigate = useNavigate();

  const storedToken = localStorage.getItem("authToken");

  const deleteReview = () => {
    axios
      .delete(`${API_URL}/api/reviews/${reviewId}`, {headers: {Authorization: `Bearer ${storedToken}`}})
      .then(() => {
        navigate("/services")
      })
      .catch(e => console.log("failed to delete the review", e));
  };

  return(
    <div>
      <div>
      <p>{description}</p>
      <div>
        <Link to={`/reviews/edit/${reviewId}`}>
          <button>Edit Review</button>
        </Link>
        <button onClick={deleteReview}>Delete</button>
      </div>
      </div>

    </div>
  )

};

export default ReviewCard;