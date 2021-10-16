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
    )   

    </div>)
            {/* <div className="gameLibrary">
                {users.map((user, index) => {
                    console.log(`user ${index}`);
                    return (        
                        <div key={user.updated_at}>
                            <User user={user} users={users} setUsers={setUsers} />
                        </div>
                    )
                })}
        
                
             
            </div> */}
                   
            </div>
            )

}

export default LifeHack;

// const Users = ({ users, setUsers }) => {
//     const [userName, setUserName] = useState('');    
//     const [favLozGame, setFavLozGame] = useState('');
//     const [pic, setPic] = useState(''); 


//     function handleCreateUser(e) {
//         console.log(`creating user..`);
//         e.preventDefault();

//         const data = {
//             "user": {
//                 "name": userName,
//                 "fav_loz_game": favLozGame,
//                 "pic": pic
//             }
//         }
    
//         fetch("http://localhost:3001/users/", {
//           method: "POST",
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(data)
//         })
//           .then(response => response.json())
//           .then(user => {
//               console.log(`user created: ${JSON.stringify(user)}`);
//               setUsers([...users, user]);
//           }) 
//     }


// return (

//     // <input
//     //         type="text"
//     //         name="name"
//     //         placeholder="Is Great for!"
//     //         className="input-text"
//     //         value={good_for}
//     //         onChange={(e) => setGood_for(e.target.value)}
//     //       />
// <div>  
// <form className="note-editor">
//           <label htmlFor='text'>
//               User Name:
//               <input type= 'text' placeholder='insert name' onChange={(e) => setUserName(e.target.value)}  />
//           </label>  
//           <br/>
//           <label htmlFor='text'>
//               Fav Loz Game:
//               <input type= 'text' placeholder='insert fav LOZ' onChange={(e) => setFavLozGame(e.target.value)}  />
//           </label>   
//           <br/>  
//           <label htmlFor='text'>
//               Pic:
//               <input type= 'text' placeholder='insert pic' onChange={(e) => setPic(e.target.value)}  />
//           </label>        
//           <div className="button-row">                          
//               <Button onClick={handleCreateUser} variant="warning">Create User </Button>{' '}
//           </div>          
//         </form>

//     <div className="gameLibrary">
//         {users.map((user, index) => {
//             console.log(`user ${index}`);
//             return (        
//                 <div key={user.updated_at}>
//                     <User user={user} users={users} setUsers={setUsers} />
//                 </div>
//             )
//         })}

        
     
//     </div>
           
//     </div>
//     )
// }