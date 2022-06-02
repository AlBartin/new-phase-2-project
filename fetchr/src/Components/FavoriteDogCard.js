import React from 'react'

function FavoriteDogCard({ dog }) {
  return (
    <div className="card">
    <h2 name={dog.id} style={{cursor:"pointer"}}>{dog.name}</h2>
    <img src={dog.image} alt={dog.name} name={dog.id} className="dog-picture"  style={{cursor:"pointer"}}/>
    <p>{dog.sex}</p>
    <p>Age: {dog.age}</p>
    <p>Breed: {dog.breed}</p>
    <button className="like-button">❤️</button>
</div>
  )
}

export default FavoriteDogCard