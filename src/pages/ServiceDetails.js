import axios from "axios"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

function ServiceDetails(props){
    
    const [services, setServices] = useState(undefined)

    const API_URL = "http://localhost:5005"

    const { serviceId } = useParams();

    console.log(serviceId, "tell me something");

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
            <h1>{services.speciality}</h1>
        </div>
    )
    }
} 

export default ServiceDetails