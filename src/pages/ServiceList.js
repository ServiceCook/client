import axios from "axios"
import { useState, useEffect } from "react"
import ServiceCard from "../components/ServiceCard";
import { computeHeadingLevel } from "@testing-library/react";

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
    });
    if(services === undefined){
        return(<h1>Loading...</h1>)
    }else {
    return(
        <div>
            {services.map((service) => {
                return(
                    
                    <ServiceCard key={service._id} {...service}/>
                )
            })} 
 
        </div>
    )
    }
}

export default ServiceList