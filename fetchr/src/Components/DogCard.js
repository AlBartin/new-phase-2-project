import React, {useState} from 'react'
import Form from './Form'


function DogCard({name, image, sex, age, breed, id }) {

const [favorite, setFavorite] = useState([])

const handleFavoriteClick = (event) => {
console.log(event.target.value)
setFavorite()
}
  return (
    <div className="card">
        <h2>{name}</h2>
        <img src={image} alt={name} className="dog-picture"/>
        <p>{sex}</p>
        <p>Age: {age}</p>
        <p>Breed: {breed}</p>
        <button className="like-button">❤️</button>
        <button className="add-favorite" value={id} onClick={handleFavoriteClick}>Add to Favorites</button>
    </div>
  )
}

export default DogCard