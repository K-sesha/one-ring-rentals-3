"use client";

import React from "react";
import regions from "../data/regions.json"; // Importing regions from regions.json

function RegionsPage() {
  return (
    <>
      <div className="content py-5">
        <div className="container">
          <div className="row">
            <div className="main col-12">
              <h1 className="section-title mb-4">Popular Regions</h1>
              <div className="row g-4">
                {regions.map((region, index) => (
                  <div className="col-md-4 col-sm-6" key={index}>
                    <div className="card h-100 text-center">
                      <div className="card-body">
                        <h3 className="card-title">{region}</h3>
                      </div>
                      <img
                        src="http://placehold.it/760x670"
                        alt={`Image of ${region}`}
                        className="card-img-bottom"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegionsPage;
