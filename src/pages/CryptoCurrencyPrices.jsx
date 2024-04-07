import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CryptocurrencyCard from '../components/CryptocurrencyCard';

function CryptoCurrencyPrices() {
  const [bitcoinPrices, setBitcoinPrices] = useState(null);

  useEffect(() => {
    const fetchBitcoinPrices = async () => {
      try {
        const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
        setBitcoinPrices(response.data.bpi);
      } catch (error) {
        console.error('Error fetching Bitcoin prices:', error);
      }
    };

    fetchBitcoinPrices();
  }, []);

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl text-white text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold mb-4">Bitcoin Price in Different Currencies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {bitcoinPrices &&
          Object.entries(bitcoinPrices).map(([currency, { rate, description, symbol }]) => (
            <CryptocurrencyCard key={currency} currency={currency} price={rate} symbol={symbol} description={description} />
          ))}
      </div>
    </div>
  );
}

export default CryptoCurrencyPrices