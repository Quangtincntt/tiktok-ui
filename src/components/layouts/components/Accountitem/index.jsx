import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Account.module.scss";
import classNames from "classnames/bind";
import Image from "../images";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);
function AccountItem({ data }) {
  const { nickname, full_name, avatar, tick } = data;
  return (
    <Link to={`/@${nickname}`} className={cx("wrapper")}>
      <Image className={cx("avatar")} src={avatar} alt="avatar" />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>{nickname}</span>
          {tick && (
            <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
          )}
        </h4>
        <div className={cx("username")}>{full_name}</div>
      </div>
    </Link>
  );
}

export default AccountItem;
