import { useState } from 'react';
import { Link,useHistory } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

import axios from 'axios';

import './signup.css';
function Signup(){
    
    const history=useHistory();
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");
    

    const HandleSubmit=async ()=>{
         
        try {

            const data= await axios.post("http://localhost:5000/user/signup",{
                name:name,
                email:email,
                password:password,
                confirm_password:confirmPassword,
    
            })
            alert("hello");
            history.push("/login");
            
        } catch ({response}) {
           
           console.log(response);
        }

    }

    return(

        <div className="signup-container">
            <Skeleton/>
            <div className="card signup-card">
                <h2>Lopo</h2>
                <input 
                    type="text"
                    placeholder="name"
                    value={name}
                    onChange={(e)=>{setName(e.target.value)}}
                 />
                <input 
                    type="text"
                    placeholder="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                 />
                 <input  
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                 />
                <input  
                    type="password"
                    placeholder="confirm-password"
                    value={confirmPassword}
                    onChange={(e)=>setConfirmPassword(e.target.value)}
                 />
                 <button className="btn waves-effect waves-light #64b5f6 blue lighten-2"
                     onClick={()=>HandleSubmit()}
                 >
                     Signup
                 </button>

                <h5>
                    <Link to="/signin">All ready have an account ?</Link>
                </h5>
            </div>
        </div>

    )
}

export default Signup;