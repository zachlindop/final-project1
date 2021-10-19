import { useEffect, useState } from 'react';
import LifeHack from './LifeHack';
//import { Button, NavItem } from 'react-bootstrap';
import Reviews from './Reviews';

function  LifeHacks({currentUserId}) {
    const [lifeHacks, setLifeHacks] = useState([]);
    const [title, setTitle] = useState('');    
    const [lifeHackType, setLifeHackType] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        fetch("http://localhost:3000/life_hacks")
            .then(r => r.json())
            .then(data => setLifeHacks(data))
        }, []);

    function handleCreateLifeHack(e) {
             console.log(`creating lifeHack..`);
             e.preventDefault();
    
             const data = {
                "life_hack": {
                     "title": title,
                     "life_hack_type": lifeHackType,
                     "image": image,
                     "description": description
                 }
             }
            console.log(`data: ${JSON.stringify(data)}`);
             fetch("http://localhost:3000/life_hacks/", {
               method: "POST",
               headers: {
                 'Content-Type': 'application/json'
               },
               body: JSON.stringify(data)
             })
               .then(response => response.json())
               .then(lifeHack => {
                   console.log(`lifeHack created: ${JSON.stringify(lifeHack)}`);
                   setLifeHacks([...lifeHacks, lifeHack]);
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
                        Type of LifeHack:
                        <input type= 'text' placeholder='insert type of hack' onChange={(e) => setLifeHackType(e.target.value)}  />
                    </label>   
                    <br/>  
                    <label htmlFor='text'>
                        Image:
                        <input type= 'text' placeholder='insert image' onChange={(e) => setImage(e.target.value)}  />
                    </label>
                    <br/>
                    <label htmlFor='text'>
                        Description:
                        <input type= 'text' placeholder='insert description' onChange={(e) => setDescription(e.target.value)}  />
                    </label>        
                    <div className="button-row">
                    <input onClick={handleCreateLifeHack} type="submit" value="Share Your Life Hack!"/>                          
                        {/* <Button onClick={handleCreateLifeHack} variant="warning">Create LifeHack </Button>{' '} */}
                    </div>
                    </form>
            <div id="lifehack">                        
                <h1>Life Hacks!</h1>
                {lifeHacks.map(item => 
                    <LifeHack lifeHack={item} currentUserId={currentUserId} />)
                }
            </div>                   
        </div>
    )

}

export default LifeHacks;