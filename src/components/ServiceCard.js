import { Link } from "react-router-dom"

function ServiceCard({ speciality, place , _id}){
    
    return(
        <div>
            <Link to={`/services/${_id}`}>
                <h1>Services</h1>
            </Link>
        
            <h2>{place}</h2>
            <p>{speciality}</p>
        </div>
    );
}

export default ServiceCard