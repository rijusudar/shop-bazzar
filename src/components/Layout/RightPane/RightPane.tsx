import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import clsx from "clsx";

import styles from "./RightPane.module.css";
import Chip from "../../UI/Chips/Chip/Chip";
import ChipGroup from "../../UI/Chips/ChipGroup/ChipGroup";
import Button from "../../UI/Button/Button";
import Icon from "../../UI/Icon/Icon";

const RightPane = () => {
  const items = [
    {
      name: "XS",
      label: "XS",
      disabled: false,
      value: "XS"
    },
    {
      name: "S",
      label: "S",
      disabled: false,
      value: "S"
    },
    {
      name: "M",
      label: "M",
      disabled: true,
      value: "M"
    },
    {
      name: "L",
      label: "L",
      disabled: false,
      value: "L"
    },
    {
      name: "XXL",
      label: "XXL",
      disabled: false,
      value: "XXL"
    }
  ];

  const [selectedIndex, setSelectedIndex] = React.useState(3);
  const [hoveredIndex, setHoveredIndex] = React.useState(0);
  const buildLabel = (labelItems: any, labelHoveredIndex: number): string => {
    const { value = "", label = "" } = labelItems[labelHoveredIndex] || {};
    if (value.length) {
      return `${value} ${label}`.toUpperCase();
    }
    return `${label}`.toUpperCase();
  };

  const gender = "MEN";
  const getValue = () => {
    const hoveredLabel = items?.[hoveredIndex]?.label;
    const hoveredValue = `${gender} ${hoveredLabel}`.toUpperCase();
    const selectedLabel = items?.[selectedIndex]?.label;
    const selectedValue = `${gender} ${selectedLabel}`.toUpperCase();
    if (!gender) {
      return buildLabel(items, selectedIndex);
    }
    if (selectedIndex === -1) {
      return hoveredLabel ? hoveredValue : "";
    }
    if (hoveredIndex !== -1) {
      return hoveredLabel ? hoveredValue : "";
    } else {
      return selectedValue;
    }
  };

  const onChange = (itemValue: any) => {
    setSelectedIndex(itemValue);
  };
  const onHover = (itemValue: any) => {
    setHoveredIndex(itemValue);
  };

  return (
    <Grid item xs={3} md={3}>
      <div className={clsx(styles["right-pane"], styles["right-pane__sticky"])}>
        <Typography
          variant="h3"
          gutterBottom
          component="div"
          className={styles["right-pane__title"]}
        >
          JONATHAN SIMKHAI
        </Typography>
        <div className={styles["product-cation"]}>
          Lurex Linen Viscose Jacket in Conchiglia
        </div>

        <div className={styles["chip-section"]}>
          <ChipGroup
            id={"1"}
            value={getValue()}
            hoverValue={gender ? "" : buildLabel(items, hoveredIndex)}
            legend={"Size"}
          >
            {items.map((item: any, index: any) => (
              <Chip
                key={item.value}
                selected={index === selectedIndex}
                label={item.name}
                name={item.name}
                value={item.value}
                image={item.backgroundImage}
                unavailable={item.disabled}
                type="radio"
                onChange={() => onChange(index)}
                onMouseEnter={() => onHover(index)}
                onMouseLeave={() => onHover(null)}
              />
            ))}
          </ChipGroup>
        </div>
        <div className={styles["add-cart-btn"]}>
          <Button variant="primary">
            Add to Bag <Icon name={"arrow"} className={styles["arrow-icon"]} />
          </Button>
        </div>
        <Typography
          gutterBottom
          component="p"
          className={styles["right-pane__content-des"]}
        >
          Get 4 interest-free payments of $196.25 with Klarna LEARN MORE
        </Typography>
        <Typography
          gutterBottom
          component="p"
          className={styles["right-pane__content-des"]}
        >
          Speak to a Personal Stylist CHAT NOW
        </Typography>
      </div>
    </Grid>
  );
};

export default RightPane;
