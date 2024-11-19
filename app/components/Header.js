"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../data/logo.json";

function Header() {
  return (
    <div id="top-bar">
      {/* Top Bar Content */}
      <div className="container py-2 border-bottom">
        <div className="row">
          <div className="col-sm-12 d-flex justify-content-end">
            <ul className="list-inline mb-0" id="top-buttons">
              <li className="list-inline-item">
                <Link href="/login">
                  <i className="fa fa-sign-in"></i> Login
                </Link>
              </li>
              <li className="list-inline-item">
                <Link href="/register">
                  <i className="fa fa-pencil-square-o"></i> Register
                </Link>
              </li>
              <li className="list-inline-item dropdown">
                <a
                  href="#"
                  className="dropdown-toggle"
                  id="languageDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa fa-globe"></i> English
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="languageDropdown"
                >
                  <li>
                    <Link className="dropdown-item" href="#">
                      Deutsch
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Español
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Français
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Português
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Nav Section */}
      <div id="nav-section" className="bg-light">
        <div className="container">
          <div className="row align-items-center py-3">
            <div className="col-6 col-md-4">
              <Link href="/" className="navbar-brand">
                <Image
                  src={logo.logo}
                  alt={logo.alt}
                  width={220}
                  height={100}
                />
              </Link>
            </div>
            <div className="col-6 col-md-8 d-flex justify-content-end">
              <nav className="navbar navbar-expand-lg">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i className="fa fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <Link href="/" className="nav-link">
                        Find a Rental
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/list-your-rental" className="nav-link">
                        List Your Rental
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/travel-guides" className="nav-link">
                        Travel Guides
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/regions" className="nav-link">
                        Regions
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/news" className="nav-link">
                        News
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/contact" className="nav-link">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
