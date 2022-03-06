import React from "react";
import clsx from "clsx";

import styles from "./Hamburger.module.css";

const Hamburger = () => {
  const [active, setActive] = React.useState(false);

  const toggleHandler = () => setActive(!active);
  return (
    <ul
      className={clsx(styles["hamburger"], active && styles.active)}
      onClick={toggleHandler}
    >
      <li className={styles["hamburger__line"]}></li>
      <li className={styles["hamburger__line"]}></li>
    </ul>
  );
};

export default Hamburger;
