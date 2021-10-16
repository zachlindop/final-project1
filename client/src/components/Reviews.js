import { useEffect, useState } from 'react';
import Review from './Review';

function Reviews({reviews, setLifeHackReviews, lifehackId}){
    const [reviewText, setReviewText] = useState('');

    function handleCreateReview(e) {
        console.log(`creating review..`);
        e.preventDefault();

        const data = {
           "review": {
                "review": reviewText,
                "user_id": 55, // currentUserId
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


    return (<div id="review">
        <h1>Reviews</h1>
        {reviews.map(review => 
        <div>
            <Review review={review} />
        </div>)
        }
        <form className="note-editor">
            
            <label htmlFor='text'>
                Write your Review:
                <br/>
                <input type= 'text' placeholder='insert title' onChange={(e) => setReviewText(e.target.value)}  />
            </label>  
            <br/>
            <div className="button-row">
                   <input onClick={handleCreateReview} type="submit" value="Submit your review!"/>
                  </div>             
        </form>
    </div>)
}


export default Reviews;

