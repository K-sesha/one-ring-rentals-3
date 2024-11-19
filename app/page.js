"use client";
import React from "react";
import GenericCarousel from "./components/Carousel";
import properties from "./data/properties.json";
import regions from "./data/regions.json";
import articles from "./data/articles.json";

const HomePage = () => {
    return (
        <>
            <GenericCarousel />
            {/* BEGIN HOME ADVANCED SEARCH */}
            <div id="home-advanced-search" className="open py-5 bg-light">
                <div className="container text-center">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10">
                            <form>
                                <div className="row g-3">
                                    {/* Date Input */}
                                    <div className="col-md-3">
                                        <input
                                            type="date"
                                            className="form-control"
                                            placeholder="Arrive on..."
                                        />
                                    </div>
                                    {/* Duration Input */}
                                    <div className="col-md-2">
                                        <select
                                            id="search_status"
                                            name="search_status"
                                            className="form-select"
                                        >
                                            <option value="">Stay...</option>
                                            {[...Array(14).keys()].map((i) => (
                                                <option key={i} value={i + 1}>
                                                    {i + 1} Night{(i + 1) > 1 ? "s" : ""}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    {/* Bedrooms Input */}
                                    <div className="col-md-2">
                                        <select
                                            id="search_bedrooms"
                                            name="search_bedrooms"
                                            className="form-select"
                                        >
                                            <option value="">Bedrooms</option>
                                            {[...Array(5).keys()].map((i) => (
                                                <option key={i} value={i}>
                                                    {i}
                                                </option>
                                            ))}
                                            <option value="5plus">5+</option>
                                        </select>
                                    </div>
                                    {/* Location Input */}
                                    <div className="col-md-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="City, State, Country..."
                                        />
                                    </div>
                                    {/* Submit Button */}
                                    <div className="col-md-2">
                                        <button
                                            type="submit"
                                            className="btn btn-primary w-100"
                                        >
                                            Search
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* END HOME ADVANCED SEARCH */}

            {/* BEGIN CONTENT WRAPPER */}
            <div className="content py-5">
                <div className="container">
                    <div className="row">
                        {/* BEGIN MAIN CONTENT */}
                        <div className="col-md-8">
                            <h1 className="section-title mb-4">Featured Properties</h1>
                            <div className="row g-4">
                                {properties.map((property, index) => (
                                    <div className="col-md-4" key={index}>
                                        <div className="card h-100">
                                            <img
                                                src={property.imageSrc}
                                                className="card-img-top"
                                                alt={`Image of ${property.title}`}
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">{property.title}</h5>
                                                <p className="card-text">{property.location}</p>
                                                <p className="card-text">
                                                    <strong>{property.price}</strong> per night
                                                </p>
                                                <ul className="list-unstyled">
                                                    <li>{property.bedrooms} Bedrooms</li>
                                                    <li>{property.bathrooms} Bathrooms</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <h1 className="section-title mt-5 mb-4">Popular Regions</h1>
                            <div className="row g-4">
                                {regions.map((region, index) => (
                                    <div className="col-md-3" key={index}>
                                        <div className="card h-100">
                                            <img
                                                src="http://placehold.it/194x194"
                                                className="card-img-top"
                                                alt={`Image of ${region}`}
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">{region}</h5>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <h1 className="section-title mt-5 mb-4">Recent Articles</h1>
                            <div className="row g-4">
                                {articles.map((article, index) => (
                                    <div className="col-md-4" key={index}>
                                        <div className="card h-100">
                                            <img
                                                src={article.imgSrc}
                                                className="card-img-top"
                                                alt={article.title}
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">{article.title}</h5>
                                                <p className="card-text">{article.description}</p>
                                                <a href="/" className="btn btn-outline-primary">
                                                    Read More
                                                </a>
                                            </div>
                                            <div className="card-footer">
                                                <small className="text-muted">
                                                    {article.date} | {article.comments} Comments |{" "}
                                                    {article.tags}
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* END MAIN CONTENT */}
                    </div>
                </div>
            </div>
            {/* END CONTENT WRAPPER */}
        </>
    );
};

export default HomePage;
