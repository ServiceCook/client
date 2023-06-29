import axios from "axios"
import { useState, useEffect } from "react"
import ServiceCard from "../components/ServiceCard";
import { Link } from "react-router-dom";

function ServiceList(){
   const API_URL = "http://localhost:5005";
    const [services, setServices] = useState(undefined);

    const getAllService = () => {
        const storeToken = localStorage.getItem('authToken');

        axios
            .get(`${API_URL}/api/services`, { headers: { Authorization: `Bearer ${storeToken}` } })
                .then((result) => {
                    setServices(result.data)
                })
                .catch((e => console.log(e)))
        }

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
                        </div>
                    )
                })} 
            </div>
    )
    }
}

export default ServiceList