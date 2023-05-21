
const SubCategory = ({robots}) => {
  const { toyName, image, price, Rating } = robots;
  return (
    <div className="border p-3 rounded-md hover:border-yellow-300">
      <div className="avatar">
        <div className="w-full rounded">
          <img src={image} />
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-semibold">{toyName}</h1>
        <p>Price: ${price}</p>
        <p>Rating: {Rating}</p>
      </div>
    </div>
  );
};

export default SubCategory;
