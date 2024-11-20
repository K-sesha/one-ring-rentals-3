"use client";

import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function GenericCarousel() {
  useEffect(() => {
    // Dynamically import Bootstrap's JavaScript to avoid SSR issues
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://via.placeholder.com/1920x605"
            className="d-block w-100"
            alt="Slide 1"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://via.placeholder.com/1920x605"
            className="d-block w-100"
            alt="Slide 2"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default GenericCarousel;
