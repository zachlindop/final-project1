import { useEffect, useState } from 'react';

function Review({review}){
    const [reviewText, setReviewText] = useState('');

    function handleCreateReview(e) {
        console.log(`creating review..`);
        e.preventDefault();

        const data = {
           "review": {
                "review": reviewText,
                "user_id": review.user_id,
                "life_hack_id": review.life_hack_id,
            }
        }
       console.log(`data: ${JSON.stringify(data)}`);

       fetch("http://localhost:3000/reviews/", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(review => {
            console.log(`review created: ${JSON.stringify(review)}`);
            // setLifeHacks([...lifeHacks, lifeHack]);
        })
    }

    return (
    <div id="review">
        {review.review}
        <form className="note-editor">
            <label htmlFor='text'>
                Write your Review:
                <input type= 'text' placeholder='insert title' onChange={(e) => setReviewText(e.target.value)}  />
            </label>  
            <br/>
            <div className="button-row">
                   <input onClick={handleCreateReview} type="submit" value="Submit your review!"/>
                  </div>             
        </form>
    </div>
    )



}


export default Review

