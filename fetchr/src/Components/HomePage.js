import React, {useState, useEffect} from 'react'
import DogContainer from './DogContainer'
import Sidebar from './Sidebar'
import Favorites from './Favorites'

function HomePage() {

  const [dogs, setDogs] = useState([])
  //const all = ["All", ...dogs.map(dog => dog.age)]

  useEffect(() => {
    fetch ('http://localhost:3000/dogs')
    .then (resp => resp.json())
    .then ( setDogs )
  },[])


  const handleFilter = (event) => {
    const dogTarget = event.target.name
    console.log(dogTarget);
    const filteredDogs = dogs.filter(dog => dog.dogTarget === event);
    setDogs(filteredDogs)
  }
  return (
    <div>

      <DogContainer dogs={dogs} />
      <Sidebar handleFilter={handleFilter} />


    </div>
  )
}

export default HomePage