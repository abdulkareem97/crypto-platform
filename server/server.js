import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
import userRoute from "./routes/user.route.js";
import cryptoRoute from "./routes/crypto.route.js";
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = 5000;

//middleware
app.use(express.json());
app.use(cors())

//api
app.use("/api/user", userRoute);
app.use("/api/crypto", cryptoRoute);

app.listen(PORT, () => {
    connectDB(); //databases connect.
    console.log(`SERVER IS RUNNING ON ${PORT}`);
});
