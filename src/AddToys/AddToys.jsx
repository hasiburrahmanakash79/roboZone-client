import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const AddToys = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="card-body rounded-xl bg-gray-100 md:p-20">
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="form-control">
              <input
                type="text"
                name="name"
                placeholder="Toy Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="name"
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
                <option disabled selected>
                  Sub-category
                </option>
                <option>Industrial</option>
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
                placeholder="Rating"
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
                name="code"
                placeholder="Toy Code"
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
