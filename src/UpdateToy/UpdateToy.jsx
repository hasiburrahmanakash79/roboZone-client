import { useLoaderData, useParams } from "react-router-dom";




const UpdateToy = () => {
  const  toyDetails = useLoaderData()
  const {id} = useParams()
  console.log(id);
  
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const update = {
      price,
      quantity,
      description
    }
    console.log(update);
    fetch(`http://localhost:5000/allToys/update/${id}`,{
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(update)
    })
    .then(res => {
      console.log(res);
    })
    
  }
  
  return (
    <div className="hero py-10 md:py-32 bg-base-200">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gray-300">
        <div><h1 className="text-center text-2xl md:text-3xl font-semibold py-5">Update toy details</h1></div>
          <form onSubmit={handleUpdate} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                name="price"
                defaultValue={toyDetails?.price}
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
                defaultValue={toyDetails?.quantity}
                placeholder="Quantity"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                name="description"
                defaultValue={toyDetails?.description}
                placeholder="Description"
                className="input input-bordered pt-2 h-20"
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
