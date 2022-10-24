import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import MyBrews from './components/MyBrewsFolder/MyBrews';
import FavoriteBrews from './components/FavoritesFolder/FavoriteBrews';
import {Route, Switch} from 'react-router-dom';
import React,{useState,useEffect} from 'react'
import BrewsList from './components/MyBrewsFolder/BrewsList';
import Search from './components/Search';

function App() {
  const [myBrewsCards,setMyBrewsCards]=useState([])
  const [search, setSearch]=useState("")

  useEffect(()=>{
    fetch("http://localhost:9292/api/entries/user/4")
    .then((res) =>res.json())
    .then(setMyBrewsCards)
  },[])

    //Search bar logic for myBrews. Will need to make a filter for Favorites 

  const filterMyBrewsCards = myBrewsCards.filter((myBrewsCard) =>
  myBrewsCard.name.toLowerCase().includes(search.toLowerCase())
  )

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
              <Search search={search} setSearch={setSearch}/>
              <MyBrews 
                setSearch={setSearch}
                filterMyBrewsCards={filterMyBrewsCards} 
                
              />              
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
