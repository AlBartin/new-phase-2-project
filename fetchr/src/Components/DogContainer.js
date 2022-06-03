import React from 'react'
import DogCard from './DogCard'


function DogContainer({ dogs, onAddProfile, setProfile, addFavorite }) {
    
    const dogDisplay = dogs.map((dog) => <DogCard dog={dog} key={dog.id} onAddProfile={onAddProfile} setProfile={setProfile} addFavorite={addFavorite} />)
  return (
    <div className="dog-container">
        {dogDisplay}
    </div>
  )
}

export default DogContainer