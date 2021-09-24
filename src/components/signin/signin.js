import { useState } from "react";
import { Link } from "react-router-dom";
import "./signin.css";

function Signin(){
    
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    
    const HandleSubmitButton=()=>{
         
         alert("hello")
    }

    return(

       <div className="login-container">
           <div className="card login-card">
               <h2>Lopo</h2>
               <input 
                   type="text"
                   placeholder="email"
                   value={email}
                   minLength={5}
                   maxLength={1000}
                   required
                   onChange={(e)=>setEmail(e.target.value)}
                />
                <input  
                   type="password"
                   placeholder="password"
                   value={password}
                   required
                   minLength={5}
                   maxLength={255}
                   onChange={(e)=>setPassword(e.target.value)}
                />
                <button 
                   className="btn waves-effect waves-light #64b5f6 blue lighten-2"
                   onClick={()=>HandleSubmitButton()}
                >
                    Signin
                </button>
                <h5> <Link to="/signup"> Dont't Have an account ? </Link></h5>
           </div>
       </div>

    )
}
export default Signin;