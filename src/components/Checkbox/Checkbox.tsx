import React from "react";
import { FC, MouseEvent, ReactNode, useEffect, useState } from "react";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";

type CheckboxColor = "primary" | "secondary" | "default";

type checkboxSize = "small" | "medium" | "large";

type ButtonVariant = "contained" | "outlined" | "text";

type LabelPlacement = "top" | "bottom" | "start" | "end";
interface ICheckboxProps {
  color?: CheckboxColor;
  size?: checkboxSize;
  variant?: ButtonVariant;
  disabled?: boolean;
  children?: ReactNode;
  checked?: boolean;
  icon?: ReactNode;
  checkedIcon?: ReactNode;
  label?: String;
  labelPlacement?: LabelPlacement;
  onClick?: (event: MouseEvent) => void;
}

interface IClickPosition {
  x: number;
  y: number;
}

let counter = 0;

const Checkbox: FC<ICheckboxProps> = ({
  color = "primary",
  size = "medium",
  variant = "contained",
  disabled = false,
  checked = false,
  icon = <MdCheckBoxOutlineBlank />,
  checkedIcon = <MdCheckBox />,
  label = "",
  labelPlacement = "end",
  children,
  onClick,
}) => {
  const [clickPosition, setClickPosition] =
    useState<IClickPosition | null>(null);
  const [rippleArr, setRippleArr] = useState<ReactNode[]>([]);
  const [checkstate, setCheck] = useState(checked);

  const handleClick = (e: MouseEvent) => {
    if (disabled) return;
    const { offsetX, offsetY } = e.nativeEvent;
    setClickPosition({ x: offsetX, y: offsetY });
    onClick?.(e);
  };

  useEffect(() => {
    //add the ripple circle to the rippleArr state
    if (clickPosition !== null) {
      const newRipple = (
        <div
          data-testid="ripple-element"
          key={counter++}
          style={{
            //position
            position: "absolute",
            left: clickPosition.x,
            top: clickPosition.y,
            transform: "translate(-50%,-50%)",
          }}
          className={`checkbox-ripple-${color}-${variant}`}
          onAnimationEnd={() => {
            setRippleArr((prev) => {
              let nextRippleArr = [...prev];
              nextRippleArr.shift();
              return nextRippleArr;
            });
          }}
        ></div>
      );
      setRippleArr((prev) => [...prev, newRipple]);
    }
  }, [clickPosition]);

  const constructLabelClassName: () => string = () => {
    return `checkbox--label-${labelPlacement}`;
  };
  const constructClassName: () => string = () => {
    const colorSizeCls = `checkbox-${color}-${size}`;
    const sizeCls = `checkbox-${size}`;
    return ["checkbox", colorSizeCls, sizeCls].join(" ");
  };
  const constructIconClassName: () => string = () => {
    const colorSizeCls = `checkbox--icon-${color}-${size}`;
    const sizeCls = `checkbox--icon-${size}`;
    const dis = disabled ? `checkbox--icon-${size}-disabled` : "";
    if (disabled) {
      return ["checkbox--icon", sizeCls, dis].join(" ");
    } else {
      return ["checkbox--icon", colorSizeCls, sizeCls, dis].join(" ");
    }
  };

  return (
    <label htmlFor="checkbox" className={`checkbox--container-${labelPlacement}`}>
      <span className="checkbox--content">
        <input
          name="checkbox"
          type="checkbox"
          className={constructClassName()}
          checked={checkstate}
          onChange={() => {
            setCheck(!checkstate);
          }}
          disabled={disabled}
        />
        <span className={constructIconClassName()}>
          {checkstate ? checkedIcon : icon}
        </span>
      </span>
      <span
        className={constructLabelClassName()}
        onClick={() => {
          setCheck(!checkstate);
        }}
      >
        {label}
      </span>
    </label>
  );
};

export default Checkbox;
