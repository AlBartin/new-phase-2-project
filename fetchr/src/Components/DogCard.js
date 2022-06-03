import React from 'react'
import {Link} from 'react-router-dom'


function DogCard({ dog, onAddProfile, setProfile, addFavorite }) {

   


const handleClick = (event) => {
    // const dogID = event.target.name
    // console.log(dog.name)
    // console.log("New Profile is set: ", dog)
    setProfile(dog)
    onAddProfile(dog);
}

const handleFavoriteClick = (event) => {
        addFavorite(event.target.value)
  }
  

  return (
    <div className="card">
        <Link to="/profile" style={{ textDecoration: 'none' }}>
        <h2 name={dog.id} onClick={handleClick} style={{cursor:"pointer"}}>{dog.name}</h2>
        </Link>
        <Link to="/profile" style={{ textDecoration: 'none' }}>
        <img src={dog.image} alt={dog.name} name={dog.id} className="dog-picture" onClick={handleClick}  style={{cursor:"pointer"}}/>
        </Link>
        <div className="dog-details-section">
        <ul className="dog-detail-list">
            <li >{dog.sex}</li>
            <li>Age: {dog.age}</li>
            <li>Breed: {dog.breed}</li>
        </ul>
        </div>
        <button className="like-button" value={dog.id} onClick={handleFavoriteClick}>❤️ Add to Favorites</button>
    </div>
  )
}

export default DogCard