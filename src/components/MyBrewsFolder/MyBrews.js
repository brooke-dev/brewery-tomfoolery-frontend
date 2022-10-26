import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import BrewsList from'./BrewsList'

const MyBrews = ({search,setSearch,id,editFormData}) => {

    const [myBrewsCards,setMyBrewsCards]=useState([])
    
    useEffect(()=>{
        fetch(`http://localhost:9292/api/entries/user/${id}`)
        .then((res) =>res.json())
        .then(data => {
            setSearch("")
            setMyBrewsCards(data)
        })
      },[id, editFormData])

    //Search bar logic for myBrews.  
    const filterMyBrewsCards = myBrewsCards.filter((myBrewsCard) =>
    myBrewsCard.name.toLowerCase().includes(search.toLowerCase())
    )

    //Logic for deleting a brew:
    function handleDeleteBrew(deleteId){
        const updatedBrewArray=myBrewsCards.filter((oneMyBrewCard) => oneMyBrewCard.id !== deleteId);
        setMyBrewsCards(updatedBrewArray)
    }

    
    return (
        <div className='brews-container'>
            <div className="my-brews-container">
                <h1>My Brews</h1>
                <BrewsList 
                    currentId={id} 
                    filterMyBrewsCards={filterMyBrewsCards} 
                    handleDeleteBrew={handleDeleteBrew} 
                />
            </div>
        </div>

    )
}

export default MyBrews