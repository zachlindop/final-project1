import logo from './logo.svg';
import './App.css';
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
        <button onClick ={handleUserLogout}>LOGOUT</button>
        <br></br>
        <button onClick={handleDeleteUserAccount}>DELETE YOUR ACCOUNT</button>
        <br></br>

        <h3>Edit your Deets (Details)!</h3>

        <form onSubmit={handleEditUserAccount}>
          <label>Username: </label>
          <input type="text" value={usernameBeingEdited} onChange={typingUsernameBeingEdited} />
          <input type="submit" value="Edit Yo' Deets!"/>
        </form>
        
        
        <br></br></>)
        :
        (<></>)
    }

  const renderSignupAndLogin =()=>{
    return(<>

    <h2>Signup!</h2>

    <form onSubmit={handleUserSignup}>
      <label>Username: </label>
      <input type="text" value={username} onChange={typingUsername}/>
      <label>Password:</label>
      <input type="password" />
      <input type="submit" value="Signup!"/>
    </form>

    <br></br>
    <br></br>
    <br></br>
    <br></br>

    <h2>Login!</h2>

    <form onSubmit={handleUserLogin}>
      <label>Username: </label>
      <input type="text" value={usernameForLogin} onChange={typingUsernameForLogin}/>
      <label>Password:</label>
      <input type="password" />
      <input type="submit" value="Login!"/>
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
      <h1>Sam ;)</h1>
      {renderSignupAndLogin()}
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

export default App;
// const [asian, setAsian] = useState([]);

//     useEffect(() => {
//         fetch("http://localhost:3005/Asian")
//             .then(r => r.json())
//             .then(data => setAsian(data))
//         }, []);

//     return (<div class="food"></div>