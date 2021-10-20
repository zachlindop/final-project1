import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function User() {
    const [user, setUser] = useState([]);
    const { id } = useParams();
    console.log(`params: ${id}`);

    useEffect(() => {
        fetch(`http://localhost:3000/users/${id}`)
            .then(r => r.json())
            .then(data => setUser(data))
        }, []);

    return (
        <div id="user">
            <h1>User</h1>       
            <div id="userGrid">
                <h1 id="userName">{user.username}</h1>
                <img class="image" src={user.image} />
                <h2 id="bioColor">Hacker Biography</h2>{user.about}        
            </div>
        </div>
    )
}
export default User;