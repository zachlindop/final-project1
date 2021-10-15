import { useEffect, useState } from 'react';
import Review from './Review';

function Reviews({reviews, lifehackId}){

    return (<div id="review">
        <h1>Reviews</h1>
        {reviews.map(review => 
        <div>
            <Review review={review} />
        </div>)
        }
    </div>)
}


export default Reviews;

