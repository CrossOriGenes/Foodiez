const express = require("express");
const CORS = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;
app.use(
  CORS({
    origin: ["http://localhost:5173", "https://foodiez.vercel.app"],
    methods: "GET,POST,PUT,PATCH,DELETE",
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send({ message: "Server is running! 🚀" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port:${PORT}`);
});
