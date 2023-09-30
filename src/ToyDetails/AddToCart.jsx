import { useState } from 'react';

const AddToCart = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-lg bg-white">
      <h2 className="text-2xl font-semibold mb-6">Payment Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="cardNumber" className="block text-gray-700 text-sm font-bold mb-2">
            Card Number
          </label>
          <input
            type="text"
            id="cardNumber"
            className="form-input w-full border rounded-md px-3 py-2"
            placeholder="Enter your card number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="expiry" className="block text-gray-700 text-sm font-bold mb-2">
            Expiry Date
          </label>
          <input
            type="text"
            id="expiry"
            className="form-input w-full border rounded-md px-3 py-2"
            placeholder="MM/YY"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="cvv" className="block text-gray-700 text-sm font-bold mb-2">
            CVV
          </label>
          <input
            type="text"
            id="cvv"
            className="form-input w-full border rounded-md px-3 py-2"
            placeholder="CVV"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddToCart;
