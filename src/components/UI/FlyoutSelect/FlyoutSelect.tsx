import clsx from "clsx";
import * as React from "react";

import styles from "./FlyoutSelect.module.css";
import { FlyoutOption, FlyoutSelectProps } from "./FlyoutSelect.types";

enum KEYCODE {
  DOWN = 40,
  ENTER = 13,
  ESC = 27,
  TAB = 9,
  UP = 38
}

const FlyoutSelect = ({
  className,
  onHideVisibility,
  visible,
  ...props
}: FlyoutSelectProps) => {
  const getSelectedValue = (): FlyoutOption => {
    const { value = "", options = [] } = props;
    if (value) {
      const selectedOption = options.find(
        (item: FlyoutOption) => item.value === value
      );
      return selectedOption || { label: "", value: "" };
    }
    return { label: "", value: "" };
  };

  const [selected, setSelected] = React.useState<FlyoutOption>(
    getSelectedValue()
  );
  const [hoverItem, setHoverItem] = React.useState<FlyoutOption>(
    getSelectedValue()
  );

  const onEscClick = (event: any) => {
    if (event.keyCode === 27) {
      if (onHideVisibility) {
        onHideVisibility();
      }
    }
  };

  React.useEffect(() => {
    document.addEventListener("keydown", onEscClick, false);
    return () => {
      document.removeEventListener("keydown", onEscClick, false);
    };
  });

  React.useEffect(() => {
    setHoverItem(getSelectedValue());
    setSelected(getSelectedValue());
  });

  React.useEffect(() => {
    setHoverItem(getSelectedValue());
    setSelected(getSelectedValue());
  });

  const handleFlyoutChange = (option: FlyoutOption) => (
    event: React.MouseEvent<HTMLLIElement>
  ) => {
    event.preventDefault();
    setSelected(option);
    setHoverItem(option);
    onHideVisibility();
    if (props.onSelect) {
      props.onSelect(event, option.value);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLLIElement>) => {
    const { options } = props;
    event.stopPropagation();

    const renderOptions = options;
    const hoverIndex = renderOptions.findIndex(
      (option: FlyoutOption) => option.value === hoverItem.value
    );
    if (event.keyCode === KEYCODE.TAB) {
      event.preventDefault();
    }
    if (event.keyCode === KEYCODE.ESC) {
      setHoverItem(selected);
      onHideVisibility();
    }
    if (event.keyCode === KEYCODE.ENTER) {
      setSelected(hoverItem);
      onHideVisibility();
      if (props.onSelect) {
        props.onSelect(event, hoverItem.value);
      }
    }
    if (event.keyCode === KEYCODE.DOWN) {
      if (hoverIndex + 1 < renderOptions.length) {
        setHoverItem(renderOptions[hoverIndex + 1]);

        document
          .querySelector<HTMLLIElement>(`#option-${hoverIndex + 1}`)
          ?.focus();
      }
    }
    if (event.keyCode === KEYCODE.UP && hoverIndex - 1 >= 0) {
      setHoverItem(renderOptions[hoverIndex - 1]);

      document
        .querySelector<HTMLLIElement>(`#option-${hoverIndex - 1}`)
        ?.focus();
    }
    return true;
  };

  return (
    <>
      {visible ? (
        <div className={clsx(styles["flyout-select"], className)}>
          <ul role="listbox" className={clsx(styles["flyout-select__list"])}>
            {props.options.map((item: FlyoutOption, index: number) => (
              <li
                className={clsx(
                  styles["flyout-select__list-item"],
                  selected.label === item.label &&
                    selected.value === item.value &&
                    styles["flyout-select__list-item--active"],
                  hoverItem.label === item.label &&
                    hoverItem.value === item.value &&
                    styles["flyout-select__list-item--hover"]
                )}
                onMouseDown={handleFlyoutChange(item)}
                onClick={handleFlyoutChange(item)}
                role="option"
                aria-selected={selected.label === item.label}
                key={item.value}
                value={item.value}
                tabIndex={0}
                id={`option-${index}`}
                onKeyDown={handleKeyPress}
              >
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default FlyoutSelect;
