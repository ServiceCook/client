import { Link } from "react-router-dom";
import IsPrivate from "../components/IsPrivate";

function ServiceCard({ speciality, place, picture, _id, owner, pricePerPerson , deleteService}) {

      
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
                <div className="Service-page-Btn">
                    <Link to={`/services/edit/${_id}`}>
                      <button>Edit →</button>
                    </Link>
                    <IsPrivate>
                      <button onClick={() => deleteService(_id)}>
                        Delete →</button>
                    </IsPrivate>
                  </div>           
            </div>
        </div>
    );
}

export default ServiceCard