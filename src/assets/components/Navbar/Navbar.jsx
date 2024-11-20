import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";
// import DarkMode from "../DarkMode/DarkMode";

import Fire from "../../icons/fire.png";
import Star from "../../icons/glowing_star.png";
import Party from "../../icons/party_face.png";

const Navbar = () => {
  return (
    <nav className="align_center navbar">
      <h2 className="nav_header">Movie Mania</h2>
      <div className="align_center nav_header_links">
        {/* <DarkMode /> */}
        <NavLink to="/" className="align_center">
          Popular <img src={Fire} alt="fire_emoji" className="navbar_emoji" />
        </NavLink>
        <NavLink to="/top_rated" className="align_center">
          Top Rated <img src={Star} alt="star_emoji" className="navbar_emoji" />
        </NavLink>
        <NavLink to="/upcoming" className="align_center">
          Upcoming{" "}
          <img src={Party} alt="party_face_emoji" className="navbar_emoji" />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
