import React from 'react'
import FavoriteDogCard from './FavoriteDogCard'

function Favorites({favorite, removeFavorite}) {
  console.log(favorite)
  // if (!favorite) {return (
  //     <div>
  //       <h1>“You don’t have any favorites yet!”</h1>
  //     </div>
  //   )}
    const favoritedDogCards = favorite.map((dog) => <FavoriteDogCard dog={dog} key={dog.id} removeFavorite={removeFavorite}/>)
    return (
      <div>
        {favorite ? favoritedDogCards : <h2>"You don't have any favorites yet!"</h2>}
      </div>
  )
}

export default Favorites