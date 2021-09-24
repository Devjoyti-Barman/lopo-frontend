import {Link} from 'react-router-dom';

function NavBar(){

    return(

    <nav>
        <div className="nav-wrapper white">
          <a href="#" className="brand-logo">Logo</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/signin">Signin</Link></li>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/create-post">Create Post</Link></li>
          </ul>
        </div>
    </nav>

    )
}
export default NavBar;