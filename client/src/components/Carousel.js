import { useState } from "react";
import CitiesCards from './CitiesCards';
import "../stylesheets/CreateCitiesCarousel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faChevronLeft,  faChevronRight,} from "@fortawesome/free-solid-svg-icons";


const Carousel = ({data}) => {
    const [index, setIndex] = useState(0);
     //slide control for carousel
  const slideLeft = () => {
    if (index - 1 >= 0) {
      setIndex(index - 1);
    }
  };
  const slideRight = () => {
    if (index + 1 <= data.length - 1) {
      setIndex(index + 1);
    }
  };

  return(
    <>
      <FontAwesomeIcon
        onClick={slideLeft}
        className="leftBtn"
        icon={faChevronLeft}
      />
      <FontAwesomeIcon
        onClick={slideRight}
        className="rightBtn"
        icon={faChevronRight}
      />
      {data.sort((a, b) => a.name.localeCompare(b.name))
      .map((city, n) => {
        let position =
          n > index ? "nextCard" : n === index ? "activeCard" : "prevCard";
        return (
          <CitiesCards
            key={n}
            {...city}
            cardStyle={position}
          />
        );
      })}
    </>
  )
};

export default Carousel;