import React from "react";

function RegionsPage() {
    return (
      <>
        <div className="content">
        <div className="container">
          <div className="row">
            <div className="main col-sm-12">
              <h1 className="section-title">Regions in Australia</h1>
              <div className="grid-style1 clearfix">
                <div className="item col-md-4">
                  <div className="image">
                    <a href="#">
                      <h3>Sydney</h3>
                      <span className="location">New South Wales</span>
                    </a>
                    <img src="http://placehold.it/760x670" alt="" />
                  </div>
                </div>
                <div className="item col-md-4">
                  <div className="image">
                    <a href="#">
                      <h3>Melbourne</h3>
                      <span className="location">Victoria</span>
                    </a>
                    <img src="http://placehold.it/760x670" alt="" />
                  </div>
                </div>
                <div className="item col-md-4">
                  <div className="image">
                    <a href="#">
                      <h3>Brisbane</h3>
                      <span className="location">Queensland</span>
                    </a>
                    <img src="http://placehold.it/760x670" alt="" />
                  </div>
                </div>
                <div className="item col-md-4">
                  <div className="image">
                    <a href="#">
                      <h3>Perth</h3>
                      <span className="location">Western Australia</span>
                    </a>
                    <img src="http://placehold.it/760x670" alt="" />
                  </div>
                </div>
                <div className="item col-md-4">
                  <div className="image">
                    <a href="#">
                      <h3>Adelaide</h3>
                      <span className="location">South Australia</span>
                    </a>
                    <img src="http://placehold.it/760x670" alt="" />
                  </div>
                </div>
                <div className="item col-md-4">
                  <div className="image">
                    <a href="#">
                      <h3>Hobart</h3>
                      <span className="location">Tasmania</span>
                    </a>
                    <img src="http://placehold.it/760x670" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    );
}

export default RegionsPage;