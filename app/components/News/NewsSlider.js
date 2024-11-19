import React, { useState } from "react";
import NewsItem from "./NewsItem";
import newsData from "../../data/newsData.json";
import "../../styles/NewsSlider.css";

function NewsSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % newsData.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? newsData.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="news-slider container d-flex justify-content-center align-items-center flex-column">
            <h2 className="mb-4 text-center">Latest News</h2>
            <div className="slider-content d-flex align-items-center">
                <button
                    className="btn btn-primary mx-2"
                    onClick={prevSlide}
                >
                    Previous
                </button>
                <div className="news-item-wrapper mx-2 col-md-8">
                    <NewsItem {...newsData[currentIndex]} />
                </div>
                <button
                    className="btn btn-primary mx-2"
                    onClick={nextSlide}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default NewsSlider;
