import CreateCitiesCarousel from "./CreateCitiesCarousel";
import { useState, useEffect } from "react";

const BrowseCities = () => {
 const [cities, setCities] = useState();
  const url = "http://localhost:5000/all";
  useEffect(() => {
    const fetchCities = async () => {
      const response = await fetch(url);
      if (!response.ok) throw response;
      const json = await response.json();
      setCities(json);
    }
    fetchCities();
  }, []);


  if (!cities) return
    <div className="spinner-border text-success" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>

  return (
    <>
      <CreateCitiesCarousel cities = {cities} />
    </>
    
  )
}

export default BrowseCities;