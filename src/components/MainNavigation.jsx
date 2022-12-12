import React from "react";
import { NavLink } from "react-router-dom";
import classes from "../styles/MainNavigation.module.css";
const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={(navInfo) =>
                navInfo.isActive ? classes.active : undefined
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={(navInfo) =>
                navInfo.isActive ? classes.active : undefined
              }
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
