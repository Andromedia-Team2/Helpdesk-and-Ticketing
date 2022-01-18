import React, { useState }  from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  console.log(rating)
  return (
    <div className="body-star">
	 {[...Array(5)].map((star, i) => {
	    const ratingValue = i+1;
      
	    return (
	    <label>
	        <input 
             type="radio" 
             key={ratingValue}
             name="rating" 
             value={ratingValue} 
             onClick={() => setRating(ratingValue)}  />
	    <FaStar
            className="star" 
            color={ratingValue <= (hover || rating) ? "#ffc107" : ""} 
            size={20} 
            onMouseEnter={ () => setHover(ratingValue)}
            onMouseLeave={ () => setHover(0)}/>
	  </label>

     )})}
     </div>
  );
};

export default StarRating;