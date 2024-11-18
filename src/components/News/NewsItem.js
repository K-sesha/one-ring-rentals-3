import React from "react";
import "../../styles/NewsItem.css";

const NewsItem = ({ title, content, image, author, date }) => {
  return (
    <div className="item">
      <div className="image">
        <a href="#">
          <span className="btn btn-default">
            <i className="fa fa-file-o"></i> Continue Reading
          </span>
        </a>
        <img src={image} alt={title} className="img-fluid" />
      </div>
      <div className="tag">
        <i className="fa fa-file-text"></i>
      </div>
      <div className="info-blog">
        <h3 className="title">{title}</h3>
        <p className="text">{content}</p>
        <div className="meta">
          <span className="author">
            <i className="fa fa-user"></i> {author}
          </span>
          <span className="date">
            <i className="fa fa-clock-o"></i> {date}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
