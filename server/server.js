

const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(cors());


app.listen(port, () => {
  console.log("Server is running on " + port + " port");
});

//const mongoose = require('mongoose');
//await mongoose.connect(process.env.URI);

//app.use('/cities', require('./routes/cities'));
