import React from "react";

import styles from "./MenuItems.module.css";

const MenuItems = () => {
  const menuItems = [
    "The Edit",
    "New Arrivals",
    "Designers",
    "Clothing",
    "Shoes",
    "Bags",
    "Accessories",
    "Jewelry",
    "Beauty",
    "home"
  ];
  return (
    <nav className={styles.menu}>
      <ul className={styles["menu-items"]}>
        {menuItems.map(item => (
          <li key={item} className={styles["menu-item"]}>
            <a>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuItems;
