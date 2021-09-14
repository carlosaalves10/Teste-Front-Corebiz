import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight} from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import "./slider.css"

function Arrows({prevSlide, nextSlide}){
    return <div className="arrows">
        <span className="prev"><FontAwesomeIcon icon={faChevronLeft}/> </span>
        <span className="next"><FontAwesomeIcon icon={faChevronRight}/> </span>
    </div>;
}
export default Arrows;