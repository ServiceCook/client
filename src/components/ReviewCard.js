import axios from "axios";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import deleteImg from "../images/delete-icon.png"
import editImg from "../images/edit-icon.png"

const API_URL = process.env.REACT_APP_SERVER_URL;

function ReviewCard({ description, reviewId, rating }) {
  const { isLoggedIn, user } = useContext(AuthContext);

  const navigate = useNavigate();
  const storedToken = localStorage.getItem("authToken");

  const deleteReview = () => {
    axios
      .delete(`${API_URL}/api/reviews/${reviewId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then(() => {
        navigate("/services");
      })
      .catch((e) => console.log("failed to delete the review", e));
  };

  const renderRatingStars = () => {
    const limitedRating = Math.max(1, Math.min(rating, 5)); // Limit the rating between 1 and 5
    const stars = [];
    for (let i = 1; i <= limitedRating; i++) {
      stars.push(<span key={i} className="gold-star">★</span>);
    }
    return stars;
  };

  return (
    <div>
      <div className="card-review">
        <p>{description}</p>
        <div>{renderRatingStars()}</div>

        {isLoggedIn && user ? (
          <div>
            <Link to={`/reviews/edit/${reviewId}`}>
              <img className="editIcon" src={editImg} alt="editButton"/>
            </Link>
            <img className="deleteIcon" onClick={deleteReview} src={deleteImg} alt="deleteButton"/>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default ReviewCard;
