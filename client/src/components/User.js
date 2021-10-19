import { useEffect, useState } from 'react';

function User() {
    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/users")
            .then(r => r.json())
            .then(data => setUser(data))
        }, []);

    return (<div id="user">

        <h1>Users</h1>
        {user.map(item => 
        <div id="userGrid">
            <h1 id="userName">{item.username}</h1>
            <br/>
            <img class="image" src={item.image} />
            <br/>
            
            {item.about}
        </div>)
        }

    </div>)
}
export default User;