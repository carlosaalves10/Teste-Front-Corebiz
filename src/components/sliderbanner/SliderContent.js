
import React from "react";

function SliderContent({ activeIndex, sliderImage }) {
  return (
    <section>
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img className="slide-image" src={slide.urls} alt="" />
          <div className="textos-slides">
            <h4 className="slide-title">{slide.title}</h4>
            <h1 className="slide-text">{slide.description}</h1>
          </div>
        </div>
      ))}
    </section>
  );
}

export default SliderContent;