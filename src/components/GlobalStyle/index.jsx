import "./GlobalStyle.scss";
import React from "react";
import PropTypes from "prop-types"; // ES6
const GlobalStyles = ({ children }) => {
  return React.Children.only(children);
};

export default GlobalStyles;

GlobalStyles.propTypes = {
  children: PropTypes.node.isRequired,
};
