import React from 'react'
import FavoriteDogCard from './DogCard'

function Favorites({favorite}) {

    console.log('favoritespage:', favorite)
    if (!favorite) {return (
      <div>
        “You don’t have any favorites yet!”
      </div>
    )}
    const favoritedDogCards = favorite.map((dog) => <FavoriteDogCard dog={dog} key={dog.id}/>)
  return (
    <div>
        {favoritedDogCards}
      </div>
  )
}

export default Favorites