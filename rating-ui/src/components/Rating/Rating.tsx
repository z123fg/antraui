import React, { FC, useState } from 'react';
import "./Rating.scss";

type controllType = "controlled" | "read-only" | "disabled";
type RatingSize = "small" | "medium" | "large";

interface IRatingProps {
    size?:RatingSize,
    name?:controllType,
    maxItems?: number,
    iconType?:string,
}

const Rating:FC<IRatingProps> = ({size="medium", name="controlled", maxItems=5, iconType="star"}) => {
    const [ rating, setRating ] = useState<number>(0);
    const [ hover, setHover ] = useState<number | null>(null);
    const [isRated, setIsRated ] = useState<boolean | null>(false);
    return (
        <div className="rating__container">
            <h3>{name}</h3>

            <div className="star__container">
                {
                    [...Array(maxItems)].map((star, index) => {
                        const ratingValue = index + 1;
                        return (
                            <label key={index}>
                                <input 
                                    type="radio" 
                                    name={name} 
                                    value={ratingValue} 
                                    onClick={ () => {
                                        setRating(ratingValue)
                                        setIsRated(true)
                                    }}
                                />

                                <svg  
                                      className="star"
                                      height="100px"
                                      width="50px"
                                      onMouseEnter={() => setHover(ratingValue)}
                                      onMouseOut={() => setHover(null)} 
                                      color={ratingValue <= ( hover || rating ) ? "#FFB400" : "lightgrey"}
                                    
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 51 48"
                                    >
                                      <path
                                            fill={ratingValue <= ( hover || rating ) ? "#FFB400" : "none"}
                                            stroke={ratingValue <= ( hover || rating ) ? "#FFB400" : "#999999"} 
                                            d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                                        />
                                </svg>
                               
                            </label>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Rating