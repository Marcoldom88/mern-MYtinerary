import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import CreateItineraries from "./CreateItineraries";
import "../stylesheets/CreateItineraries.css";
import { useState, useEffect } from "react";

const Itineraries = () => {
  const [itineraries, setItineraries] = useState();
  const url = "http://localhost:5000/itineraries/all";
  const params = useParams();
  useEffect(() => {
    const fetchItineraries = async () => {
      const response = await fetch(url);
      if (!response.ok) throw response;
      const json = await response.json();
      const filteredItinerary = Object.values(json)
    .filter((itinerary) => itinerary.title === params.title);
      setItineraries(filteredItinerary);
    }
    fetchItineraries()
  }, [params]);

  if (!itineraries) return
    <div className="spinner-border text-success" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>

  return (
    <main className="itinerariesContainer">
      <div className="itinerariesBackground">
      <img className="logo-itinerary" src="/assets/MYtineraryLogo.png" alt="MYtinerary Logo"></img>
        <CreateItineraries itineraries={itineraries} />
        <button className="itinerary-button">
          <Link to={{ pathname: '/BrowseCities' }}>
            Back to cities
          </Link>
        </button>
      </div>
      <footer className="fixed-bottom">
        <Link to={{ pathname: '/' }}>
          <img className="home-icon" src="/assets/homeIcon.png" alt="House icon"></img>
        </Link>
      </footer>
    </main>  
  )
}

export default Itineraries;