import axios from "axios";
import { useEffect, useState } from "react";
import ServiceCard from "../components/ServiceCard";
import { Link, useNavigate, useParams } from "react-router-dom";
import DeleteService from "../components/DeleteService"

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
        
        // function deleteService(id){
        //     const API_URL = "http://localhost:5005";
        //     const storeToken = localStorage.getItem('authToken');
        
        //     const navigate = useNavigate
        
        //         axios
        //           .delete(`${API_URL}/api/services/${id}`, { headers: { Authorization: `Bearer ${storeToken}` } })
        //             .then(() => {
        //               navigate("/services")
        //             })
        //             .catch(e => console.log("error to delete", e));
              
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
                            {/* <button onClick={deleteService(service._id)}>Delete</button>  */}
                        </div>
                       )
                    })}
                    
                </div>
            )
        }

    }

export default MyServicePage