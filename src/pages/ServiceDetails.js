import axios from "axios"
import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom"
import AddReview from "../components/AddReview";
import ReviewCard from "../components/ReviewCard";

function ServiceDetails(props){
    
    const API_URL = "http://localhost:5005"
    const [services, setServices] = useState(undefined)
    const location = useLocation();

    const { serviceId } = useParams();


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
        <div className="service-details">
            <h2>{services.speciality}</h2>
            {services.picture ? <img src={services.picture} alt="Service" className="image-details"/> : <p>No picture available</p>}
            <h4>Description:
                <p>{services.description}</p>
            </h4>
            <h3>Location: {services.place}</h3>
            <h4>Price Per Person: {services.pricePerPerson} €</h4>
            <h2>Service by {services.owner.name}</h2>

            <Link to={`/services/${serviceId}/reserve`}><button>Reserve</button></Link>
            <Link to="/services"><button>Back to the List</button></Link>

            <AddReview getService={getService} serviceId={serviceId} />

            {services && services.reviews.map(review => (
                <ReviewCard key={review} reviewId={review._id} description={review.description} {...review}/>
            ))}
        </div>
    )
    }
} 

export default ServiceDetails;