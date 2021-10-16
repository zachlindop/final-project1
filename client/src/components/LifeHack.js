import { useEffect, useState } from 'react';
//import { Button, NavItem } from 'react-bootstrap';
import Reviews from './Reviews';

function  LifeHack({lifeHack, currentUserId}) {
    const [lifeHackReviews, setLifeHackReviews] = useState(lifeHack.reviews);

    return (         
        <div>  
            <div id="lifehack">                    
                <div id="lifehackmap">
                    <h1>{lifeHack.title}</h1>            
                    Catergory: {lifeHack.kind}
                    <br></br>
                    <br></br>
                    <img class="pic" src={lifeHack.image} alt="Various LifeHack" />
                    <br></br>
                    <br></br>
                    {lifeHack.description}
                    <br/>
                    <button>❤️ Likes:</button>
                    <Reviews currentUserId={currentUserId} lifehackId={lifeHack.id} reviews={lifeHackReviews} setLifeHackReviews={setLifeHackReviews} />
                </div>
            </div>                  
        </div>
    )
}

export default LifeHack;