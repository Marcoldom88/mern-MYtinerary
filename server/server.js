

const express = require("Express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 5000;
const mongoose = require('mongoose');
const db = require('./keys').mongoURI;
const citiesRoute = require("./routes/cities");
const itinerariesRoute = require("./routes/itineraries")


app.use(express.json());

app.use(cors());

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/", citiesRoute);

app.use("/itineraries", itinerariesRoute);

app.listen(port, () => {
  console.log("Server is running on " + port + " port");
});

mongoose
  .set('strictQuery', false)
  .connect(db)
  .then(() => console.log('Connected to database'))
  .catch(err => console.log(err));


