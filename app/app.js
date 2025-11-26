const express = require("express");
const cors = require("cors");
const app = express();
const userRoute = require("./users/userRoute");
const entriRoute = require("./entris/entriRoute");
const authRoute = require("./auth/authRoute");
app.use(express.json());
// register route
app.use(
  cors({
    origin: ["http://localhost:5173", "https://sistem-tamu.vercel.app"],
    credentials: true,
  })
);

app.use("/users", userRoute);
app.use("/entri", entriRoute);
app.use("/auth", authRoute);

app.listen(4001, () => {
  console.log("Server running on http://localhost:4001");
});
