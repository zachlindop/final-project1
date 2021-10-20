import { useEffect, useState } from 'react';

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/users")
            .then(r => r.json())
            .then(data => setUsers(data))
        }, []);

    return (<div id="user">

        <h1>Users</h1>
        {users.map(item => 
        <div id="userGrid">
            <h1 id="userName">{item.username}</h1>
            <img class="image" src={item.image} />
            <h2 id="bioColor">Hacker Biography</h2>  {item.about}
        </div>)
        }

    </div>)
}
export default Users;