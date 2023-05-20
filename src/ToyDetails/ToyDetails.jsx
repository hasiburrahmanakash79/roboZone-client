import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
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
      <div className="md:flex gap-10">
        <div className="md:w-1/3 mb-5">
          <img src={image} className="" alt="" />
        </div>
        <div className=" md:w-2/3">
          <div>
            <p className="text-4xl font-semibold mb-3"> {toyName}</p>
            <p className="text-xl font-semibold">Price: {price}</p>
            <p>{description}</p>
            <button className="btn btn-warning btn-outline my-2">
              Add to Cart
            </button>
            <div className="md:flex gap-10">
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
