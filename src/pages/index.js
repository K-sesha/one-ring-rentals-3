import React from "react";
import GenericCarousel from "../components/Carousel";
function HomePage() {
    return (
        <>
            <GenericCarousel />
            {/* BEGIN HOME ADVANCED SEARCH */}
            <div id="home-advanced-search" className="open">
                <div id="opensearch"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <form>
                                <div className="form-group">
                                    <div className="form-control-small">
                                        <div className="input-group date chzn-container" data-datepicker>
                                            <input
                                                placeholder="Arrive on..."
                                                type="text"
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
                                            <option value=""></option>
                                            {[...Array(14).keys()].map((i) => (
                                                <option key={i + 1} value={i + 1}>
                                                    {i + 1} Night{(i + 1) > 1 ? 's' : ''}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="form-control-small">
                                        <select id="search_bedrooms" name="search_bedrooms" data-placeholder="Bedrooms">
                                            <option value=""></option>
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
            <div className="content">
                <div className="container">
                    <div className="row">
                        {/* BEGIN MAIN CONTENT */}
                        <div className="main col-sm-8">
                            <h1 className="section-title">Featured Properties</h1>

                            <div className="grid-style1 clearfix">
                                {[
                                    {
                                        title: "Luxury Apartment with great views",
                                        location: "Upper East Side, New York",
                                        price: "$950",
                                        imageSrc: "http://placehold.it/760x670",
                                        bedrooms: 4,
                                        bathrooms: 3,
                                    },
                                    {
                                        title: "Stunning Villa with 5 bedrooms",
                                        location: "Miami Beach, Florida",
                                        price: "$1,300",
                                        imageSrc: "http://placehold.it/760x670",
                                        bedrooms: 5,
                                        bathrooms: 2,
                                    },
                                    {
                                        title: "Recent construction with 3 bedrooms",
                                        location: "Park Slope, New York",
                                        price: "$560",
                                        imageSrc: "http://placehold.it/760x670",
                                        bedrooms: 3,
                                        bathrooms: 2,
                                    },
                                    {
                                        title: "Modern construction with parking space",
                                        location: "Midtown, New York",
                                        price: "$85",
                                        imageSrc: "http://placehold.it/760x670",
                                        bedrooms: 1,
                                        bathrooms: 2,
                                    },
                                    {
                                        title: "Single Family Townhouse",
                                        location: "Cobble Hill, New York",
                                        price: "$840",
                                        imageSrc: "http://placehold.it/760x670",
                                        bedrooms: 2,
                                        bathrooms: 2,
                                    },
                                    {
                                        title: "3 bedroom villa with garage for rent",
                                        location: "Bal Harbour, Florida",
                                        price: "$150",
                                        imageSrc: "http://placehold.it/760x670",
                                        bedrooms: 3,
                                        bathrooms: 2,
                                    },
                                ].map((property, index) => (
                                    <div className="item col-md-4" key={index}>
                                        <div className="image">
                                            <a href="properties-detail.html">
                                                <h3>{property.title}</h3>
                                                <span className="location">{property.location}</span>
                                            </a>
                                            <img src={property.imageSrc} alt="" />
                                        </div>
                                        <div className="price">
                                            <span>{property.price}</span>
                                            <p>per night</p>
                                        </div>
                                        <ul className="amenities">
                                            <li><i className="icon-bedrooms"></i> {property.bedrooms}</li>
                                            <li><i className="icon-bathrooms"></i> {property.bathrooms}</li>
                                        </ul>
                                    </div>
                                ))}
                            </div>

                            <div className="row">
                                <div className="col-sm-12">
                                    <h1 className="section-title">Popular Regions</h1>
                                    <div id="regions">
                                        {[
                                            "Rhovanion",
                                            "Eriador",
                                            "Bay of Belfalas",
                                            "Mordor",
                                            "The Southwest",
                                            "Arnor",
                                        ].map((region, index) => (
                                            <div className="item" key={index}>
                                                <a href="#">
                                                    <img src="http://placehold.it/194x194" alt="" />
                                                    <h3>{region}</h3>
                                                </a>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <h1 className="section-title">Recent Articles</h1>
                            <div className="grid-style1">
                                {[
                                    {
                                        date: "July 30, 2014",
                                        comments: 2,
                                        tags: "Properties, Prices, best deals",
                                        title: "How to get your dream property for the best price?",
                                        description:
                                            "Sed rutrum urna id tellus euismod gravida. Praesent placerat, mauris ac pellentesque fringilla, tortor libero condimen.",
                                        imgSrc: "http://placehold.it/766x515",
                                    },
                                    {
                                        date: "July 24, 2014",
                                        comments: 4,
                                        tags: "Tips, Mortgage",
                                        title: "7 tips to get the best mortgage.",
                                        description:
                                            "Sed rutrum urna id tellus euismod gravida. Praesent placerat, mauris ac pellentesque fringilla, tortor libero condimen.",
                                        imgSrc: "http://placehold.it/766x515",
                                    },
                                    {
                                        date: "July 05, 2014",
                                        comments: 1,
                                        tags: "Location, Price, House",
                                        title: "House, location or price: What's the most important factor?",
                                        description:
                                            "Sed rutrum urna id tellus euismod gravida. Praesent placerat, mauris ac pellentesque fringilla, tortor libero...",
                                        imgSrc: "http://placehold.it/766x515",
                                    },
                                ].map((article, index) => (
                                    <div className="item col-md-4" key={index}>
                                        <div className="image">
                                            <a href="#">
                                                <span className="btn btn-default">
                                                    <i className="fa fa-file-o"></i> Read More
                                                </span>
                                            </a>
                                            <img src={article.imgSrc} alt="" />
                                        </div>
                                        <div className="tag"><i className="fa fa-file-text"></i></div>
                                        <div className="info-blog">
                                            <ul className="top-info">
                                                <li><i className="fa fa-calendar"></i> {article.date}</li>
                                                <li><i className="fa fa-comments-o"></i> {article.comments}</li>
                                                <li><i className="fa fa-tags"></i> {article.tags}</li>
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
}

export default HomePage;
