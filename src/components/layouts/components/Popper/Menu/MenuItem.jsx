import Button from "../../button";

import Styles from "./Menu.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(Styles);

function MenuItem({ data, onClick }) {
  const classes = cx("menu-item", {
    separate: data.separate
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

export default MenuItem;
