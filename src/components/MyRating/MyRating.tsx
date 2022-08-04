import { FC, MouseEvent, ReactNode, useEffect, useState } from "react";

type RatingSize = "Small" | "Medium" | "Large";

interface IMyRatingProps {
    /** classes provided by developer*/
    classes?: string;
    /** default rating when first rendered*/
    value?: number;
    /** customize the size of the rating icon*/
    size?: RatingSize;
    /** Maximum rating.*/
    max?: number;
    /** used to disable the rating*/
    disabled?: boolean;
    /** used to disable hovering/select effect*/ 
    readOnly?: boolean;   
    /**minimum increment value allowed*/ 
    precision?: number;
    /** Only highlight the selected value, the rest set to iconEmpty */ 
    highlightSelectedOnly?: boolean;    
    /** custom icon when selected*/
    icon?: ReactNode;
    /** custom icon in normal state*/
    emptyIcon?: ReactNode;
    /** event handler fired when a value is clicked */
    onValueChange?:(value:number) => void
    /** event handler fired when hovered over the stars */
    onHoverChange?:(value:number) => void
}

const MyRating: FC<IMyRatingProps> = ({
    classes = "",
    value = 0,
    size = "Medium",
    max = 5,
    disabled = false,
    readOnly = false,
    precision = 1,
    highlightSelectedOnly = false,
    icon = <span className="star">&#9733;</span>,
    emptyIcon = <span className="star">&#9733;</span>,
    onValueChange,
    onHoverChange
}:IMyRatingProps) => {
    const [rating, setRating] = useState<number>(value);
    const [hover, setHover] = useState<number>(value);

    const handleHover = (rate:number) => {
        setHover(rate);
        onHoverChange?.(rate);
    }
    const handleClick= (rate:number) => {
        setRating(rate);
        onValueChange?.(rate);
    }
    // STILL NEED TO WORK ON RENDER ICON BASED ON THE CONDITION BY CONDITIONALLY RENDER emptyIcon/icon
    return(
        <div className={`${classes} rate${disabled ? " disabled" : ""}${readOnly ? " read-only": ""}`}>
        {
        [...Array(max)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              disabled={disabled}
              className={`icon size${size} ${index <= (hover || rating) ? `iconFilled` : `iconEmpty`} ${highlightSelectedOnly ? index === rating ? "iconFilled" : "iconEmpty" : ""}`}
              onClick={() => handleClick(index)}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(rating)}
            >
              {icon}
            </button>
          );
        })
        }
      </div>
    )
}

export default MyRating;