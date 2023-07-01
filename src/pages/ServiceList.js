import axios from "axios"
import { useState, useEffect } from "react"
import ServiceCard from "../components/ServiceCard";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context"

function ServiceList(){
   const API_URL = "http://localhost:5005";
    const [services, setServices] = useState(undefined);

    const{
        isLoggedIn
    } = useContext(AuthContext)

    const storeToken = localStorage.getItem('authToken');
    const getAllService = () => {
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
                        <div key={service._id}>
                            <ServiceCard key={service._id} {...service}/>
                        </div>
                    )
                })} 
            </div>
        )
    }
}

export default ServiceList