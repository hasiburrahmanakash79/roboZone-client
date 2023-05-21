import { useEffect, useState } from "react";
import useTitle from "../Hooks/useTitle";
import SingleToy from "./SingleToy";
import { FaSearch } from "react-icons/fa";

const AllToys = () => {
  useTitle("AllToys");

  const [toys, setToys] = useState([]);
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);

  const [seeMore, setSeeMore] = useState(false);
  const [displayCount, setDisplayCount] = useState(20);

  const url = "https://robot-world-server.vercel.app/allToys";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, []);

  useEffect(() => {
    if (search?.length > 0) {
      const filterResult = toys.filter((toy) =>
        toy?.toyName?.toLowerCase().includes(search?.toLowerCase())
      );
      setSearchData(filterResult);
    } else {
      setSearchData(toys);
    }
  }, [search, toys]);

  // see more button 
  const handleSeeMore = () => {
    setSeeMore(true);
    setDisplayCount(searchData.length);
  }

  return (
    <div>
      <h1 className="text-4xl text-center font-semibold my-7">
        Total Toys in Our Shop
      </h1>
      <div className="form-control my-5">
        <div className="input-group">
          <input
            onChange={(event) => setSearch(event.target.value)}
            type="text"
            placeholder="Search your toy"
            className="input input-bordered"
          />
          <button className="btn btn-square">
            <FaSearch></FaSearch>
          </button>
        </div>
      </div>
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
              {searchData.slice(0, displayCount).map((toy) => (
                <SingleToy key={toy._id} toy={toy}></SingleToy>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="text-center my-5">
        {!seeMore && (
          <button onClick={handleSeeMore} className="btn bg-black">
            See More
          </button>
        )}
      </div>
    </div>
  );
};

export default AllToys;
