import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useTitle from "../Hooks/useTitle";
import Swal from "sweetalert2";

const AddToys = () => {
  useTitle('AddToy')
  const { user } = useContext(AuthContext);

  const handleAddToy = event =>{
    event.preventDefault()
    const form = event.target;
    const toyName = form.toyName.value
    const sellerName = form.sellerName.value
    const email = form.email.value
    const category = form.category.value
    const price = form.price.value
    const Rating = form.Rating.value
    const quantity = form.quantity.value
    const image = form.image.value
    const description = form.description.value

    const order = {
      toyName, 
      sellerName, 
      email, 
      category, 
      price, 
      Rating, 
      quantity, 
      image, 
      description
    }
    console.log(order);

    
    fetch('https://robot-world-server.vercel.app/allToys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            Swal.fire(
                'Successful',
                'Your order is complete',
                'success'
              )
        })
     
  }

  return (
    <div>
        <div className="mx-auto text-center flex flex-col justify-center items-center">
            <img src="https://i.ibb.co/6gYhYsf/gold-robot-logo.png" className="w-20 mb-4" alt="" />
            <h1 className="text-center text-4xl font-semibold mb-7">Added your favorite toys</h1>
        </div>
      <div className="card-body rounded-xl bg-gray-100 md:p-20">
        <form onSubmit={handleAddToy}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="form-control">
              <input
                type="text"
                name="toyName"
                placeholder="Toy Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="sellerName"
                placeholder="Seller Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="email"
                defaultValue={user?.email}
                placeholder="Seller email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <select className="input input-bordered" name="category">
                <option selected>Industrial</option>
                <option>Remote control</option>
                <option>AI Robot</option>
                <option>Robotic Car</option>
              </select>
            </div>

            <div className="form-control">
              <input
                type="text"
                name="price"
                placeholder="Price"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="Rating"
                placeholder="Rating up to 5"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="quantity"
                placeholder="Available quantity"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="image"
                placeholder="Toy Photo URL"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <textarea
              name="description"
              placeholder="Toy description"
              className="input input-bordered pt-2 h-20"
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-warning">ADD TOY</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddToys;
