import { Link } from "react-router-dom"

function ServiceCard({ speciality, place, picture, _id, owner, pricePerPerson}) {
    return(
        <div className="service-card-box">
            <div class="name-product">
                <h2>{speciality}</h2>
            </div>

            <div class="description-service">
                {picture ? <img src={picture} alt="img" className="image-service"/> : <p>sorry, no picture</p>}
                <h4>Price Per Person {pricePerPerson} €</h4>
                <h3>Service by {owner.name}</h3>
                <h2>{place}</h2>
                <Link to={{ pathname: `/services/${_id}`, state: { picture } }}>
                    <button>Interesting</button>
                </Link>           
            </div>
        </div>
    );
}

export default ServiceCard