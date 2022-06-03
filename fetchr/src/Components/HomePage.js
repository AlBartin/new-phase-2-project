import React from 'react'
import DogContainer from './DogContainer'
import Sidebar from './Sidebar'


function HomePage({ dogs, onAddProfile, setProfile, addFavorite, addDog, removeFavorite }) {

  return (
    <div>

      <DogContainer removeFavorite={removeFavorite} addFavorite={addFavorite} dogs={dogs} onAddProfile={onAddProfile} setProfile={setProfile} />
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