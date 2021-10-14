import './App.css';
import Navbar from './Navbar'
//import { NavLink } from "react-router-dom"
import { useState, useEffect } from 'react'

function App() {

  const [allUsers, setAllUsers] = useState( [] )
  console.log("state of Our allUsers", allUsers)

  const [currentUser, setCurrentUser] = useState([])
  console.log("Who is Our CurrentUser?? : ", currentUser)

  const [anyUserActive, setActiveUserState] = useState( false )
  console.log("Is Anyone Logged In?? : ", anyUserActive)

  useEffect(()=>{

    fetch("http://localhost:3000/users")
    .then(r => r.json())
    .then(console.log)

  }, [] )

  const [username, setUsername] = useState( "" )
  console.log("In Form - username: ", username)
    const typingUsername =(sythEvent)=>{
      setUsername(sythEvent.target.value)

    }

  const handleUserSignup =(sythEvent)=>{
    sythEvent.preventDefault()
    //console.log(sythEvent)
    console.log("In handleUserSignup")
    // console.log("!! Remember the ByeBug!!")

    const userObj = {
      username: username,
      // username: "NewUser",
      password: "123"

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
    const handleUserLogin =(sythEvent)=>{
      sythEvent.preventDefault()
      //console.log(sythEvent)
      console.log("In handleUserLogin")
      // console.log("!! Remember the ByeBug!!")
  
      const userObj = {
      //   username: username
        
      //   // password: "123"
  
      }
  
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
      setActiveUserState(false)
      //Saying Now No One is Logged In
  
    })

    }

     //User- CRUD: (DELETE) + (UPDATE) M

     //User-Delete
     const handleDeleteUserAccount =(sythEvent)=>{
      sythEvent.preventDefault()
      console.log("Remember the ByeBug!!")

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
          
          //Saying Now No One is Logged In
      
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
        <button onClick={handleDeleteUserAccount}>Delete Account</button>
        <br></br>

        <h3>Edit your Info</h3>

        <form onSubmit={handleEditUserAccount}>
          <label>Username: </label>
          <input type="text" value={usernameBeingEdited} onChange={typingUsernameBeingEdited} placeholder="edit" />
          <input type="submit" value="Edit" />
        </form>
        
        
        <br></br></>)
        :
        (<></>)
    }

  const renderSignupAndLogin =()=>{
    return(<>

    <form onSubmit={handleUserSignup} className="wrap">
      <h1>Sign up</h1>
      <label>Username:</label>
      <input type="text" value={username} onChange={typingUsername} placeholder="enter name"/>
      <br></br>
      <label>Password:</label>
      <input type="password" placeholder="enter password" />
      <br></br>
      <input type="submit" value="Signup"/>
    </form>
    
    
    <br></br>
    <br></br>

    <form onSubmit={handleUserLogin} className="wrap">
      <h1>Log in</h1>
      <label>Username:</label>
      <input type="text" value={usernameForLogin} onChange={typingUsernameForLogin} placeholder="enter name"/>
      <br></br>
      <label>Password:</label>
      <input type="password" placeholder="enter password" />
      <br></br>
      <input type="submit" value="Login"/>
    </form>

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
      {/* <Navbar />
         <Router>
          <Switch>

            <Route path="/games" component = {Games}>
              <Games users={users} games={games} setGames={setGames} />
              <NavLink to="/">
                <h3>Home</h3>
              </NavLink>
            <NavLink to="/users">
                    <h4> Users</h4>
            </NavLink>
            <NavLink to="/games">
                    <h4>LOZ Games</h4>
            </NavLink>
            </Route>

            <Route exact path='/login' component={Login}/>                        

            <Route path="/users" component = {Users}>
              <Users users={users} setUsers={setUsers} />
              <NavLink to="/">
                <h3>Home</h3>                
            </NavLink>
            <NavLink to="/users">
                    <h4> Users</h4>
            </NavLink>
            <NavLink to="/games">
                    <h4>LOZ Games</h4>
            </NavLink>            
            </Route>
                          
            <Route exact path="/">
            <Home />            
              <NavLink to="/">
                  <h3>Home</h3>
              </NavLink>            
              <NavLink to="/users">
                      <h4> Users</h4>
              </NavLink>
              <NavLink to="/games">
                      <h4>LOZ Games</h4>
              </NavLink>              
            </Route>          
          </Switch>
         </Router>       */}
    </div>
  );
}

export default App;
