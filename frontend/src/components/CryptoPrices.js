import React, { useState, useEffect } from "react";
import axios from "axios";

const CryptoPrices = () => {
  const [prices, setPrices] = useState({});

  useEffect(() => {

    const fetchCoinData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/crypto/price", {
          params: {
            coinId: "bitcoin",
            currency: "usd"
          }
        });
        setPrices(response.data);
      } catch (err) {
        // setError(err.message);
      }
    };

    fetchCoinData();
   
  }, []);

  return (
    <div className="crypto-prices">
      <h2>Crypto Prices</h2>
      {prices.bitcoin && (
        <p>Bitcoin: ${prices.bitcoin.usd}</p>
      )}
      {prices.ethereum && (
        <p>Ethereum: ${prices.ethereum.usd}</p>
      )}
    </div>
  );
};

export default CryptoPrices;
