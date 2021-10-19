import { useEffect, useState } from 'react';
//import { Button, NavItem } from 'react-bootstrap';
import Reviews from './Reviews';

function  LifeHack({lifeHack, currentUserId}) {
    const [lifeHackReviews, setLifeHackReviews] = useState(lifeHack.reviews);
    const [countLove, setCountLove] = useState(0)
    const [countHate, setCountHate] = useState(0)

    function handleCountClickLoves() {
        setCountLove(countLove + 1)
      }

    function handleCountClickHates() {
        setCountHate(countHate + 1)
      }

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
                    <button onClick={handleCountClickLoves}>❤️ Loves: {countLove}</button>
                    <button onClick={handleCountClickHates}>💔 Hates: {countHate}</button>
                    <Reviews currentUserId={currentUserId} lifehackId={lifeHack.id} reviews={lifeHackReviews} setLifeHackReviews={setLifeHackReviews} />
                </div>
            </div>                  
        </div>
    )
}

export default LifeHack;