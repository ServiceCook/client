import { Link } from "react-router-dom"

function ServiceCard({ speciality, place , _id, owner}){
    console.log(owner)
    return(
        <div>
            <Link to={`/services/${_id}`}>
                <h1>Services</h1>
            </Link>
            <h1>{owner.name}</h1>
            <h2>{place}</h2>
            <p>{speciality}</p>
            
        </div>
    );
}

export default ServiceCard