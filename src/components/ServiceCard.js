import { Link } from "react-router-dom"

function ServiceCard({ speciality, place, picture, _id, owner, pricePerPerson}) {
    return(
        <div className="service-card-box">
            <div className="description-service">
            <Link to={{ pathname: `/services/${_id}`, state: { picture } }}>
                <div>
                    {picture ? <img src={picture} alt="img"/> : <p>sorry, no picture</p>}
                </div>
                <div className="description-list">
                    <h2>{speciality}</h2>
                    <h4>Price Per Person : {pricePerPerson} €</h4>
                    <h3>By : {owner.name}</h3>
                    <h2>{place}</h2>
                </div>
                </Link>           
            </div>
        </div>
    );
}

export default ServiceCard