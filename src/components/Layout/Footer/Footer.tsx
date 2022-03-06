import React from "react";

import LinkText from "../../UI/LinkText/LinkText";
import Typography from "@mui/material/Typography";

import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";

import styles from "./Footer.module.css";

const Footer = () => {
  const footerLinkArr = ["Jonathan Simkhai", "Blazers", "Viscose"];
  return (
    <footer className={styles.footer}>
      <LayoutWrapper element="div">
        <nav>
          <ul className={styles["footer-nav"]}>
            {footerLinkArr.map((item, index) => (
              <li key={`item-${index}`} className={styles["footer-nav__item"]}>
                <LinkText key={`item-${index}`} element="a" href="#">
                  {item}
                </LinkText>
              </li>
            ))}
          </ul>
        </nav>
        <label className={styles["footer__label"]}>
          a note from the editor
        </label>
        <div className={styles["footer__content"]}>
          <Typography
            variant="h4"
            gutterBottom
            component="div"
            className={styles["footer__content-des"]}
          >
            The Forte Lurex Linen Viscose Jacket in Mother of Pearl features
            lunar lavishness by night and by day: a blazer in a linen blend shot
            with lurex for a shimmering surface that shines like a star in the
            sky.
          </Typography>
        </div>
        <div className={styles["footer__caption-wrapper"]}>
          <div className={styles["footer__caption"]}>
            By MINNA SHIM, Fashion Editor
          </div>
        </div>
      </LayoutWrapper>
    </footer>
  );
};

export default Footer;
