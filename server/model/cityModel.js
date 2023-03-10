const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
  name: {
      type: String,
      required: true
  },
  country: {
      type: String,
      required: true
  },
  image: {
      type: String
  }
})

//export model
module.exports = mongoose.model('city', citySchema);