import "./GlobalStyle.scss";
import PropTypes from "prop-types"; // ES6
const GlobalStyles = ({ children }) => {
  return children;
};

export default GlobalStyles;

GlobalStyles.propTypes = {
  children: PropTypes.node.isRequired,
};
