
import { Link } from 'react-router-dom';
import './signup.css'
function Signup(){

    return(

        <div className="signup-container">
            <div className="card signup-card">
                <h2>Lopo</h2>
                <input 
                    type="text"
                    placeholder="name"
                 />
                <input 
                    type="text"
                    placeholder="email"
                 />
                 <input  
                    type="password"
                    placeholder="password"
                 />
                <input  
                    type="password"
                    placeholder="confirm-password"
                 />
                 <button className="btn waves-effect waves-light #64b5f6 blue lighten-2">
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