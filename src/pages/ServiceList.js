import axios from "axios"
import { useState, useEffect } from "react"
import ServiceCard from "../components/ServiceCard";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context"

function ServiceList(){
    const API_URL = "http://localhost:5005";
    const [services, setServices] = useState(undefined);
    const [place , setSearchPlace] = useState('')
    const [pricePerPerson, setSearchPricePerPerson] = useState('')


    const{
        isLoggedIn
    } = useContext(AuthContext)

    const storeToken = localStorage.getItem('authToken');

    const getAllService = (e) => {
        // e.preventDefault();
        axios
            .get(`${API_URL}/api/services`, { headers: { Authorization: `Bearer ${storeToken}` }},  {
                params: {
                    pricePerPerson,
                    place
                    }
                })
                .then((result) => {
                    setServices(result.data)
                })
                .catch((e => console.log(e)))
        }
    
    
    const handleSearch = (e) => {
        const {name, value} = e.target
        if(name === 'place'){
            setSearchPlace(value)
        } else if (name = 'pricePerPerson'){
            setSearchPricePerPerson(value)
        }
    };

    
    useEffect(() => {
        getAllService();
    }, []);



    if(services === undefined){
        return(<h1>Loading...</h1>)
    } else {
        return(
            <div className="list-of-services">
                <form onSubmit={handleSearch}>
                    <input
                        type="text"
                        name="pricePerPerson"
                        value={pricePerPerson}
                        onChange={handleSearch}
                        placeholder="Search by Price"
                    />

                    <input 
                        type="text"
                        name="place"
                        value={place}
                        onChange={handleSearch}
                        placeholder="Localisation.."
                    />
                    <button type="submit">Rechercher</button>
                </form>
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