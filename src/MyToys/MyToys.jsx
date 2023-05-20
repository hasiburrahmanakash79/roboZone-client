import { useContext, useEffect, useState } from "react";
import useTitle from "../Hooks/useTitle";
import { AuthContext } from "../Provider/AuthProvider";
import MyToyDetails from "./MyToyDetails";

const MyToys = () => {
  useTitle("My Toys");
  const [myToys, setMyToys] = useState([]);

  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/myToy?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
        console.log(data);
      });
  }, [url]);

  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            myToys.map(myToy => <MyToyDetails key={myToy._id} myToy={myToy}></MyToyDetails>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;
