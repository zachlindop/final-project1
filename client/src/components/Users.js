import { useEffect, useState } from 'react';

function Users({users}) {
    return (<div id="user">
        <h1>Users</h1>
        {users.map(item => 
            <div id="userGrid">
                <h1 id="userName">{item.username}</h1>
                <img class="image" src={item.image} />
                <h2 id="bioColor">Hacker Biography</h2>  
                {item.about}
                {/* {item.life_hack_user_loves} */}
            </div>)
        }
    </div>)
}
export default Users;