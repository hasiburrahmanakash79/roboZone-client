import { FaEdit, FaTrashAlt } from "react-icons/fa";

const MyToyDetails = ({ myToy, handleDelete }) => {
  const { _id, image, price, toyName, category, quantity } = myToy;

  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="w-24 rounded">
              <img data-aos="zoom-out" src={image} />
            </div>
          </div>
          <div>
            <div className="font-bold">{toyName}</div>
            <div className="text-sm opacity-50">{category}</div>
          </div>
        </div>
      </td>
      <td>
        <span className="badge badge-ghost badge-lg">${price}</span>
      </td>
      <td>{quantity}</td>
      <th>
        <div className="flex gap-10">
          <button>
            <FaEdit className="text-3xl"></FaEdit>
          </button>
          <button onClick={() => handleDelete(_id)}>
            <FaTrashAlt className="text-2xl text-red-500"></FaTrashAlt>
          </button>
        </div>
      </th>
    </tr>
  );
};

export default MyToyDetails;
