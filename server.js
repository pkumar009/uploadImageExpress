const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
//require("./app/routes/routes")(app);
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the application." });
});

// set port, listen for requests
require("./app/routes/routes.js")(app);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
// const db = require("./app/models");
// db.mongoose
//   .connect(db.url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .then(() => {
//     console.log("Connected to the database!");
//   })
//   .catch(err => {
//     console.log("Cannot connect to the database!", err);
//     process.exit();
//   });
