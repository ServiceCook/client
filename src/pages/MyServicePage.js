import axios from "axios";
import { useEffect, useState } from "react";
import ServiceCard from "../components/ServiceCard";
import { Link } from "react-router-dom";
import IsPrivate from "../components/IsPrivate";


function MyServicePage(props){
    const API_URL = "http://localhost:5005";
    const [myServices, setMyServices] = useState(undefined);


    const getAllMyServices = () => {
        const storeToken = localStorage.getItem('authToken');

        axios
            .get(`${API_URL}/api/myService`,  { headers: { Authorization: `Bearer ${storeToken}` } })
                .then((result) => {
                    console.log(result.data);
                    setMyServices(result.data)
                })
                .catch((e => console.log(e)))
    };
        
    const deleteService = (serviceId) => {
        const storeToken = localStorage.getItem("authToken");
    
        axios
            .delete(`${API_URL}/api/services/${serviceId}`, {
            headers: { Authorization: `Bearer ${storeToken}` },
            })
            .then(() => {
            getAllMyServices();
            })
            .catch((error) => {
            console.log("Failed to delete service:", error);
            });
    };

        useEffect(() => {
            getAllMyServices()
        }, []);

        if(myServices === undefined){
            return(<h1>Loading .....</h1>)
        } else {
            return(
                <div>
                        <Link to="/create">
                            <button>Create Service</button>
                        </Link>

                        <Link to="/reservations">
                            <button>Your Order</button>
                        </Link>
                    {myServices.map((service) => {
                        return(
                        <div>
                        <ServiceCard key={service._id} {...service}/>
                        <Link to={`/services/edit/${service._id}`}>
                            <button>Edit</button>
                        </Link>
                        <IsPrivate><button onClick={() => deleteService(service._id)}>Delete</button></IsPrivate>
                        </div>
                        )
                    })}            
                </div>
            )
        }
    }

export default MyServicePage