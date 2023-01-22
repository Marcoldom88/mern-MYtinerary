/* eslint-disable default-case */
import { useState } from "react";
import "../stylesheets/CreateCitiesCarousel.css";
import Carousel from "./Carousel";

const CreateCitiesCarousel = ({ cities }) => {
  const [data, setData] = useState(Object.values(cities))
  const [searchInput, setSearchInput] = useState("");
  //filter cards by search input field
  const handleChange = (e) => {
  e.preventDefault();
    setSearchInput(e.target.value.toLowerCase());
    if (searchInput.length > 0) {
      setData(data.filter(city => city.name.match(searchInput)));
          } 
  };
  console.log(data)
  
  const handleOnClick = (e) => {
    setData(Object.values(cities))
    setSearchInput("")
  } 
  
  //prevent keyboard to cover input when using on mobile phones
    document.body.addEventListener("focus", event => {
    const target = event.target;
    switch (target.tagName) {
        case "INPUT":
        case "TEXTAREA":
        case "SELECT":
            document.body.classList.add("keyboard");
    }
    }, true); 
    document.body.addEventListener("blur", () => {
        document.body.classList.remove("keyboard");
    }, true); 

  return (
    <main className="container">
      <div className="background-container">
        <img className="MYtinerary" src="assets/MYtineraryLogo.png" alt="MYtinerary Logo"></img>
        <form className="filter" >
          <label htmlFor="filter">Search for a city</label>
          <input id="filter" className="filter" type="text"
          value={searchInput} onChange={handleChange}></input>
        </form>
        <div className='card-container'>
          <Carousel data={data} />
        </div>
        <div className="button-container">
          <button className="carousel-button"
            onClick={handleOnClick}>Search for a new city</button>
        </div>
      </div>
    </main>
)};
  
export default CreateCitiesCarousel;

 