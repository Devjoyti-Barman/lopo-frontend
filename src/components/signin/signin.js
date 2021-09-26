import axios from "axios";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./signin.css";

function Signin(){
    
    const [isLoading,setIsLoading]=useState(false);

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    
    const HandleSubmit=async ()=>{

        
        try {
            setIsLoading(true);
            const response=await axios.post("http://localhost:5000/user/signin",{
                email:email,
                password:password
            });
            setIsLoading(false);
            toast.success("successfully login");

        } catch ({response}) {
            setIsLoading(false);
            toast.error( response.data.error);
        }
        



    }

    return(
        <div>
         <ToastContainer/>
        {
            isLoading===true ? <Skeleton count={10}/> :
            <>
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
                           onClick={()=>HandleSubmit()}
                        >
                            Signin
                        </button>
                        <h5> <Link to="/signup"> Dont't Have an account ? </Link></h5>
                    </div>
                </div>
            </>
        }
        </div>

    )
}
export default Signin;