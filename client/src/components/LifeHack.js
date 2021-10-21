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
                    Catergory: {lifeHack.life_hack_type}
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

// export default function App() {
//     const [count, setCount] = useState(0);
  
//     useEffect(() => {
//       setCount(JSON.parse(window.localStorage.getItem('count')));
//     }, []);
  
//     useEffect(() => {
//       window.localStorage.setItem('count', count);
//     }, [count]);
  
//     const increaseCount = () => {
//       return setCount(count + 1);
//     }
//     const decreaseCount = () => {
//       return setCount(count - 1)
//     }
  
//     return (
//       <div className="App">
//         <h1> Count {count} </h1>
//         <button onClick={increaseCount}>+</button>
//         <button onClick={decreaseCount}>-</button>
//       </div>
//     );
//   }