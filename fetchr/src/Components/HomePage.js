import React, {useState, useEffect} from 'react'
import DogContainer from './DogContainer'
import Sidebar from './Sidebar'
import Profile from './Profile'
import Navbar from './Navbar'

function HomePage({ dogs, onAddProfile, setProfile, addFavorite, addDog }) {

  return (
    <div>

      <DogContainer addFavorite={addFavorite} dogs={dogs} onAddProfile={onAddProfile} setProfile={setProfile} />
      <Sidebar addDog={addDog}/>

    </div>
  )
}

export default HomePage




  // const handleFilter = (event) => {
  //   const dogTarget = event.target.name
  //   console.log(dogTarget);
  //   const filteredDogs = dogs.filter(dog => dog.dogTarget === event);
  //   setDogs(filteredDogs)
  // }