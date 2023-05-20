import { useContext, useEffect, useState } from "react";
import useTitle from "../Hooks/useTitle";
import { AuthContext } from "../Provider/AuthProvider";
import MyToyDetails from "./MyToyDetails";

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

  return (
    <div className="overflow-x-auto border rounded-xl w-full">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Update Items</th>
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
