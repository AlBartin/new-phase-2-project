import React, {useState, useEffect} from 'react'
import DogCard from './DogCard'


function DogContainer({dogs}) {
    
    const dogDisplay = dogs.map((dog) => <DogCard {...dog} key={dog.id} />)
  return (
    <div>
        {dogDisplay}
    </div>
  )
}

export default DogContainer