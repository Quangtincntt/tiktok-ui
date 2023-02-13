import Button from "../../button/Button";

import Styles from "./Menu.module.scss";
import classNames from "classnames/bind";
import PropTypes from "prop-types"; // ES6
const cx = classNames.bind(Styles);

function MenuItem({ data, onClick }) {
  const classes = cx("menu-item", {
    separate: data.separate,
  });
  return (
    <Button
      to={data.to}
      onClick={onClick}
      className={classes}
      leftIcon={data.icon}
    >
      {data.title}
    </Button>
  );
}

MenuItem.propTypes = {
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};

export default MenuItem;
