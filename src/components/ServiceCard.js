import { Link } from "react-router-dom"

function ServiceCard({ speciality, place, picture, _id, owner}) {
    

    return(
        <div>
            <h1>{owner.name}</h1>
            <p>{speciality}</p>
            {picture ? <img src={picture} alt="img"/> : <p>sorry, no picture</p>}
            <h2>{place}</h2>
            <Link to={`/services/${_id}`}>
                <button>Interesting</button>
            </Link>
            
        </div>
    );
}

export default ServiceCard