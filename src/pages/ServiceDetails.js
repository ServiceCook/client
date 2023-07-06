import axios from "axios"
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import AddReview from "../components/AddReview";
import ReviewCard from "../components/ReviewCard";
import { AuthContext } from "../context/auth.context";

function ServiceDetails(props){
    
    const API_URL = process.env.REACT_APP_SERVER_URL    
    const [services, setServices] = useState(undefined)
   
    const { serviceId } = useParams();

    const { isLoggedIn, user } = useContext(AuthContext);
    console.log(user);

    const getService = () => {

        const storedToken = localStorage.getItem("authToken");
        
        axios
            .get(`${API_URL}/api/services/${serviceId}`, { headers : { Authorization: `Bearer ${storedToken}`}})
                .then((e) => {
                    const oneService = e.data
                    setServices(oneService)
                })
                .catch((e) => console.log(e))
    }
    
    useEffect(() => {
        getService();
    }, []);


    if(services === undefined){
        return(<h1>Loading...</h1>)
    }else {      
    return (
    <div>
        <div className="service-details">
            <div>
                {services.picture ? <img src={services.picture} alt="Service" className="image-details"/> : <p>No picture available</p>}
            </div>






            <div className="details-div">

                <h2>Service by : {services.owner.name}</h2>

                <p>Description : {services.description}</p>
                <h4>Speciality : {services.speciality}</h4>
                <h4>Location : {services.place}</h4>
                <h4>Price Per Person : {services.pricePerPerson} €</h4>
 
 
                <div className="review-details">
                    <div className="btn-details">
                        <Link to={`/services/${serviceId}/reserve`}>
                            {(user && user._id === services.owner._id) ? <></> : <button>Reserve</button>}
                        </Link>
                        <Link to="/services"><button>Back to the List</button></Link>

                        {(user && user._id === services.owner._id) ? <></> : 
                        <AddReview getService={getService} serviceId={serviceId} />}

                    </div>

                    <div className="all-review">
                    <h4 className="reviews-title">Reviews:</h4>
                        {services && services.reviews.map(review => (
                            <ReviewCard key={review} serviceId={serviceId} reviewId={review._id} description={review.description} ownderId={review.owner} name={review.name} picture={review.picture} {...review}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
    }
} 

export default ServiceDetails;