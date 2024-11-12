import React from "react";

function NewsItem1() {
    return(
        <div className="item col-md-4">
                <div className="image">
                  <a href="#">
                    <span className="btn btn-default">
                      <i className="fa fa-file-o"></i> Read More
                    </span>
                  </a>
                  <img src="http://placehold.it/766x515" alt="New Rental Regulations" />
                </div>
                <div className="tag">
                  <i className="fa fa-file-text"></i>
                </div>
                <div className="info-blog">
                  <span className="title">New Rental Regulations Announced</span>
                  <p className="text">
                    The government has announced new rental regulations effective from next month. Find out how this impacts you.
                  </p>
                  <div className="meta">
                    <span className="author">
                      <i className="fa fa-user"></i> Admin
                    </span>
                    <span className="date">
                      <i className="fa fa-clock-o"></i> 2024-08-08
                    </span>
                  </div>
                </div>
        </div>
    );
}

export default NewsItem1;