import { Link } from "react-router-dom"

function ServiceCard({ speciality, place, picture, _id, owner, pricePerPerson, availability}) {
      console.log('owner', owner.name)
    return(                 
            <div className="description-service">
            <Link to={{ pathname: `/services/${_id}`, state: { picture } }}>

            <div className="img-service-list">
                {picture ? <img src={picture} alt="img" /> : <p>sorry, no picture</p>}
            

                <div className="description-list">
                    <h1>{owner?.name} || {speciality}</h1>
                        <h4>{place}</h4>
                        <h4>{pricePerPerson} € / Person</h4>
                        {/* <h4>{availability}</h4> */}
                </div>
                 
                </div>
                </Link>        
            </div>
        );
}

export default ServiceCard;