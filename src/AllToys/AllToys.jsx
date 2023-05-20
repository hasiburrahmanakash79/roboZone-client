import { useEffect, useState } from "react";
import useTitle from "../Hooks/useTitle";
import SingleToy from "./SingleToy";

const AllToys = () => {
  useTitle("AllToys");
  const [toys, setToys] = useState([]);

  const url = "http://localhost:5000/allToys";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, []);
  return (
    <div>
      <h1 className="text-4xl font-semibold text-center my-7">
        Total Toys in Our Shop
      </h1>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-compact w-full">
            <thead>
              <tr>
                <th></th>
                <th>Seller Name</th>
                <th>Toy Name</th>
                <th>Sub-category</th>
                <th>Quantity</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {toys.map((toy) => (
                <SingleToy key={toy._id} toy={toy}></SingleToy>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllToys;
