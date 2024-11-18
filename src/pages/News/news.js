import React from "react";
import NewsSlider from "../../components/News/NewsSlider";
import "../../styles/news.css";

function NewsPage() {
  return (
    <div className="content d-flex justify-content-center align-items-center vh-100">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="main col-sm-12">
            <h1 className="section-title mb-4">Latest News</h1>

            <NewsSlider />

          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsPage;
