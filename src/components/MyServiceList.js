import { Link } from "react-router-dom";
import IsPrivate from "../components/IsPrivate";
import { useEffect, useState } from "react";
import deleteImg from '../images/delete-icon.png'
import editImg from '../images/edit-icon.png'


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
                      <img className="edit-myService" src={editImg} alt="editImg"/>
                    </Link>
                    <IsPrivate>
                        <img onClick={() => deleteService(_id)} src={deleteImg} alt="editImg" className="delete-myService"  />
                    </IsPrivate>
                </div>           
            </div>
        </div>
    );
}

export default MyServiceList;