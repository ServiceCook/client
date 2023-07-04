import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { AuthContext } from "../context/auth.context";

function ServiceCard({ speciality, place, picture, _id, owner, pricePerPerson}) {
    const { isLoggedIn } = useContext(AuthContext);
    const [isAvailable, setIsAvailable] = useState();

    useEffect(() => {
        const storedAvailableStatus = localStorage.getItem(`serviceAvailable_${_id}`)
        if(storedAvailableStatus) {
            setIsAvailable(storedAvailableStatus === 'true')
        }
    }, [_id])

    const toggleAvailability = () => {
        if (isOwner()) { // Check if the owner is defined
            const statusAvailable = !isAvailable;
            setIsAvailable(statusAvailable);
            localStorage.setItem(`serviceAvailable_${_id}`, statusAvailable.toString());
          }
    };

    const isOwner = () => {
        return isLoggedIn && owner;
      };
    
    return(
        
        
        <div className="service-card-box">
            
            <div className="description-service">
            <Link to={{ pathname: `/services/${_id}`, state: { picture } }}>

            <div className="img-service-list">
                    {picture ? <img src={picture} alt="img" /> : <p>sorry, no picture</p>}
            </div>

                <div className="description-list">
                    <h1>{owner.name}</h1>
                    <div className="description-list-spe">
                        <h3>{speciality}</h3>
                        <p>{place}</p>
                    </div>
                    <div>
                        <h4>Price : {pricePerPerson} €</h4>
                    </div>
                </div>
                </Link>
                <button
                    className="available-status"
                    onClick={toggleAvailability}
                    style={{fontWeight: isAvailable ? 'bold' : 'normal', color: isAvailable ? 'red' : 'black'}}
                >Available</button>           
            </div>
        </div>
    );
}

export default ServiceCard