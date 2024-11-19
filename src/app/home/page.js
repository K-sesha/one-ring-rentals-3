import React from "react";
import GenericCarousel from "../../components/Carousel";
import properties from "../../data/properties.json";
import regions from "../../data/regions.json";
import articles from "../../data/articles.json";
import "../styles/index.css";

const HomePage = () => {
    return (
        <>
            <GenericCarousel />
            {/* BEGIN HOME ADVANCED SEARCH */}
            <div id="home-advanced-search" className="open">
                <div id="opensearch"></div>
                <div className="container text-center">
                    <div className="row">
                        <div className="col-sm-12">
                            <form>
                                <div className="form-group">
                                    <div className="form-control-small">
                                        <div className="input-group date chzn-container" data-datepicker>
                                            <input
                                                type="text"
                                                placeholder="Arrive on..."
                                                className="form-control"
                                                data-date-format="DD/MM/YYYY"
                                            />
                                            <span className="input-group-addon">
                                                <span className="glyphicon glyphicon-calendar"></span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="form-control-small">
                                        <select id="search_status" name="search_status" data-placeholder="Stay...">
                                            <option value="">Select Duration</option>
                                            {[...Array(14).keys()].map((i) => (
                                                <option key={i} value={i + 1}>
                                                    {i + 1} Night{(i + 1) > 1 ? "s" : ""}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="form-control-small">
                                        <select id="search_bedrooms" name="search_bedrooms" data-placeholder="Bedrooms">
                                            <option value="">Select Bedrooms</option>
                                            {[...Array(5).keys()].map((i) => (
                                                <option key={i} value={i}>
                                                    {i}
                                                </option>
                                            ))}
                                            <option value="5plus">5+</option>
                                        </select>
                                    </div>
                                    <div className="form-control-large">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="location"
                                            placeholder="City, State, Country, etc..."
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-fullcolor">
                                        Search
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* END HOME ADVANCED SEARCH */}

            {/* BEGIN CONTENT WRAPPER */}
            <div className="content d-flex justify-content-center align-items-center vh-100">
                <div className="container text-center">
                    <div className="row">
                        {/* BEGIN MAIN CONTENT */}
                        <div className="main col-sm-8">
                            <h1 className="section-title">Featured Properties</h1>
                            <div className="grid-style1 clearfix">
                                {properties.map((property, index) => (
                                    <div className="item col-md-4" key={index}>
                                        <div className="image">
                                            <a href="properties-detail.html">
                                                <h3>{property.title}</h3>
                                                <span className="location">{property.location}</span>
                                            </a>
                                            <img
                                                src={property.imageSrc}
                                                alt={`Image of ${property.title}`}
                                            />
                                        </div>
                                        <div className="price">
                                            <span>{property.price}</span>
                                            <p>per night</p>
                                        </div>
                                        <ul className="amenities">
                                            <li>
                                                <i className="icon-bedrooms"></i> {property.bedrooms} Bedrooms
                                            </li>
                                            <li>
                                                <i className="icon-bathrooms"></i> {property.bathrooms} Bathrooms
                                            </li>
                                        </ul>
                                    </div>
                                ))}
                            </div>

                            <h1 className="section-title">Popular Regions</h1>
                            <div className="regions">
                                {regions.map((region, index) => (
                                    <div className="item" key={index}>
                                        <a href="#">
                                            <img 
                                                src="http://placehold.it/194x194"
                                                alt={`Image of ${region}`}
                                            />
                                            <h3>{region}</h3>
                                        </a>
                                    </div>    
                                ))}
                            </div>

                            <h1 className="section-title">Recent Articles</h1>
                            <div className="grid-style1">
                                {articles.map((article, index) => (
                                    <div className="item col-md-4" key={index}>
                                        <div className="image">
                                            <a href="#">
                                                <span className="btn btn-default">
                                                    <i className="fa fa-file-o"></i> Read More
                                                </span>
                                            </a>
                                            <img src={article.imgSrc} alt={article.title} />
                                        </div>
                                        <div className="tag">
                                            <i className="fa fa-file-text"></i>
                                        </div>
                                        <div className="info-blog">
                                            <ul className="top-info">
                                                <li>
                                                    <i className="fa fa-calendar"></i> {article.date}
                                                </li>
                                                <li>
                                                    <i className="fa fa-comments-o"></i> {article.comments}
                                                </li>
                                                <li>
                                                    <i className="fa fa-tags"></i> {article.tags}
                                                </li>
                                            </ul>
                                            <h3>
                                                <a href="#">{article.title}</a>
                                            </h3>
                                            <p>{article.description}</p>
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
