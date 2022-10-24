import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import MyBrews from './components/MyBrewsFolder/MyBrews';
import Login from './components/Login';
import FavoriteBrews from './components/FavoritesFolder/FavoriteBrews';
import {Route, Switch} from 'react-router-dom';
import React, {useState} from 'react';

function App() {
  const [token, setToken] = useState(false);
  const [currentUser, setUser] = useState("");
  const [currentId, setCurrentId] = useState();

  const handleLogOut = () => {
    setUser("");
    setToken(false);
  }

  if(!token) {
    return <Login setToken={setToken} setUser={setUser} setCurrentId={setCurrentId}/>
  }

  return (
    <div className="App">
      <NavBar username={currentUser} id={currentId} handleLogOut={handleLogOut}/>
        <div className="content-container">
          <Switch>
            <Route exact path="/">
              <Home id={currentId}/>
            </Route>
            <Route  exact path="/about">
              <About />
            </Route>
            <Route  exact path="/myBrews">
              <MyBrews id={currentId}/>
            </Route>
            <Route  path="/favorites">
              <FavoriteBrews id={currentId}/>
            </Route>
          </Switch>
        </div>
    </div>
  );
}

export default App;
