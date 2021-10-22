import { useEffect, useState } from 'react';
//import { Button, NavItem } from 'react-bootstrap';
import Reviews from './Reviews';

function  LifeHack({lifeHack, currentUserId}) {
    const [lifeHackReviews, setLifeHackReviews] = useState(lifeHack.reviews);
    const [countLove, setCountLove] = useState(lifeHack.total_loves);
    const [countHate, setCountHate] = useState(lifeHack.total_hates);

    function handleCountClickLoves() {
        console.log(`increasing love for lifeHack..`);        

        const data = {
           "life_hack_user_love": {
                "user_id": currentUserId,
                "life_hack_id": lifeHack.id                                
            }
        }
       console.log(`data: ${JSON.stringify(data)}`);
        fetch("http://localhost:3000/life_hack_user_loves/", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
          .then(response => response.json())
          .then(lifeHackUserLove => {
              console.log(`lifeHackUserLove created: ${JSON.stringify(lifeHackUserLove)}`);
              setCountLove(lifeHackUserLove.total_loves_for_life_hack);
          })      
    }

    function handleCountClickHates() {
        console.log(`increasing hate for lifeHack..`);        

        const data = {
           "life_hack_user_hate": {
                "user_id": currentUserId,
                "life_hack_id": lifeHack.id                                
            }
        }
       console.log(`data: ${JSON.stringify(data)}`);
        fetch("http://localhost:3000/life_hack_user_hates/", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
          .then(response => response.json())
          .then(lifeHackUserHate => {
              console.log(`lifeHackUserHate created: ${JSON.stringify(lifeHackUserHate)}`);
              setCountHate(lifeHackUserHate.total_hates_for_life_hack);
          })      
    }

    return (         
        <div>  
            <div id="lifehack">                    
                <div id="lifehackmap">
                    {lifeHack.title}
                    <br/>            
                    Catergory: {lifeHack.life_hack_type}
                    <br></br>
                    <br></br>
                    <img class="pic" src={lifeHack.image} alt="Various LifeHack" />
                    <br></br>
                    <br></br>
                    {lifeHack.description}
                    <br/>
                    {
                        currentUserId ? 
                            <button onClick={handleCountClickLoves}>❤️ Loves: {countLove}</button> 
                            : 
                            <button>❤️ Loves: {countLove}</button>
                    }
                    {
                        currentUserId ? 
                            <button onClick={handleCountClickHates}>💔 Hates: {countHate}</button>
                            : 
                            <button>💔 Hates: {countHate}</button>
                    }                                    
                    <Reviews currentUserId={currentUserId} lifehackId={lifeHack.id} reviews={lifeHackReviews} setLifeHackReviews={setLifeHackReviews} />
                </div>
            </div>                  
        </div>
    )
}

export default LifeHack;
