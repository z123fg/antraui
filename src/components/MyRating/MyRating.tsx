import { FC, MouseEvent, ReactNode, useRef, useState } from "react";
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import StarHalfRoundedIcon from '@mui/icons-material/StarHalfRounded';

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
    precision = 0.5,
    highlightSelectedOnly = false,
    icon = <StarRoundedIcon/>,
    emptyIcon = <StarBorderRoundedIcon color="disabled"/>,
    onValueChange,
    onHoverChange
}:IMyRatingProps) => {
    const [rating, setRating] = useState<number>(value);
    const [hover, setHover] = useState<number>(value);
    const [isHover, setIsHover] = useState<boolean>(false);
    const ratingContainerRef = useRef<HTMLDivElement>(null);

    const handleMouseEnter = (e:MouseEvent, rate:number) => {
      setIsHover(true);
      if (precision === 1){
        setHover(rate);
        onHoverChange?.(rate);
      } else {
        let hoverRating = handlePrecisionRating(e);
        setHover(rate);
        onHoverChange?.(rate);
        if (rate - hoverRating < 0.5){
          setHover(rate);
          onHoverChange?.(rate);
        } else {
          setHover(hoverRating);
          onHoverChange?.(hoverRating);
        }
      }
        // handlePrecisionRating(e);
    }
    const handleMouseLeave = (e:MouseEvent, rate:number) => {
      setIsHover(false);
      setHover(rate);
      onHoverChange?.(rate);
    }


    const handleClick= (e:MouseEvent, rate:number) => {
      if (precision === 1){
        setRating(rate);
        onValueChange?.(rate);
      } else {
        let selectedRating = handlePrecisionRating(e);
        //rate = current star selected 
        // rating = star user want to show
        if (rate - selectedRating < 0.5){
          setRating(rate);
          onValueChange?.(rate);
        } else {
          setRating(selectedRating);
          onValueChange?.(selectedRating);
        }
      }  
    }

    const handlePrecisionRating = (e:MouseEvent) => {
      // to get the legnth and width of current container of the rating stars
      const rect = ratingContainerRef.current?.getBoundingClientRect();
      const width = rect?.width || 0;
      const left = rect?.left || 0;
      let percent = (e.clientX - left)/width;
      const numberInStar = percent*max;
      // const nearestNumber = Math.round((numberInStar + precision / 2) / precision) * precision;
      // console.log("percent: ", percent, "\nNumber of Star: ", numberInStar, "\nNearest number: ", nearestNumber);
      const preciseResult = Number(numberInStar.toFixed(2))
      // const result = Number(nearestNumber.toFixed(2));
      return preciseResult;
    }
    // STILL NEED TO WORK ON RENDER ICON BASED ON THE CONDITION BY CONDITIONALLY RENDER emptyIcon/icon
    return(
        <div 
        className={`${classes}rate${disabled ? " disabled" : ""}${readOnly ? " read-only": ""}`}
        ref={ratingContainerRef}
        >
        {
        [...Array(max)].map((star, index) => {
          index += 1;    
          return (
            <button
              type="button"
              key={index}
              disabled={disabled}
              className={`icon size${size}
              ${disabled ? " disabled": ""}
              ${highlightSelectedOnly ? index === rating ? "iconFilled" : "iconEmpty" : ""}`}
              onClick={!readOnly ? (e) => handleClick(e, index) : () => {}}
              onMouseMove={!readOnly ? (e) => handleMouseEnter(e, index): () => {}}
              onMouseLeave={!readOnly ?(e) => handleMouseLeave(e, rating): () => {}}
            >
              {highlightSelectedOnly
              ?
               index === rating ? <StarRoundedIcon color="success"/> : emptyIcon  
              :  !isHover
                ? index <= rating 
                  ? <StarRoundedIcon color="success"/>
                  :Math.abs(index - rating) < 1  
                    ? <StarHalfRoundedIcon color="success"/> : emptyIcon
                : index <= hover 
                  ? <StarRoundedIcon color="error"/> 
                  : Math.abs(index - hover) < 1 
                    ? <StarHalfRoundedIcon color="error"/> 
                    : emptyIcon
              }
            </button>
          );
        })
        }
      </div>
    )
}

export default MyRating;