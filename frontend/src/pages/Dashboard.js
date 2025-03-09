import React from "react";
import CryptoPrices from "../components/CryptoPrices";
import GasTracker from "../components/GasTracker";
import Chatbot from "../components/Chatbot";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>🚀 Crypto Market Dashboard</h1>
      <CryptoPrices />
      <GasTracker />
      <Chatbot />
    </div>
  );
};

export default Dashboard;
