import React, { useState, useEffect } from "react";
import axios from "axios";

const GasTracker = () => {
  const [gasPrice, setGasPrice] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const d = await axios.get("http://localhost:5000/api/gas/prices");
      const res = await d.data();
      setGasPrice(res.data)
    }

    // getData()
    
      // .then(res => setGasPrice(res.data))
      // .catch(err => console.error("Error fetching gas prices:", err));
  }, []);

  return (
    <div className="gas-tracker">
      <h2>Ethereum Gas Prices</h2>
      {gasPrice ? (
        <p>Fast: {gasPrice.FastGasPrice} Gwei | Safe: {gasPrice.SafeGasPrice} Gwei</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default GasTracker;
