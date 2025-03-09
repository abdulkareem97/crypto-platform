import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Chatbot from "./components/Chatbot";

const App = () => {
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<><Header /><Dashboard /></>} />
          <Route path="/chatbot" element={<><Header /><Chatbot /></>} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
};

export default App;
