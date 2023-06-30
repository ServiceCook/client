import axios from "axios";
import { useEffect, useState } from "react";
import ServiceCard from "../components/ServiceCard";
import { Link, useNavigate } from "react-router-dom";


function MyServicePage(props){
    const API_URL = "http://localhost:5005";
    const [myServices, setMyServices] = useState(undefined);

    const navigate = useNavigate()

    const getAllMyServices = () => {
        const storeToken = localStorage.getItem('authToken');

        axios
            .get(`${API_URL}/api/services`,  { headers: { Authorization: `Bearer ${storeToken}` } })
                .then((result) => {
                    console.log(result.data);
                    setMyServices(result.data)
                })
                .catch((e => console.log(e)))
        }      
        
        // const deleteMyService = (e) => {
        //     const storeToken = localStorage.getItem('authToken');

        //     axios
        //       .delete(`${API_URL}/api/services/${e}`, { headers: { Authorization: `Bearer ${storeToken}` } })
        //         .then(() => {
        //           navigate("/profile")
        //         })
        //         .catch(e => console.log("error to delete", e));
        // }
        

        useEffect(() => {
            getAllMyServices()
        }, []);

        if(myServices === undefined){
            return(<h1>Loading .....</h1>)
        } else {
            return(
                <div>
                    {myServices.map((service) => {
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

export default MyServicePage