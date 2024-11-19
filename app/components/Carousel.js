import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function GenericCarousel() {
  return (
    <div
      id="carouselExample"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      {/* Carousel Indicators */}
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
      </div>

      {/* Carousel Items */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://via.placeholder.com/1920x605?text=Slide+1"
            className="d-block w-100"
            alt="Slide 1"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Slide 1 Title</h5>
            <p>Some description or tagline for the first slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://via.placeholder.com/1920x605?text=Slide+2"
            className="d-block w-100"
            alt="Slide 2"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Slide 2 Title</h5>
            <p>Some description or tagline for the second slide.</p>
          </div>
        </div>
      </div>

      {/* Previous Button */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>

      {/* Next Button */}
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default GenericCarousel;
