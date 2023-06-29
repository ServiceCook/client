import axios from "axios"
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"

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

    console.log(services);
    if(services === undefined){
        return(<h1>Loading...</h1>)
    }else {
        
    return (
        <div>
            <h1>{services.speciality}</h1>
            <h2>{services.owner.name}</h2>
            <Link to="/services"><button>Back to the List</button></Link>
            <Link to={`/services/${serviceId}/reserve`}><button>Reservation</button></Link>
        </div>
    )
    }
} 

export default ServiceDetails