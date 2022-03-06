import React from "react";
import Grid from "@mui/material/Grid";

import styles from "./Header.module.css";

import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";

import MenuItems from "../Header/MenuItems/MenuItems";

import Icon from "../../UI/Icon/Icon";
import FlyoutSelect from "../../UI/FlyoutSelect/FlyoutSelect";

import { ViewportWidth } from "../../../utils/viewport-width";
import Hamburger from "./MenuItems/Hamburger/Hamburger";
import LinkText from "../../UI/LinkText/LinkText";

const Header = () => {
  const { width } = ViewportWidth();
  const toggleMenu = width <= 1068;
  const [visible, setVisible] = React.useState(false);

  const [currentValue, setCurrentValue] = React.useState("1");

  const onOpen = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setVisible(!visible);
  };

  const onClose = () => {
    setVisible(false);
  };

  const handleChange = (
    event: React.KeyboardEvent<HTMLLIElement> | React.MouseEvent<HTMLLIElement>,
    value: string
  ) => {
    setCurrentValue(value);
  };

  const sortOptions = [
    { label: "The Edit", value: "1" },
    { label: "New Arrivals", value: "2" },
    { label: "Designers", value: "3" },
    { label: "Clothing", value: "4" },
    { label: "Shoes", value: "5" },
    { label: "Bags", value: "6" },
    { label: "Accessories", value: "7" },
    { label: "Jewelry", value: "8" },
    { label: "Beauty", value: "9" },
    { label: "home", value: "10" }
  ];

  return (
    <LayoutWrapper element="header" className={styles.header}>
      <Grid container className={styles["header__container"]}>
        <Grid
          item
          xs={4}
          md={!toggleMenu ? 2 : 4}
          className={styles["header__logo"]}
        >
          <span>MY COMPANY.COM</span>
        </Grid>
        {!toggleMenu && (
          <Grid item xs={8} md={9}>
            <MenuItems />
          </Grid>
        )}
        <Grid item xs={8} md={!toggleMenu ? 1 : 8}>
          <div className={styles["header__action"]}>
            {toggleMenu && (
              <LinkText element="a" onClick={onOpen}>
                <Hamburger />
              </LinkText>
            )}
            <Icon name={"account"} className={styles["header__action-icon"]} />
            <Icon name={"cart"} className={styles["header__action-icon"]} />
            <Icon name={"search"} className={styles["header__action-icon"]} />
            <FlyoutSelect
              visible={visible}
              onHideVisibility={onClose}
              value={currentValue}
              onSelect={handleChange}
              options={sortOptions}
            />
          </div>
        </Grid>
      </Grid>
    </LayoutWrapper>
  );
};

export default Header;
