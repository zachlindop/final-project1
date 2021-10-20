import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function Review({review}){
    return (
    <div id="lifeHackReviewsPage">
        {review.review}
        <h6 class="inlineReviewInfo">
            <NavLink activeClassName="active" to={`users/${review.user_id}`}>
                (By {review.user_name})
            </NavLink>            
        </h6> 
        {<img class="inlineReviewInfo" id="smallImage" src= {review.user_image}/>}
    </div>
    )
}

export default Review;

