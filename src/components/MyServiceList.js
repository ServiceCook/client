import { Link } from "react-router-dom";
import IsPrivate from "../components/IsPrivate";
import { useEffect, useState } from "react";

function MyServiceList({ speciality, place, picture, _id, owner, pricePerPerson, availability, deleteService}) {

    return(
        <div className="service-card-box">
            <div className="description-service">
            <Link to={{ pathname: `/services/${_id}`, state: { picture } }}>
                <div>
                    {picture ? <img src={picture} alt="img"/> : <p>sorry, no picture</p>}
                </div>
                <div className="description-list">
                    <h1>{owner.name}</h1>
                    <div>
                        <h3>{speciality}</h3>
                        <p>{place}</p>
                    </div>
                    <div>
                        <h4>Price : {pricePerPerson} €</h4>
                        <p>{availability}</p>
                    </div>
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

export default MyServiceList;