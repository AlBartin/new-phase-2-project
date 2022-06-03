import React from 'react'

function FavoriteDogCard({ dog, removeFavorite }) {

    const handleRemoveClick = (event) => {
        removeFavorite(event.target.value);
        console.log("REMOVE ITEM: ", event.target.value)
    }

  return (
    <div className="card">
        <h2 name={dog.id} style={{cursor:"pointer"}}>{dog.name}</h2>
        <img src={dog.image} alt={dog.name} name={dog.id} className="dog-picture"  style={{cursor:"pointer"}}/>
        <div className="dog-details-section">
        <ul className="dog-detail-list">
            <li >{dog.sex}</li>
            <li>Age: {dog.age}</li>
            <li>Breed: {dog.breed}</li>
        </ul>
        </div>
        <button className="remove-button" value={dog.id} onClick={handleRemoveClick}> 💀 Remove from Favorites</button>
    </div>
  )
}

export default FavoriteDogCard