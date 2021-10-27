import { NavLink } from "react-router-dom"

function NavBar(){

    return(
        <div >
            
                
                    <NavLink exact activeClassName="active" to="/"> 
                        <h1 className="navBarHorizontal">Home</h1> 
                    </NavLink>
                    <NavLink activeClassName="active" to="/life_hacks">
                        <h1 className="navBarHorizontal"> Lifehacks</h1> 
                    </NavLink>
                    <NavLink activeClassName="active" to="/users">
                        <h1 className="navBarHorizontal">Users</h1>
                    </NavLink>
              
            
        </div>
    )
}
export default NavBar;