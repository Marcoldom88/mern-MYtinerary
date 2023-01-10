

const express = require("Express");
const app = express();
const port = 5000;

const mongoose = require('mongoose');
const test = require("./routes/cities")
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(cors());

app.use(express.json());

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,

  })
);

app.use("/",test)



app.listen(port, () => {
  console.log("Server is running on " + port + " port");
});

/*app.use('/cities', require('./routes/cities'));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to database');
    
    app.listen(port, () => {
    console.log("Server is running on " + port + " port");
    })
  })
  .catch((error) => {
    console.log(error)
  });*/


