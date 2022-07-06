import React from "react";
import { NavLink } from "react-router-dom";
import '../App.css';
import SearchBox from "./SearchBox";


function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navstyle">
        <div class="container-fluid">
          <a class="navbar-brand" to="/">
            MovieDb
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse  navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar1 me-auto mb-2 mb-lg-0 d-flex ">
              <li class="nav-item">
                <NavLink
                  to="/"
                  activeclassname="active"
                  className="nav-links "
                >
                  Popular
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  to="TopRatedPage"
                  activeclassname="active"
                  className="nav-links"
                >
                  Top Rated
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  to="UpcomingMoviePage"
                  activeclassname="active"
                  className="nav-links"
                >
                  Upcoming
                </NavLink>
              </li>
            </ul>
           <SearchBox/>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
