import { useEffect, useState } from 'react';

function Review({review}){
    return (
    <div id="review">
        {review.review} (By {review.user_name})
    </div>
    )
}

export default Review;

