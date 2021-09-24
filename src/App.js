import './App.css';
import { BrowserRouter as Router,Route } from 'react-router-dom';

import NavBar from './components/navbar/navbar';
import Home from './components/home/home';
import Signup from './components/signup/signup';
import Signin from './components/signin/signin';
import Profile from './components/profile/profile';
import CreatePost from './components/createPost/createPost';

function App() {
  return (
    <Router>
        <NavBar/>

        <Route exact path="/">
           <Home/>
        </Route>
        <Route path="/signup">
           <Signup/>
        </Route>
        <Route path="/signin">
           <Signin/>
        </Route>
        <Route path="/profile">
           <Profile/>
        </Route>

        <Route path="/create-post">
            <CreatePost/>
        </Route>
    </Router>

  );
}

export default App;
