"use client";
import React from "react";
import Link from "next/link";
import Image from 'next/image';
import logo from "../data/logo.json";

function Header() {
  return (
    <div id="top-bar">
      {/* Top Bar Content */}
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <ul id="top-buttons">
              <li>
                <Link href="/login">
                  <i className="fa fa-sign-in"></i> Login
                </Link>
              </li>
              <li>
                <Link href="/register">
                  <i className="fa fa-pencil-square-o"></i> Register
                </Link>
              </li>
              <li className="divider"></li>
              <li>
                <div className="language-switcher">
                  <span>
                    <i className="fa fa-globe"></i> English
                  </span>
                  <ul>
                    <li>
                      <Link href="#">Deutsch</Link>
                    </li>
                    <li>
                      <Link href="#">Español</Link>
                    </li>
                    <li>
                      <Link href="#">Français</Link>
                    </li>
                    <li>
                      <Link href="#">Português</Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Nav Section */}
      <div id="nav-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <Link href="/" className="nav-logo">
                <img src={logo.logo} alt={logo.alt} width="200" height="100" />
              </Link>
              <div id="sb-search" className="sb-search">
                <form>
                  <input
                    className="sb-search-input"
                    placeholder="Search..."
                    type="text"
                    name="search"
                  />
                  <input className="sb-search-submit" type="submit" value="" />
                  <i className="fa fa-search sb-icon-search"></i>
                </form>
              </div>
              <nav className="navbar">
                <button id="nav-mobile-btn">
                  <i className="fa fa-bars"></i>
                </button>
                <ul className="nav navbar-nav">
                  <li>
                    <Link href="/">Find a Rental</Link>
                  </li>
                  <li>
                    <Link href="/list-your-rental">List your rental</Link>
                  </li>
                  <li>
                    <Link href="/travel-guides">Travel Guides</Link>
                  </li>
                  <li>
                    <Link href="/regions">Regions</Link>
                  </li>
                  <li>
                    <Link href="/news">News</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
