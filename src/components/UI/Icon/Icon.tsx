import React from "react";

import { IconProps } from "./Icon.types";

import { ReactComponent as Account } from "../../../assets/images/Account.svg";
import { ReactComponent as Cart } from "../../../assets/images/Bag.svg";
import { ReactComponent as Search } from "../../../assets/images/Search.svg";
import { ReactComponent as Arrow } from "../../../assets/images/ArrowBtn.svg";

const Icon = ({ name, ...props }: IconProps) => {
  const renderIcon = () => {
    switch (name) {
      case "account":
        return <Account />;
      case "cart":
        return <Cart />;
      case "arrow":
        return <Arrow />;
      default:
        return <Search />;
    }
  };
  return <div {...props}>{renderIcon()}</div>;
};

export default Icon;
