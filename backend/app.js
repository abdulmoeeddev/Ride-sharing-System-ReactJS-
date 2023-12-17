const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const app = express();


const port = 8080;
const dbconnection = require("./utils/db");

const userroutes = require("./routes/userRoutes");
const rideRoutes = require("./routes/RideRoutes");
const uploadRoutes = require("./routes/UploadRoutes");
const rideRequestRoutes = require("./routes/rideRequestRoutes");

app.use(bodyparser.json());
app.use(bodyparser.text());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use("/api", userroutes);
app.use("/api", rideRoutes);
app.use("/uploads", express.static("uploads"));
app.use("/api/upload", uploadRoutes);
app.use("/api", rideRequestRoutes);

dbconnection;

app.listen(port, () => {
  console.log(`Port  is listening at local host ${port}`);
});
