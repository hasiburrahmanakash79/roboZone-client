const UpdateToy = () => {
  return (
    <div className="hero py-10 md:py-32 bg-base-200">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gray-300">
        <div><h1 className="text-center text-2xl md:text-3xl font-semibold py-5">Update toy details</h1></div>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                name="price"
                placeholder="Price"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <input
                type="text"
                name="quantity"
                placeholder="Quantity"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                type="text"
                name="description"
                placeholder="Description"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-black">Submit</button>
            </div>
          </form>
        </div>
      </div>
  );
};

export default UpdateToy;
