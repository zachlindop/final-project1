import { useEffect, useState } from 'react';

function Review({review}){
    return (
    <div id="lifeHackReviewsPage">
        {review.review} <h6 class="inlineReviewInfo">(By {review.user_name})</h6> {<img class="inlineReviewInfo" id="smallImage" src= {review.user_image}/>}
    </div>
    )
}

export default Review;

