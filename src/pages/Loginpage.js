import React,{useState} from 'react'
import "./Loginpage.css"
import { useNavigate } from "react-router-dom";

function Loginpage() {
  const [username, setUsername ]=useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate ();

  
  const handleLogin = (e) =>{
    e.preventDefault();
  
    if (username === password) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      navigate("/order")
      
      alert('Login Successful');
      
    } else {
      alert('Please enter valid credentials!');

    }
  };

  

  return (
<div className="loginmain">
  <form action="" className="loginform" onSubmit={handleLogin}>
    <h1>Sign In</h1>
    <input type="Username" className='input1' required placeholder='Enter Username' value={username}
          onChange={(e) => setUsername(e.target.value)} />
    <input type="Password" className='input1' required placeholder='Enter User Password'  value={password}
          onChange={(e) => setPassword(e.target.value)}/>
    <button className='login-btn'>Login</button>
  </form>
</div>
  )
}

export default Loginpage







// function for display signout  button





// import React, { useState } from 'react';
// import "./Loginpage.css";
// import { useNavigate } from "react-router-dom";

// function Loginpage() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();

//     if (username === password) {
//       localStorage.setItem("username", username);
//       localStorage.setItem("password", password);
//       localStorage.setItem("isLoggedIn", "true");
//       setIsLoggedIn(true);
//       navigate("/order");
//       alert('Login Successful');
//     } else {
//       alert('Please Enter Username as Password  ');
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("username");
//     localStorage.removeItem("password");
//     localStorage.setItem("isLoggedIn", "false");
//     setIsLoggedIn(false);
//   };

//   return (
//     <div className="loginmain">
//       {isLoggedIn ? (
//         <div>
//           <h2>By By, {localStorage.getItem("username")}</h2>
//           <button className='login-btn' onClick={handleLogout}>Sign Out</button>
//         </div>
//       ) : (
//         <form action="" className="loginform" onSubmit={handleLogin}>
//           <h1>Sign In</h1>
//           <input
//             type="text"
//             className='input1'
//             required
//             placeholder='Enter Username'
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//           <input
//             type="password"
//             className='input1'
//             required
//             placeholder='Enter User Password'
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button className='login-btn'>Login</button>
//         </form>
//       )}
//     </div>
//   )
// }

// export default Loginpage;
