const express = require("express");
const cors = require('cors');
const connect = require("./config/db");
const userRoute = require("./routes/userRoutes");
const dotenv = require("dotenv").config({ path: "./config/.env" });
connect();
const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use("/api/v1", userRoute)
app.listen(process.env.PORT || 5000, () => {
    console.log(`app is running at port ${process.env.PORT}`)
})