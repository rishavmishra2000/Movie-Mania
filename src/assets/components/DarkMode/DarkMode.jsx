import React from "react";

import "./DarkMode.css";
import { ReactComponent as Sun } from "../../icons/Sun.svg";
import { ReactComponent as Moon } from "../../icons/Moon.svg";

const DarkMode = () => {
  return (
    <div className="dark_mode">
      <input className="dark_mode_input" type="checkbox" id="darkmode-toggle" />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <Sun />
        <Moon />
      </label>
    </div>
  );
};

export default DarkMode;