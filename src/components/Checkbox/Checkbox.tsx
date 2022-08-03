import { FC, MouseEvent, ReactNode, useEffect, useState } from "react";
import { MdCheckBoxOutlineBlank, MdCheckBox, MdTurnedInNot, MdTurnedIn, MdOutlineFavoriteBorder, MdOutlineFavorite} from "react-icons/md";

type ButtonColor = "primary" | "secondary" | "default";

type checkboxSize = "small" | "medium" | "large";

type ButtonVariant = "contained" | "outlined" | "text";

type icons = "checkmark" | "favorite" | "bookmark";

interface ICheckboxProps {
  /**
   * customize the color of the checkbox
   */
  color?: ButtonColor;
  /**
   * customize the size of the checkbox
   */
  size?: checkboxSize;
  /**
   * customize the variant style of the checkbox
   */
  variant?: ButtonVariant;
  /**
   * used to disable the checkbox
   */
  disabled?: boolean;
  /**
   * the inner text of the checkbox
   */
  children?: ReactNode;
  /**
   * event handler for the click event of the checkbox
   */
  checked?: boolean;
    /**
   * customize the icon to be checked
   */
  icon?: icons;
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
  icon = "checkmark",
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

  const getIconFromName = (iconName: icons) => {
    switch (iconName) {
      case 'checkmark':
        return <MdCheckBox />
      case 'favorite':
        return <MdOutlineFavorite/>
      case 'bookmark':
        return <MdTurnedInNot />
    }
  }

  const iconType = getIconFromName(icon);
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

  const constructClassName: () => string = () => {
    const colorVariantCls = `checkbox-${color}-${variant}`;
    const sizeCls = `checkbox-${size}`;
    return ["checkbox", colorVariantCls, sizeCls].join(" ");
  };
  const constructIconClassName: () => string = () => {
    const colorVariantCls = `checkbox--icon-${color}-${variant}`;
    const sizeCls = `checkbox--icon-${size}`;
    return ["checkbox--icon", colorVariantCls, sizeCls].join(" ");
  };

  //"checkbox checkbox-large"

  return (
    <label htmlFor="checkbox">
      <input
        name="checkbox"
        type="checkbox"
        className={constructClassName()}
        checked={checkstate}
        onChange={() => {
          setCheck(!checkstate);
        }}
      />
      {checkstate && iconType?.type.name === "MdCheckBox" &&  
        <MdCheckBox className={constructIconClassName()} />
      }
      {!checkstate && iconType?.type.name === "MdCheckBox" && 
        <MdCheckBoxOutlineBlank className={constructIconClassName()} />}

      {checkstate && iconType?.type.name === "MdOutlineFavorite" && 
        <MdOutlineFavorite className={constructIconClassName()} />}

      {!checkstate && iconType?.type.name === "MdOutlineFavorite" && 
        <MdOutlineFavoriteBorder className={constructIconClassName()} />}

      {checkstate && iconType?.type.name === "MdTurnedInNot" && 
        <MdTurnedIn className={constructIconClassName()} />}

      {!checkstate && iconType?.type.name === "MdTurnedInNot" && 
        <MdTurnedInNot className={constructIconClassName()} />}
    </label>
  );
};

export default Checkbox;
