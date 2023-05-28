import React, { useState, useEffect } from "react";
import { cities } from "../../helper";
import Dubai from "../../assets/Dubai.JPG";
import AbuDhabi from "../../assets/New York.JPG";
import Sharjah from "../../assets/Riyadh.JPG";
import RasAlKima from "../../assets/Dubai.JPG";
import UmmAlQuwain from "../../assets/New York.JPG";
import Jeddah from "../../assets/Riyadh.JPG";
import Ajman from "../../assets/Riyadh.JPG";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { NavLink } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const CityCarousel = () => {
  const [currentCityIndex, setCurrentCityIndex] = useState(0);
  const [carouselCities, setCarouselCities] = useState([]);

  useEffect(() => {
    const updateCarouselCities = () => {
      const slicedCities = cities.slice(currentCityIndex, currentCityIndex + 3);
      const remainingCities = cities.slice(0, 3 - slicedCities.length);
      setCarouselCities(slicedCities.concat(remainingCities));
    };

    updateCarouselCities();
  }, [currentCityIndex]);

  const handlePrevClick = () => {
    const newIndex =
      currentCityIndex === 0 ? cities.length - 1 : currentCityIndex - 1;
    setCurrentCityIndex(newIndex);
  };

  const handleNextClick = () => {
    const newIndex =
      currentCityIndex === cities.length - 1 ? 0 : currentCityIndex + 1;
    setCurrentCityIndex(newIndex);
  };

  const renderCityImage = (city, imageSrc, altText, isActive) => (
    <NavLink to="/sp">
      <img
        src={imageSrc}
        alt={altText}
        style={{
          objectFit: "cover",
          margin: "auto",
          borderRadius: "1rem",
          height: isActive ? "270px" : "240px",
          width: isActive ? "24vw" : "22vw",
        }}
      />
    </NavLink>
  );

  const cityImages = [
    { city: "Dubai", imageSrc: Dubai, altText: "New York" },
    { city: "Abu Dhabi", imageSrc: AbuDhabi, altText: "Abu Dhabi" },
    { city: "Sharjah", imageSrc: Sharjah, altText: "Sharjah" },
    { city: "Ras Al Kima", imageSrc: RasAlKima, altText: "Ras Al Kima" },
    { city: "Umm Al-Quwain", imageSrc: UmmAlQuwain, altText: "Umm Al-Quwain" },
    { city: "Jeddah", imageSrc: Jeddah, altText: "Jeddah" },
    { city: "Ajman", imageSrc: Ajman, altText: "Ajman" },
  ];

  const carouselItems = carouselCities.map((city, index) => {
    const isActive = index === 1; // Check if the index is the middle index

    const styles = isActive
      ? {
          minHeight: "45vh",
          borderRadius: "2rem",
        }
      : {
          margin: "auto",
          maxHeight: "35vh",
          borderRadius: "0.5rem",
        };

    const { imageSrc, altText } = cityImages.find((item) => item.city === city);

    return (
      <Box
        key={city}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
          fontSize: "3xl",
          ...styles,
          position: "relative",
        }}
      >
        {renderCityImage(city, imageSrc, altText, isActive)}
        <Box
          sx={{
            position: "absolute",
            // bottom: "4",
            // left: "0",
            // right: "0",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignSelf: "end",
            mb: isActive ? 6 :"",

            // textAlign: "butoom",
            // marginTop: "auto",

            textShadow: "6px 6px 5px black",
          }}
        >
          <Typography sx={{ fontWeight: "bold", fontSize: "1.3rem" }}>
            {city}
          </Typography>
        </Box>
      </Box>
    );
  });

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: "20px",
      }}
    >
      <ChevronLeftIcon
        sx={{
          height: "50px",
          width: "50px",
          color: "slategray",
          cursor: "pointer",
        }}
        onClick={handlePrevClick}
      />
      <Box sx={{ display: "flex" }}>{carouselItems}</Box>
      <ChevronRightIcon
        sx={{
          height: "50px",
          width: "50px",
          color: "gray",
          cursor: "pointer",
        }}
        onClick={handleNextClick}
      />
    </Box>
  );
};

export default CityCarousel;
