import { NavLink } from "react-router-dom"

function NavBar(){

    return(
        <div>
        <ul>
                <li>
                    <NavLink exact activeClassName="active" to="/"> 
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/life_hacks">
                        Life Hacks
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}
export default NavBar;