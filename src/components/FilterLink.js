import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const FilterLink = ({ filter, children }) => (
  <NavLink
    to={filter === "all" ? "" : `/${filter}`}
    activeStyle={{
      textDecoration: "none",
      color: "black"
    }}
    exact={true}
  >
    {children}
  </NavLink>
);

FilterLink.propTypes = {
  filter: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default FilterLink;
