import { useEffect, useState } from 'react';

function Review(){
    const [review, setReview] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/reviews")
            .then(r => r.json())
            .then(data => setReview(data))
        }, []);

    return (<div id="review">

        <h1>Reviews</h1>
        {review.map(item => 
        <div>
            {item.review}
           
        </div>)
        }

    </div>)



}


export default Review

