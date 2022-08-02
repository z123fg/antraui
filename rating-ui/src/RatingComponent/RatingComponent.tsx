import React, { FC, useState  } from 'react';
import './RatingComponent.scss';

interface IRatingProps {
    defaultValue?: number,
}

const RatingComponent:FC<IRatingProps> = () => {
    const [rating, setRating] = useState(0);
   
    return (
        <div className="rating__container">
             {[...Array(5)].map((star, index) => {
                  index += 1;
                return (
                  <button
                    key={index}
                    className={index <= rating ? "star__on" : "star__off"}
                    onClick={() => setRating(index)}
                  >
                    <span className="star">&#9733;</span>
                  </button>
                );
             })}
    </div>
    )
}

export default RatingComponent
