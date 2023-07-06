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

                <p>Description:
                    <p>{services.description}</p>
                </p>
                <h4>Speciality : {services.speciality}</h4>
                <h4>Location: {services.place}</h4>
                <h4>Price Per Person: {services.pricePerPerson} €</h4>

            </div>
        </div>
        <div className="review-details">
            <div>
                <Link to={`/services/${serviceId}/reserve`}><button>Reserve</button></Link>
                <Link to="/services"><button>Back to the List</button></Link>
            </div>

            <AddReview getService={getService} serviceId={serviceId} />
            <div className="all-review">
            {services && services.reviews.map(review => (
                <ReviewCard key={review} serviceId={serviceId} reviewId={review._id} description={review.description} ownderId={review.owner} name={review.name} picture={review.picture} {...review}/>
            ))}
            </div>
        </div>
    </div>
    )
    }
} 

export default ServiceDetails;