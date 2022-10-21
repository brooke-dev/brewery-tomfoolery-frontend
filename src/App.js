import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import MyBrews from './components/MyBrewsFolder/MyBrews';
import FavoriteBrews from './components/FavoritesFolder/FavoriteBrews';
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
        <div className="content-container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route  exact path="/about">
              <About />
            </Route>
            <Route  exact path="/myBrews">
              <MyBrews />
            </Route>
            <Route  path="/favorites">
              <FavoriteBrews />
            </Route>
          </Switch>
      
        </div>
    </div>
  );
}

export default App;
