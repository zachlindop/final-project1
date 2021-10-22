import { useEffect, useState } from 'react';
import Review from './Review';

function Reviews({reviews, setLifeHackReviews, lifehackId, currentUserId}){
    const [reviewText, setReviewText] = useState('');

    function handleCreateReview(e) {
        console.log(`creating review..`);
        e.preventDefault();

        const data = {
           "review": {
                "review": reviewText,
                "user_id": currentUserId,
                "life_hack_id": lifehackId,
            }
        }
       console.log(`data: ${JSON.stringify(data)}`);

       fetch("http://localhost:3000/reviews", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(review => {
            console.log(`review created: ${JSON.stringify(review)}`);
            setLifeHackReviews([...reviews, review]);
            setReviewText('');
        })
    }

    return (
        <div id="review">
        <h1>Reviews</h1>
        {reviews.map(review => 
        <div>
            <Review review={review} />
        </div>)
        }
        {
            currentUserId &&
            <form className="note-editors">
                
                <label htmlFor='text'>                    
                    <br/>
                    <input type= 'text' value={reviewText} placeholder='Write your Review...' onChange={(e) => setReviewText(e.target.value)}  />
                </label>  
                <br/>
                <div className="button-row">
                    <input onClick={handleCreateReview} type="submit" value="Submit your review!"/>
                </div>             
            </form>
        }
    </div>
    )
}

export default Reviews;

