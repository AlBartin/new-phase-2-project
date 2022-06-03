import React, {useState, useEffect} from 'react'
import HomePage from './HomePage'
import Favorites from './Favorites'
import Profile from './Profile';
import Navbar from './Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {

  const [dogs, setDogs] = useState([])
  const [profile, setProfile] = useState({})
  const [favorite, setFavorite] = useState([])


  useEffect(() => {
    fetch ('http://localhost:3000/dogs')
    .then (resp => resp.json())
    .then ( setDogs )
  },[])

  const onAddProfile = (dogObj) => {
    console.log("Log within onAddProfile Function: ", dogObj)
    setProfile(dogObj)
  }

  function addFavorite(dogID) {
    const duplicateDog = favorite.find((dog) => dogID === `${dog.id}`)
    if (duplicateDog) {return alert(`You already favorited ${duplicateDog.name}!`)}
    const matchedDog = dogs.find((dog) => {
      if (dogID === `${dog.id}`) {return true}
      else {return false}
    })
    setFavorite([...favorite, matchedDog])
  }


  function removeFavorite(dogID) {
    const newFavorite = favorite.filter(dog => (parseInt(dog.id) !== parseInt(dogID)));
    setFavorite([...newFavorite])
  }

  function addDog(newDog) {
    setDogs([...dogs, newDog])
  }

  return (
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<HomePage addDog={addDog} removeFavorite={removeFavorite} addFavorite={addFavorite} dogs={dogs} setProfile={setProfile} onAddProfile={onAddProfile}/>} />
        <Route path="/favorites" element={<Favorites favorite={favorite} removeFavorite={removeFavorite} />} />
        <Route path="/profile" element={ profile && (<Profile profile={profile}/>)} />
        </Routes>
      </Router>

  )
}

export default App