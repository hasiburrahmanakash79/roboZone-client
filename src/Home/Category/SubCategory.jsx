import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const SubCategory = ({robots}) => {
  const {_id, toyName, image, price, Rating } = robots;
  const {user} = useContext(AuthContext)

  const handleDetails = () =>{
    if(user){
        return
    }else{
        Swal.fire({
        title: 'You have to log in first then you can see the toy details.',
      })
    }
    
  }

  return (
    <div className="border p-3 rounded-md hover:border-yellow-300">
      <div className="avatar">
        <div className="w-full rounded">
          <img src={image} />
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-semibold">{toyName}</h1>
        <p>Price: ${price}</p>
        <p>Rating: {Rating}</p>
        <Link to={`/toyDetail/${_id}`}><button onClick={handleDetails} className="btn bg-black btn-sm my-3">View Details</button></Link>
      </div>
    </div>
  );
};

export default SubCategory;
