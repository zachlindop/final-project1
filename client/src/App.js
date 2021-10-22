import './App.css';
//import { Route } from 'react-router-dom';
import NavBar from './NavBar'
import Home from './Home'
import Users from'./components/Users';
import User from './components/User';
import LifeHacks from './components/LifeHacks'
import Review from './components/Review'
import { NavLink } from "react-router-dom"
import { useState, useEffect } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

function App() {

  // const [allUsers, setAllUsers] = useState( [] )
  // console.log("state of Our allUsers", allUsers)

  const [currentUser, setCurrentUser] = useState([]);
  const [currentUserId, setCurrentUserId] = useState('');
  console.log("Who is Our CurrentUser?? : ", currentUser);

  const [anyUserActive, setActiveUserState] = useState( false )
  console.log("Is Anyone Logged In?? : ", anyUserActive)

  useEffect(()=>{
    fetch("http://localhost:3000/users")
    .then(r => r.json())
    .then(console.log)

    loginStatus();

  }, [] )

  const [username, setUsername] = useState( "" )
  console.log("In Form - username: ", username)
  const [image, setImage] = useState( "" )
  const [aboutUser, setAboutUser] = useState( "" )
  const typingUsername =(sythEvent)=>{
      setUsername(sythEvent.target.value)
  }

  const handleUserSignup =(sythEvent)=>{
    sythEvent.preventDefault()
    console.log("In handleUserSignup")
  
    const userObj = {
      username: username,
      password: "123",
      image: image,
      about: aboutUser
    }

    console.log("USER WE WILL CREATE: ", userObj)

    fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(userObj)

    })
    .then(r => r.json())
    .then(console.log)
  }
 
  const [usernameForLogin, setUsernameForLogin] = useState("")
  console.log("In Form - usernameForLogin: ", usernameForLogin)
  const typingUsernameForLogin =(sythEvent)=>{
      setUsernameForLogin(sythEvent.target.value)
  }

  const loginStatus = () => {   
    const loggedInUserId = localStorage.getItem("currentUserId");

    console.log(`loggedInUserId: ${loggedInUserId}`);

    if (loggedInUserId) {
      console.log('Not making API call. User found in local storage');      
      setCurrentUserId(loggedInUserId);
      setActiveUserState(true);      
    }
  };

  const handleUserLogin =(sythEvent)=>{
      sythEvent.preventDefault()
      console.log("In handleUserLogin")
    
      console.log("USER username to CHECK: ", usernameForLogin)
  
      fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({username: usernameForLogin})
  
      })
      .then(r => r.json())
      .then(loggedInUser =>{ console.log("yay! We loggined In >> ", loggedInUser)
        setCurrentUser(loggedInUser)
        setActiveUserState(true)
        setCurrentUserId(loggedInUser.id);
        localStorage.setItem("currentUserId", loggedInUser.id);
      })
    }

    const handleUserLogout =(sythEvent)=>{
      sythEvent.preventDefault()
      console.log("Remember the ByeBug!!")

      fetch("http://localhost:3000/Logout", {
      
        method: "DELETE"
      
    })
    .then(r=> r.json())
    .then(loggedOutUser => {console.log("Until Next time!! >> ", loggedOutUser)
  
      setCurrentUser( {} )
      setActiveUserState(false);
      setCurrentUserId('');
      localStorage.clear();
      //Saying Now No One is Logged In
    })

    }

     //User- CRUD: (DELETE) + (UPDATE) M

     //User-Delete
     const handleDeleteUserAccount =(sythEvent)=>{
      sythEvent.preventDefault()
      console.log("Deleting this User!!")

      fetch(`http://localhost:3000/users/${currentUser.id}`, {
      
        method: "DELETE"
      
    })
    .then(r=> r.json())
    .then(whoDeletedTheirAccount => {console.log("BYEFELICA >> ", whoDeletedTheirAccount)
  
      setCurrentUser( {} )
      setActiveUserState(false)
      //Saying Now No One is Logged In
  
    })

     }
        const [usernameBeingEdited, setUsernameBeingEdited] = useState("")
        console.log("In Form - usernameForLogin: ", usernameBeingEdited)
          const typingUsernameBeingEdited =(sythEvent)=>{
          
            setUsernameBeingEdited(sythEvent.target.value)

          }

        //User-(Update)
        const handleEditUserAccount =(sythEvent)=>{
          sythEvent.preventDefault()
          console.log("Remember the ByeBug!!")
    
          fetch(`http://localhost:3000/users/${currentUser.id}`, {
          
            method: "PATCH",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({username: usernameBeingEdited})
          
        })
        .then(r=> r.json())
        .then(editedUser => {console.log("WOW >> ", editedUser)
      
          setCurrentUser(editedUser)
      
        })
    
         }
        //renderSignupAndLogin

      //Responsible for Rendering a Logout Button
      const isThereACurrentUser =()=>{ console.log ("In isThereACurrentUser")

          //Ternary-Concern ? True : False
        return anyUserActive ?
        (<><br></br>
        <button onClick ={handleUserLogout}>Log Out</button>
        <br></br>
        {/* <button onClick={handleDeleteUserAccount}>Delete Account</button>
        <br></br> */}

        {/* <h3>Edit your Info</h3>

        <form onSubmit={handleEditUserAccount}>
          <label>Username: </label>
          <input type="text" value={usernameBeingEdited} onChange={typingUsernameBeingEdited} placeholder="edit" />
          <input type="submit" value="Edit" />
        </form> */}
        
        
        <br></br></>)
        :
        (<></>)
    }

  const renderSignupAndLogin =()=>{
    return(<>

    {
    !currentUserId && 
      <form onSubmit={handleUserSignup} className="wrap">
        <h1 className="header">Sign up</h1>
        <label>Username:</label>
        <input type="text" value={username} onChange={typingUsername} placeholder="enter name"/>
        <br></br>
        <label>Password:</label>
        <input type="password" placeholder="enter password" />
        <br></br>
        <label htmlFor='text'>
        Image:
        <input type="text" placeholder="enter image" onChange={(e) => setImage(e.target.value)} />
        </label>
        <br></br>
        <label>About User:</label>
        <input type="text" placeholder="user description" onChange={(e) => setAboutUser(e.target.value)} />
        <br></br>
        <input type="submit" value="Signup"/>
      </form>
    }
    
    <br></br>
    <br></br>
    { 
      !currentUserId && 
      <form onSubmit={handleUserLogin} className="wrap">
        <h1 className="header">Log in</h1>
        <label>Username:</label>
        <input type="text" value={usernameForLogin} onChange={typingUsernameForLogin} placeholder="enter name"/>
        <br></br>
        <label>Password:</label>
        <input type="password" placeholder="enter password" />
        <br></br>
        <input type="submit" value="Login"/>
      </form>
    }

      {isThereACurrentUser()}
      {/* Will see or Not See a Logout Button */}

    <br></br>
    <br></br>
    <br></br>
    <br></br>

      </>)
  }

  return (
    <div className="App">
      {renderSignupAndLogin()}      
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/users">
            <Users />
          </Route>

          <Route exact path="/users/:id" component={User} />

          <Route exact path ="/life_hacks">
            <LifeHacks currentUserId={currentUserId} />
          </Route>
        </Switch>
      </Router>    
    </div>
  );
}

export default App;     