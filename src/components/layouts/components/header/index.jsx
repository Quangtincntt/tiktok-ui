import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisVertical,
  faEarthAsia,
  faQuestion,
  faMoon,
  faCloudDownloadAlt,
  faUser,
  faCoins,
  faGear,
  faSignOut,
  faMessage,
  faReply,
} from "@fortawesome/free-solid-svg-icons";
import "tippy.js/dist/tippy.css";
import Tippy from "@tippyjs/react/";

import images from "./../../../../assets/img/index";

import Button from "./../button/index";
import Menu from "../Popper/Menu";
import Images from "../images";
import Search from "./Search";
import Styles from "./Header.module.scss";

import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import routesConfig from "./../../../../configs/routes";
const cx = classNames.bind(Styles);

const MENU_ITEMS = [
  {
    title: "English",
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    children: {
      title: "Language",
      data: [
        {
          code: "en",
          title: "English",
        },
        {
          code: "vi",
          title: "Vietnamese",
        },
        {
          code: "en",
          title: "English",
        },
        {
          code: "vi",
          title: "Vietnamese",
        },
        {
          code: "en",
          title: "English",
        },
        {
          code: "vi",
          title: "Vietnamese",
        },
        {
          code: "en",
          title: "English",
        },
        {
          code: "vi",
          title: "Vietnamese",
        },
        {
          code: "en",
          title: "English",
        },
        {
          code: "vi",
          title: "Vietnamese",
        },
        {
          code: "en",
          title: "English",
        },
        {
          code: "vi",
          title: "Vietnamese",
        },
        {
          code: "en",
          title: "English",
        },
        {
          code: "vi",
          title: "Vietnamese",
        },
        {
          code: "en",
          title: "English",
        },
        {
          code: "vi",
          title: "Vietnamese",
        },
        {
          code: "en",
          title: "English",
        },
        {
          code: "vi",
          title: "Vietnamese",
        },
        {
          code: "en",
          title: "English",
        },
        
      ],
    },
  },

  {
    title: "Feedback",
    icon: <FontAwesomeIcon icon={faQuestion} />,
    to: "/feedback",
  },

  {
    title: "Moon",
    icon: <FontAwesomeIcon icon={faMoon} />,
  },
];

const userMenu = [
  {
    title: "Profile",
    icon: <FontAwesomeIcon icon={faUser} />,
  },

  {
    title: "Get coins",
    icon: <FontAwesomeIcon icon={faCoins} />,
    to: "/coin",
  },

  {
    title: "Setting",
    icon: <FontAwesomeIcon icon={faGear} />,
    to: "/setting",
  },
  ...MENU_ITEMS,
  {
    title: "Log out",
    icon: <FontAwesomeIcon icon={faSignOut} />,
    to: "/logout",
    separate: true,
  },
];

function Header() {
  const currentUser = true;

  const handleMenuChange = (menuItem) => {
    console.log(menuItem);
  };

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <Link to={routesConfig.home}>
          <div className={cx("logo")}>
            <img src={images.logo} alt="TikTok" />
          </div>
        </Link>
        <Search />
        <div className={cx("action")}>
          {currentUser ? (
            <>
              <Tippy content="Upload Video">
                <button className={cx("action-btn")}>
                  <FontAwesomeIcon icon={faCloudDownloadAlt} />
                </button>
              </Tippy>
              <Tippy content="Message">
                <button className={cx("action-btn")}>
                  <FontAwesomeIcon icon={faReply} />
                </button>
              </Tippy>
              <Tippy content="inbox">
                <button className={cx("action-btn")}>
                  <FontAwesomeIcon icon={faMessage} />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary>Login</Button>
            </>
          )}
          <Menu
            items={currentUser ? userMenu : MENU_ITEMS}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <Images
                className={cx("user-avatar")}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHjrZLfvOhbcUP1rsQOpMqKx77gU2AfT8sgw&usqp=CAU"
                alt="img"
              />
            ) : (
              <button className={cx("more-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}
export default Header;
