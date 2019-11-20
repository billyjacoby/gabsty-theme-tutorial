import React from "react";
import { Link } from "gatsby";

import "../styles/navbar.css";

const Navbar = ({ navigationPages }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {navigationPages.map((item, index) => (
          <li key={index}>
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
