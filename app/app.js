const express = require("express");
const cors = require("cors");
const app = express();
const userRoute = require("./users/userRoute");
const entriRoute = require("./entris/entriRoute");
app.use(express.json());
// register route
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use("/users", userRoute);
app.use("/entri", entriRoute);

app.listen(4001, () => {
  console.log("Server running on http://localhost:4001");
});
