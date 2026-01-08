const express = require("express");
const CORS = require("cors");
const mongoose = require("mongoose");
const reservation_routes = require("./routes/reservationsRoutes");
const payments_routes = require("./routes/payments");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

app.use(
  CORS({
    origin: ["http://localhost:5173", "https://foodiezeats.vercel.app/"],
    methods: "GET,POST,PUT,PATCH,DELETE",
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send({ message: "Server is running! 🚀" });
});
app.use("/api/reservations", reservation_routes);
app.use("/api/payments", payments_routes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database connected✅");
    app.listen(PORT, () => {
      console.log(`Server is running on port:${PORT}`);
    });
  })
  .catch((err) => console.error("Failed to connect DB!❌\n", err));
