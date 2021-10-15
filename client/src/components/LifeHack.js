import { useEffect, useState } from 'react';
//import { Button, NavItem } from 'react-bootstrap';

function  LifeHack() {
    const [lifeHack, setLifeHack] = useState([]);
    const [title, setTitle] = useState('');    
    const [kind, setKind] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        fetch("http://localhost:3000/life_hacks")
            .then(r => r.json())
            .then(data => setLifeHack(data))
        }, []);

    

    function handleCreateLifeHack(e) {
             console.log(`creating lifeHack..`);
             e.preventDefault();
    
             const data = {
                "lifeHack": {
                     "title": title,
                     "kind": kind,
                     "image": image,
                     "description": description
                 }
             }
        
             fetch("http://localhost:3000/life_hacks/", {
               method: "POST",
               headers: {
                 'Content-Type': 'application/json'
               },
               body: JSON.stringify(data)
             })
               .then(response => response.json())
               .then(lifeHacks => {
                   console.log(`lifeHack created: ${JSON.stringify(lifeHacks)}`);
                   setLifeHack([...lifeHack, lifeHacks]);
               }) 
        }

        return (

            
        <div>  
        <form className="note-editor">
                  <label htmlFor='text'>
                      Title:
                      <input type= 'text' placeholder='insert title' onChange={(e) => setTitle(e.target.value)}  />
                  </label>  
                  <br/>
                  <label htmlFor='text'>
                      Kind:
                      <input type= 'text' placeholder='insert kind' onChange={(e) => setKind(e.target.value)}  />
                  </label>   
                  <br/>  
                  <label htmlFor='text'>
                      Image:
                      <input type= 'text' placeholder='insert image' onChange={(e) => setImage(e.target.value)}  />
                  </label>
                  <label htmlFor='text'>
                      Description:
                      <input type= 'text' placeholder='insert description' onChange={(e) => setImage(e.target.value)}  />
                  </label>        
                   <div className="button-row">
                   <input onClick={handleCreateLifeHack} type="submit" value="Share Your Life Hack!"/>                          
                      {/* <Button onClick={handleCreateLifeHack} variant="warning">Create LifeHack </Button>{' '} */}
                  </div>            
                </form>
                 <div id="lifehack">

        <h1>Life Hacks!</h1>
        {lifeHack.map(item => 
        <div id="lifehackmap">
            <h1>{item.title}</h1>
            
            Catergory: {item.kind}
            <br></br>
            <br></br>
            <img class="pic" src={item.image} alt="Various LifeHack" />
            <br></br>
            <br></br>
            {item.description}
        </div>)
        }

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