import React from "react";
import NewsItem1 from "../components/NewsItem1";

function NewsPage() {
  return (
    <div className="content">
      <div className="container">
        <div className="row">
          <div className="main col-sm-12">
            <h1 className="section-title">Latest News</h1>

            {/* News Grid */}
            <div className="grid-style1 clearfix">
              
              {/* News Item 1 */}
              <NewsItem1 />

              {/* News Item 2 */}
              <div className="item col-md-4">
                <div className="image">
                  <a href="#">
                    <span className="btn btn-default">
                      <i className="fa fa-file-o"></i> Read More
                    </span>
                  </a>
                  <img src="http://placehold.it/766x515" alt="Top 10 Rental Properties in Sydney" />
                </div>
                <div className="tag">
                  <i className="fa fa-file-text"></i>
                </div>
                <div className="info-blog">
                  <span className="title">Top 10 Rental Properties in Sydney</span>
                  <p className="text">
                    Explore our list of the top 10 rental properties in Sydney for the month of August.
                  </p>
                  <div className="meta">
                    <span className="author">
                      <i className="fa fa-user"></i> Admin
                    </span>
                    <span className="date">
                      <i className="fa fa-clock-o"></i> 2024-08-07
                    </span>
                  </div>
                </div>
              </div>

              {/* News Item 3 */}
              <div className="item col-md-4">
                <div className="image">
                  <a href="#">
                    <span className="btn btn-default">
                      <i className="fa fa-file-o"></i> Read More
                    </span>
                  </a>
                  <img src="http://placehold.it/766x515" alt="Customer Stories: Finding the Perfect Home" />
                </div>
                <div className="tag">
                  <i className="fa fa-file-text"></i>
                </div>
                <div className="info-blog">
                  <span className="title">Customer Stories: Finding the Perfect Home</span>
                  <p className="text">
                    Read our customer stories about their journey to finding the perfect home through One Ring Rentals.
                  </p>
                  <div className="meta">
                    <span className="author">
                      <i className="fa fa-user"></i> Admin
                    </span>
                    <span className="date">
                      <i className="fa fa-clock-o"></i> 2024-08-06
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsPage;
