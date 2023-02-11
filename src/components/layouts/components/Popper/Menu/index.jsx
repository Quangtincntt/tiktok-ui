import Tippy from "@tippyjs/react/headless";

import Styles from "./Menu.module.scss";
import classNames from "classnames/bind";
import Wrapper from "../Wrapper";
import MenuItem from "./MenuItem";
import Header from "./Header";
import { useState } from "react";

const cx = classNames.bind(Styles);

function Menu({ children, items = [], onChange }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];

  const renderItem = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItem
          data={item}
          key={index}
          onClick={() => {
            if (isParent === true) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };

  return (
    <Tippy
      delay={[0, 500]}
      interactive
      placement="bottom-end"
      // hideOnClick={false}
      onHide={() => setHistory((prev) => prev.slice(0, 1))}
      render={(attr) => (
        <div className={cx("menu")} tabIndex="-1" {...attr}>
          <Wrapper className={cx("menu-popper")}>
            {history.length > 1 && (
              <Header
                title="language"
                onBack={() =>
                  setHistory((prev) => prev.slice(0, prev.length - 1))
                }
              />
            )}
            <div className={cx("menu-body")}>{renderItem()}</div>
          </Wrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
