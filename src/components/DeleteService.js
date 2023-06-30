import axios from "axios"
import { useNavigate } from "react-router-dom";

function deleteService({ _id}){
    const API_URL = "http://localhost:5005";
    
    const storeToken = localStorage.getItem('authToken');

    const navigate = useNavigate

        axios
          .delete(`${API_URL}/api/services/${_id}`, { headers: { Authorization: `Bearer ${storeToken}` } })
            .then(() => {
              navigate("/services")
            })
            .catch(e => console.log("error to delete", e));
      
}
    



export default deleteService