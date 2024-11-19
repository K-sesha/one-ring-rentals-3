"use client";

import React from "react";
import Image from "next/image";
import logo from "../data/logo.json";
import Link from "next/link";


function Footer() {
  return (
    <footer id="footer-top" className="container py-4">
      <div className="row">
        {/* Logo and Description */}
        <div className="block col-sm-3">
                <Link href="#" >
                    <Image
                        src={logo.logo}
                        alt={logo.alt}
                        width={220}
                        height={100}
                    />
                </Link>
          <p className="mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam commodo
            eros nibh, et dictum elit tincidunt eget. Pellentesque volutpat quam
            dignissim, convallis elit id, efficitur sem. Vivamus ac scelerisque
            sem. Aliquam sed enim rutrum nibh gravida pellentesque nec at metus.
          </p>
        </div>

        {/* Helpful Links */}
        <div className="block col-sm-3">
          <h3>Helpful Links</h3>
          <ul className="footer-links">
            <li>
              <a href="#">All rentals</a>
            </li>
            <li>
              <a href="#">List your rental</a>
            </li>
            <li>
              <a href="#">Read our FAQs</a>
            </li>
          </ul>
        </div>

        {/* Popular Regions */}
        <div className="block col-sm-6">
          <h3>Popular Regions</h3>
          <div className="row">
            {[...Array(2)].map((_, colIndex) => (
              <div className="col-sm-6" key={colIndex}>
                <ul className="footer-listings">
                  {["Rhovanion", "Eriador", "Bay of Belfalas"].map((region, index) => (
                    <li key={index}>
                      <div className="image">
                        <a href="properties-detail.html">
                          <img
                            src="https://via.placeholder.com/760x670"
                            alt={`Image of ${region}`}
                            width={190}
                            height={168}
                          />
                        </a>
                      </div>
                      <p>
                        <a href="properties-detail.html">{region}</a>
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright and Social Links */}
      <div id="copyright" className="text-center mt-4">
        <p>&copy; {new Date().getFullYear()} One Ring Rentals</p>
        <ul className="social-networks list-inline">
          {["facebook", "twitter", "google", "pinterest", "youtube", "rss"].map(
            (network, index) => (
              <li key={index} className="list-inline-item">
                <a href="#" aria-label={`Visit us on ${network}`}>
                  <i className={`fa fa-${network}`} aria-hidden="true"></i>
                </a>
              </li>
            )
          )}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
