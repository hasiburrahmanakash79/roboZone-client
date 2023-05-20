import { FaTrashAlt } from "react-icons/fa";

const MyToyDetails = ({ myToy }) => {
  const { image, price, toyName, category, quantity } = myToy;

  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="w-24 rounded">
              <img src={image} />
            </div>
          </div>
          <div>
            <div className="font-bold">{toyName}</div>
            <div className="text-sm opacity-50">{category}</div>
          </div>
        </div>
      </td>
      <td>
        <span className="badge badge-ghost badge-lg">
          {price}
        </span>
      </td>
      <td>{quantity}</td>
      <th>
        <div>
            <FaTrashAlt></FaTrashAlt>
        </div>
      </th>
    </tr>
  );
};

export default MyToyDetails;
