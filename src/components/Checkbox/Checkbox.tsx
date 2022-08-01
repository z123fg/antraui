import { FC, MouseEvent, ReactNode, useEffect, useState } from "react";

type ButtonColor = "primary" | "secondary" | "default";

type ButtonSize = "small" | "medium" | "large";

type ButtonVariant = "contained" | "outlined" | "text";


interface ICheckboxProps {
  /**
   * customize the color of the checkbox
   */
  color?: ButtonColor;
  /**
   * customize the size of the checkbox
   */
  size?: ButtonSize;
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
  onClick?:(event:MouseEvent) => void
}

interface IClickPosition {
  x:number;
  y:number;
}

let counter = 0;

const Checkbox: FC<ICheckboxProps> = ({
  color = "primary",
  size = "medium",
  variant = "contained",
  disabled = false,
  children,
  onClick
}) => {
  const [clickPosition, setClickPosition] = useState<IClickPosition | null>(null); 
  const [rippleArr, setRippleArr] = useState<ReactNode[]>([])

  const handleClick = (e:MouseEvent) => {
    if(disabled) return;
    const {offsetX, offsetY} = e.nativeEvent; 
    setClickPosition({x:offsetX, y:offsetY})
    onClick?.(e);
  }

  useEffect(()=>{
    //add the ripple circle to the rippleArr state
    if(clickPosition !== null){
      const newRipple = (
        <div
          data-testid="ripple-element" 
          key={counter++}
          style={{//position
            position:"absolute",
            left: clickPosition.x,
            top: clickPosition.y,
            transform:"translate(-50%,-50%)"
          }}
          className={`btn-ripple-${color}-${variant}`}
          onAnimationEnd={()=>{
            setRippleArr(prev=>{
              let nextRippleArr = [...prev];
              nextRippleArr.shift();
              return nextRippleArr;

            })
          }}
        >
        </div>
      )
      setRippleArr(prev=>[...prev, newRipple]);

    }

  },[clickPosition])

  const constructClassName:()=>string = () => {
    const colorVariantCls = `btn-${color}-${variant}`;
    const sizeCls = `btn-${size}`
    return ["btn", colorVariantCls, sizeCls].join(" ")
  }

  //"btn btn-large"

  return (
    <input type='checkbox'>
        
    </input>
  )
}

export default Checkbox