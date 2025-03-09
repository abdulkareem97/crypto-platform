import React from "react";
import { Link } from "react-router-dom";
import "./../styles/main.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">🚀 Crypto Analyst</div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/chatbot">AI Chatbot</Link>
      </nav>
    </header>
  );
};

export default Header;
