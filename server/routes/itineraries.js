const express = require('express');
const router = express.Router();
const itineraryModel = require('../model/itineraryModel')

router.get('/test', (req, res) => {
  res.send({msg:'itineraries test route'})
});

//get all itineraries
router.get('/all', (req, res) => {
  itineraryModel.find({})
    .then(files => {
      res.send(files)
    })
    .catch(err => console.log(err));
});

//get all itineraries related to a specific city
router.get('/:title', (req, res) => {
  let urlParam = req.params.title;
   itineraryModel.find({ title: urlParam})
    .then(files => {
      res.send(files)
    })
    .catch(err => console.log(err));
});

//post new itinerary
router.post('/', (req, res) => {
  const newItinerary = new itineraryModel({
    title: req.body.title,
    profilePicture: req.body.profilePicture,
    rating: req.body.rating,
    duration: req.body.duration,
    price: req.body.price,
    hashtags: req.body.hashtags,

  })
  newItinerary.save()
    .then(itinerary => {
      res.send(itinerary)
    })
    .catch(err => {
      res.status(500).send("Server error")
    })
});
 
module.exports=router;