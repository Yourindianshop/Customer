import { useState, useEffect } from "react";
import "./Slider.css"; // Import your CSS file

const slideStyles = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const sliderStyles = {
  position: "relative",
  height: "100%",
};

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
};

const dotStyle = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",
};

const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(goToNext, 5000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  const slideImageUrl = slides[currentIndex].url;

  return (
    <>
      {" "}
      <div style={sliderStyles} className="sm:h-[10%] mt-[3rem]">
        <div>
          <div
            onClick={goToPrevious}
            style={leftArrowStyles}
            className="sm:hidden cursor-pointer"
          ></div>
          <div
            onClick={goToNext}
            style={rightArrowStyles}
            className="sm:hidden"
          ></div>
        </div>
        <div style={{ ...slideStyles }}>
          <img
            src={slideImageUrl}
            alt="Picture "
            height={450}
            width={950}
            className="slide sm:h-52"
          />
        </div>
      </div>
    </>
  );
};

export default Slider;
