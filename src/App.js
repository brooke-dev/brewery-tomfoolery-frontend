import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import MyBrews from './components/MyBrewsFolder/MyBrews';
import EditBrewCard from './components/MyBrewsFolder/EditBrewCard';
import Login from './components/Login';
import FavoriteBrews from './components/FavoritesFolder/FavoriteBrews';
import {Route, Switch} from 'react-router-dom';
import React,{useState,useEffect} from 'react'
// import BrewsList from './components/MyBrewsFolder/BrewsList';
import Search from './components/Search';

function App() {
  const [token, setToken] = useState(false);
  const [currentUser, setUser] = useState("");
  const [currentId, setCurrentId] = useState();
  const [myBrewsCards,setMyBrewsCards]=useState([])
  const [search, setSearch]=useState("")

  useEffect(()=>{
    fetch(`http://localhost:9292/api/entries/user/${currentId}`)
    .then((res) =>res.json())
    .then(setMyBrewsCards)
  },[currentId])

  //Logic for deleting a brew:
  function handleDeleteBrew(id){
    const updatedBrewArray=myBrewsCards.filter((oneMyBrewCard) => oneMyBrewCard.id !== id);
    setMyBrewsCards(updatedBrewArray)
  }

  //Search bar logic for myBrews. Will need to make a filter for Favorites 
  const filterMyBrewsCards = myBrewsCards.filter((myBrewsCard) =>
  myBrewsCard.name.toLowerCase().includes(search.toLowerCase())
  )

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
              <Search search={search} setSearch={setSearch}/>
              <MyBrews 
                setSearch={setSearch}
                filterMyBrewsCards={filterMyBrewsCards} 
                id={currentId}
                handleDeleteBrew={handleDeleteBrew}
              />              
            </Route>
            <Route  path="/favorites">
              <FavoriteBrews id={currentId}/>
            </Route>
            <Route  exact path="/myBrews/:id">
              <EditBrewCard/>
            </Route>
          </Switch>
        </div>
    </div>
  );
}

export default App;
