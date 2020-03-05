import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Logout from './component/Logout';
import SongList from './component/SongList';
import NavBar from './component/NavBar';
import Register from './component/Register';
import HomePage from './component/homePage';
import Login from './component/Login';
import PrivateRoute from './utils/PrivateRoute';
import './App.css';

function App() {
  const [ loggedIn, setLoggedIn ] = useState();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      setLoggedIn(false);
    } else {
      setLoggedIn(true);
    }
  }, []);

  return (
    <Router>
      <NavBar loggedIn={loggedIn}/>
       <div className="App">
        <Route
          exact 
          path='/' 
          render={props => (
            <Login 
              {...props}
              loggedIn={loggedIn}
            />
          )}
            />
        <Route
          path='/login'
          render={props => (
            <Login
              {...props}
              loggedIn={loggedIn}
            />
          )}
          />
        <PrivateRoute exact path='/homepage' component={HomePage}/>
        <PrivateRoute path='/songlist' component={SongList} />
        <PrivateRoute path="/logout" component={Logout} />
        
        <Route path='/register' component={Register}/>
       </div>
    </Router>
  );
}

export default App;
