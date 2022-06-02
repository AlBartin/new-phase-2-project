import React, {useState} from 'react'
import {Link} from 'react-router-dom'


function DogCard({ dog, onAddProfile, setProfile, addFavorite }) {



const handleClick = (event) => {
    const dogID = event.target.name
    console.log(dog.name)
    console.log("New Profile is set: ", dog)
    setProfile(dog)
    onAddProfile(dog);
}

const handleFavoriteClick = (event) => {
    addFavorite(event.target.value)
  }

  return (
    <div className="card">
        <Link to="/profile">
        <h2 name={dog.id} onClick={handleClick} style={{cursor:"pointer"}}>{dog.name}</h2>
        </Link>
        <Link to="/profile">
        <img src={dog.image} alt={dog.name} name={dog.id} className="dog-picture" onClick={handleClick}  style={{cursor:"pointer"}}/>
        </Link>
        <p>{dog.sex}</p>
        <p>Age: {dog.age}</p>
        <p>Breed: {dog.breed}</p>
        <button className="like-button">❤️</button>
        <button className="add-favorite" value={dog.id} onClick={handleFavoriteClick}>Add to Favorites</button>
    </div>
  )
}

export default DogCard