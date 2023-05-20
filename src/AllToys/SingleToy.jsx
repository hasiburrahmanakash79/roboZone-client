import { FaCaretRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const SingleToy = ({ toy }) => {
  const { _id, category, price, quantity, toyName, sellerName } = toy;

  // const handleDetails = (id) => {
  //   fetch(`http://localhost:5000/allToys/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // };

  return (
    <tr>
      <td>
        <FaCaretRight></FaCaretRight>
      </td>
      <td>{sellerName}</td>
      <td>{toyName}</td>
      <td>{category}</td>
      <td>{quantity}</td>
      <td>${price}</td>
      <td>
        <Link to={`/toyDetail/${_id}`}>
          <button className="btn btn-sm">View Details</button>
        </Link>
      </td>
    </tr>
  );
};

export default SingleToy;
