import { FC, MouseEvent, ReactNode, useEffect, useState } from "react";

type RatingSize = "small" | "medium" | "large";

interface IMyRatingProps {
    /**
     * classes provided by developer
     */
    className?: string;
    /**
     * default rating when first rendered
     */
    defaultValue?: number;
    /**
     * customize the size of the rating icon
     */
    size?: RatingSize;
    /**
     * Maximum rating.
     */
    max?: number;
    /**
     * used to disable the rating
     */
    disabled?: boolean;
    /**
     * used to disable hovering/select effect
     */ 
    readonly?: boolean;
    /**
     * minimum increment value allowed
     */ 
    precision?: number;
    /**
     * custom icon specified by developers
     */
    icon?: ReactNode;
    /**
     * event handler fired when a value is clicked
     */
    onValueChange?:(value:number) => void
    /**
     * event handler fired when hovered over the stars
     */
    onHoverChange?:(value:number) => void
}

const MyRating: FC<IMyRatingProps> = ({
    className = "",
    defaultValue = 2,
    size = "medium",
    max = 5,
    disabled = false,
    readonly = false,
    precision = 0.5,
    icon,
    onValueChange,
    onHoverChange
}) => {
    const [rating, setRating] = useState(defaultValue);
    const [hover, setHover] = useState(0);

    //package hover with developer defined function
    const handleHover = (rate:number) => {
        setHover(rate);
        onHoverChange?.(rate);
    }

    const handleClick= (rate:number) => {
        setRating(rate);
        onValueChange?.(rate);
    }

    return(
        <div className="rate">
        {[...Array(max)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={index <= (hover || rating) ? "on" : "off"}
              onClick={() => handleClick(index)}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(rating)}
            >
              <span className="star">&#9733;</span>
            </button>
          );
        })}
      </div>
    )
}

export default MyRating;