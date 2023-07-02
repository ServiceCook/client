// import axios from "axios"
// import { useState, useEffect } from "react"
// import ServiceCard from "../components/ServiceCard";
// import { useContext } from "react";
// import { AuthContext } from "../context/auth.context"

// function ServiceList(){
//     const API_URL = "http://localhost:5005";
//     const [services, setServices] = useState(undefined);
//     const [place , setSearchPlace] = useState('')
//     const [pricePerPerson, setSearchPricePerPerson] = useState('')


//     const{
//         isLoggedIn
//     } = useContext(AuthContext)

//     const storeToken = localStorage.getItem('authToken');

//     const getAllService = () => {
//         axios
//             .get(`${API_URL}/api/services`, { headers: { Authorization: `Bearer ${storeToken}` }})
//                 .then((result) => {
//                     // console.log(result.data);
//                     let filterServiceList = result.data.filter(element => {
//                         return element.place.toLowerCase().includes(place.toLowerCase());                            
//                     });
//                     console.log(filterServiceList);
//                     setServices(filterServiceList)
//                 })
//                 .catch((e => console.log(e)))
//     }
//     useEffect(() => {
//         getAllService();
//     }, [place]);

    
//     console.log(services);

//     if(services === undefined){
//         return(<h1>Loading...</h1>)
//     } else {
//         return(
//             <div>
//                 <div  className="container-filter-by-place" >
//                     <input
//                         type="text"
//                         value={place}
//                         onChange={e => {setSearchPlace(e.target.value)}}
//                         className="filter-by-place"
//                         placeholder="Filter by Place" 
//                     />
//                     <input
//                         type="text"
//                         value={pricePerPerson}
//                         onChange={e => {setSearchPricePerPerson(e.target.value)}}
//                         className="filter-by-place"
//                         placeholder="Filter by Prie" 
//                     />

//                 </div>
//                 <div className="list-of-services">
                    
//                     {services.map((service) => {
//                         return(
//                             <div key={service._id}>
//                                 <ServiceCard key={service._id} {...service}/>
//                             </div>
//                         )
//                     })} 
//                 </div>
//             </div>
//         )
//     }
// }

// export default ServiceList;


import axios from "axios";
import { useState, useEffect } from "react";
import ServiceCard from "../components/ServiceCard";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function ServiceList() {
  const API_URL = "http://localhost:5005";
  const [services, setServices] = useState(undefined);
  const [place, setSearchPlace] = useState('');
  const [pricePerPerson, setSearchPricePerPerson] = useState('');

  const { isLoggedIn } = useContext(AuthContext);
  const storeToken = localStorage.getItem('authToken');

  const getAllService = () => {
    axios
      .get(`${API_URL}/api/services`, { headers: { Authorization: `Bearer ${storeToken}` }})
      .then((result) => {
        let filteredServices = result.data.filter((element) => {
          const matchesPlace = element.place.toLowerCase().includes(place.toLowerCase());
          const matchesPrice = pricePerPerson === '' || element.pricePerPerson <= parseFloat(pricePerPerson);
          return matchesPlace && matchesPrice;
        });
        setServices(filteredServices);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllService();
  }, [place, pricePerPerson]);

  if (services === undefined) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div>
        <div className="container-filter-by-place">
          <input
            type="text"
            value={place}
            onChange={(e) => setSearchPlace(e.target.value)}
            className="filter-input"
            placeholder="Filter by Place"
          />
          <br />
          <input
            type="text"
            value={pricePerPerson}
            onChange={(e) => setSearchPricePerPerson(e.target.value)}
            className="filter-input"
            placeholder="Filter by Price"
          />
        </div>
        <div className="list-of-services">
          {services.length === 0 ? (
            <p>No services found.</p>
          ) : (
            services.map((service) => (
              <div key={service._id}>
                <ServiceCard key={service._id} {...service} />
              </div>
            ))
          )}
        </div>
      </div>
    );
  }
}

export default ServiceList;

