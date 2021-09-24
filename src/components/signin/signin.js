
import { Link } from "react-router-dom";
import "./signin.css";

function Signin(){

    return(

       <div className="login-container">
           <div className="card login-card">
               <h2>Lopo</h2>
               <input 
                   type="text"
                   placeholder="email"
                />
                <input  
                   type="password"
                   placeholder="password"
                />
                <button className="btn waves-effect waves-light #64b5f6 blue lighten-2">
                    Signin
                </button>
                <h5> <Link to="/signup"> Dont't Have an account ? </Link></h5>
           </div>
       </div>

    )
}
export default Signin;