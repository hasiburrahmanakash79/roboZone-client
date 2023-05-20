import { useContext, useEffect, useState } from "react";
import useTitle from "../Hooks/useTitle";
import { AuthContext } from "../Provider/AuthProvider";
import MyToyDetails from "./MyToyDetails";
import Swal from "sweetalert2";

const MyToys = () => {
  useTitle("My Toys");
  const [myToys, setMyToys] = useState([]);

  const { user } = useContext(AuthContext);

  const url = `https://robot-world-server.vercel.app/myToy?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
        console.log(data);
      });
  }, [url]);


  const handleDelete = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/allToys/items/${id}`,{
          method: 'DELETE'
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deleteCount > 0) {
              Swal.fire("Deleted!", "Your items has been deleted successfully.", "success");
              const remainingToy = myToys.filter(myToy => myToy._id !== id)
              setMyToys(remainingToy)
            }
          });
      }
    });
  };


  return (
    <div className="overflow-x-auto border rounded-xl w-full">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Update or Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            myToys.map(myToy => <MyToyDetails key={myToy._id}
              handleDelete={handleDelete} myToy={myToy}></MyToyDetails>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;
