import axios from "axios"
import { useState, useEffect } from "react"
import ServiceCard from "../components/ServiceCard";
import { Link } from "react-router-dom";

function ServiceList(){
   const API_URL = "http://localhost:5005";
    const [services, setServices] = useState(undefined);

    const storeToken = localStorage.getItem('authToken');
    const getAllService = () => {
        axios
            .get(`${API_URL}/api/services`, { headers: { Authorization: `Bearer ${storeToken}` } })
                .then((result) => {
                    setServices(result.data)
                })
                .catch((e => console.log(e)))
        }

    const deleteService = (serviceId) => {
        axios
            .delete(`${API_URL}/api/services/${serviceId}`, { headers: { Authorization: `Bearer ${storeToken}` } })
            .then(() => {
            getAllService(); // Refresh the service list after deleting
            })
            .catch((e) => console.log("error to delete", e));
        };
        

    useEffect(() => {
        getAllService();
    }, []);


    if(services === undefined){
        return(<h1>Loading...</h1>)
    } else {
        return(
            <div className="list-of-services">
                {services.map((service) => {
                    return(
                        <div>
                            <ServiceCard key={service._id} {...service}/>
                            <Link to={`/services/edit/${service._id}`}>
                                <button>Edit</button>
                            </Link>
                            <button onClick={() => deleteService(service._id)}>Delete</button>
                        </div>
                    )
                })} 
            </div>
    )
    }
}

export default ServiceList