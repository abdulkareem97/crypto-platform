import React, { useState } from "react";
import axios from "axios";

const Chatbot = () => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const handleSendMessage = async () => {
    if (!message) return;

    try {
      const res = await axios.post("http://localhost:5000/api/chat", { message });
      setResponse(res.data.reply);
    } catch (error) {
      setResponse("Error getting response.");
    }
  };

  return (
    <div className="chatbot">
      <h2>AI Chatbot</h2>
      <input 
        type="text" 
        placeholder="Ask a crypto question..." 
        value={message} 
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleSendMessage}>Ask</button>
      <p>{response}</p>
    </div>
  );
};

export default Chatbot;
