import { useLoaderData } from "react-router-dom";
import useTitle from "../Hooks/useTitle";

const ToyDetails = () => {
  useTitle("Toy Details")
  const toyDetails = useLoaderData();
  const {
    sellerName,
    image,
    email,
    toyName,
    category,
    price,
    Rating,
    quantity,
    description,
  } = toyDetails;
  return (
    <div className=" p-10 m-5 border-2 rounded-xl">
      <div className="md:flex items-center gap-10">
        <div className="avatar md:w-1/3 ">
          <div className="w-full rounded">
            <img src={image} />
          </div>
        </div>
        <div className=" md:w-2/3">
          <div>
            <p className="text-4xl font-semibold mb-3"> {toyName}</p>
            <p className="text-xl font-semibold text-yellow-600">Price: ${price}</p>
            <p>{description}</p>
            <button className="btn btn-warning btn-outline btn-sm my-2">
              Add to Cart
            </button>
            <div className="md:flex gap-10 text-red-400">
              <div>
                <p>Category: {category}</p>
                <p>Seller Name: {sellerName}</p>
                <p>Seller Email: {email}</p>
              </div>
              <div>
                <p>Rating: {Rating}</p>
                <p>Quantity: {quantity}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
