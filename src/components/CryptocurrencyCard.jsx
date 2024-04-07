import React from 'react';

const CryptocurrencyCard = ({ currency, price, description, symbol }) => {


  return (
    <div className="bg-zinc-900 rounded-lg shadow-md p-6 border border-gray-200 hover:border-green-600 transition duration-300 ease-in-out transform hover:scale-105 mr-6">
      <div className="flex items-center mb-4 text-white font-bold text-2xl">
        <span className="mr-2 text-green-600" dangerouslySetInnerHTML={{ __html: symbol }}></span>
        <h3>{currency}</h3>
      </div>
      <div className="flex items-center mb-4 text-lg font-semibold text-green-600">
        <p className="mr-1">Price: {price} <span className="mr-2" dangerouslySetInnerHTML={{ __html: symbol }}></span></p>
      </div>
      <p className="text-sm text-white">{description}</p>
    </div>
  );
};

export default CryptocurrencyCard;
