import axios from "axios"
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import AddReview from "../components/AddReview";
import ReviewCard from "../components/ReviewCard";

function ServiceDetails(props){
    
    const [services, setServices] = useState(undefined)

    const API_URL = "http://localhost:5005"

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
            <h1>{services.speciality}</h1>
            <h2>{services.owner.name}</h2>
            <Link to="/services"><button>Back to the List</button></Link>
            <Link to={`/services/${serviceId}/reserve`}><button>Reservation</button></Link>

            <AddReview getService={getService} serviceId={serviceId} />

            {services && services.reviews.map(review => (
                <ReviewCard key={review} reviewId={review._id} description={review.description} {...review}/>
            ))}
        </div>
    )
    }
} 

export default ServiceDetails;