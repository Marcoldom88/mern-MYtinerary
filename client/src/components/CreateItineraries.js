import "../stylesheets/CreateItineraries.css";
//import { useState } from "react";

const CreateItineraries = ({ itineraries }) => {

  
  return (
    <>
      {Object.values(itineraries).map(itinerary => <Itinerary key={itinerary._id} itinerary={itinerary} />)}
    </>  
  )};
  
export default CreateItineraries;

const Itinerary = ({ itinerary }) => (
  <div className="itinerary-frame">
    <div className="picture-container">
      <img src={itinerary.profilePicture} alt={itinerary.title}></img>
    </div>
    <p><strong>City:</strong> {itinerary.title}</p>
    <p><strong>Rating:</strong> {itinerary.rating}</p>
    <p><strong>Duration:</strong> {itinerary.duration}</p>
    <p><strong>Price:</strong> {itinerary.price}</p>
    <p><strong>Description:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquet eu lorem et iaculis. Morbi dui sapien, rhoncus sit amet elementum ac, ullamcorper vel nibh. Praesent sollicitudin eu lacus at suscipit. Mauris consectetur quam id turpis dictum, vel semper erat volutpat. Maecenas tristique dignissim nunc eget placerat. Mauris pretium erat in tellus volutpat, eu vehicula ligula sodales. Integer nibh felis, varius at dui et, pharetra auctor orci. Donec vulputate pharetra tortor a tristique. Ut ornare elit a rutrum sagittis. Nulla lorem metus, gravida eget orci ut, iaculis pretium enim. Fusce eu diam non sapien eleifend consectetur et quis lorem. Sed sit amet nibh vel libero malesuada dapibus. Nulla et tincidunt lectus. Integer eu vulputate leo. Ut pharetra rutrum ultrices. Donec mollis turpis sed eros egestas eleifend.</p>
    <p><strong>Hashtags:</strong><em>{itinerary.hashtags}</em></p>
  </div>
)
 