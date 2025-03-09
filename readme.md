🚀 AI-Powered Crypto Market Analyst
A real-time crypto tracking dashboard with an AI chatbot that provides insights, latest prices, gas fees, and news! 💰📈

📌 Features
✅ 🔹 Live Crypto Price Tracker → Get real-time prices for Bitcoin, Ethereum, and more.
✅ ⛽ Ethereum Gas Tracker → Know the latest gas fees using the Etherscan API.
✅ 🤖 AI Chatbot for Crypto Queries → Ask about market trends, coins, and more using Gemini AI.
✅ 📰 Crypto News Feed (Optional) → Get the latest updates from the crypto world.
✅ 🎨 Beautiful, Responsive UI → Styled with animations & effects for an engaging experience.

📂 Folder Structure
Backend (/backend) - Node.js + Express
----------------------------------------
backend/


│── controllers/       # API logic

│   ├── cryptoController.js   # Fetch crypto prices

│   ├── gasController.js      # Fetch Ethereum gas fees

│   ├── chatController.js     # AI chatbot integration

│── routes/          

│   ├── cryptoRoutes.js       # Crypto price routes

│   ├── gasRoutes.js          # Gas tracker routes

│   ├── chatRoutes.js         # Chatbot routes

│── config/          

│   ├── keys.js               # API keys (avoid committing)

│── index.js           # Main Express server

│── package.json       # Backend dependencies

│── .env              # Store API keys securely

-----------------------------------------------------------
Frontend (/frontend) - React.js
-------------------------------------

frontend/


│── public/               # Static assets

│── src/

│   ├── assets/           # Images, icons, etc.

│   ├── components/       # Reusable UI components

│   │   ├── Header.js         # Navigation bar with logo

│   │   ├── CryptoPrices.js   # Crypto price tracker

│   │   ├── NewsFeed.js       # Crypto news feed

│   │   ├── Chatbot.js        # AI chatbot UI

│   │   ├── GasTracker.js     # Ethereum gas tracker

│   ├── pages/           # Main pages

│   │   ├── Home.js           # Landing page

│   │   ├── Dashboard.js      # Main dashboard

│   │   ├── ChatbotPage.js    # Full-page chatbot

│   ├── styles/           # CSS and animations

│   │   ├── animations.css    # Keyframe animations

│   │   ├── main.css          # Global styles

│   ├── App.js             # Main React component

│   ├── index.js           # React entry point

│   ├── api.js             # API calls

│── package.json          # Dependencies

│── .gitignore            # Files to ignore in Git

│── .env                  # Environment variables

🛠️ Tech Stack
Frontend: React.js, Axios, Framer Motion
Backend: Node.js, Express.js
APIs Used:

CoinGecko API → Live crypto prices
Etherscan API → Ethereum gas fees
Gemini AI API → AI chatbot
Crypto News API (Optional)

------------------------------------------------
💻 How to Run Locally
1️⃣ Clone the Repository

git clone https://github.com/abdulkareem97/crypto-platform.git
cd crypto-platform

------------------------------------------
2️⃣ Backend Setup
        cd backend
        npm install

Create a .env file and add:
    ETHERSCAN_API_KEY=your_etherscan_api_key
    GEMINI_API_KEY=your_gemini_api_key

Run the server:
    node index.js
----------------------------------------------------
3️⃣ Frontend Setup
        cd frontend
        npm install
        npm start
Open http://localhost:3000 in the browser.

--------------------------------------------------

🚀 Deployment Guide
Backend Deployment
Free Hosting Options: Render, Railway, or Vercel.
Push backend to GitHub, then deploy to Render (free).
Frontend Deployment
Use Vercel or Netlify for fast, free hosting.
Run:
    npm run build
Then upload the /build folder to Vercel or Netlify.


