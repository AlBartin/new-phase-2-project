import React from 'react'
import Form from './Form'

function Profile({ profile }) {
    console.log({profile})
    return (
    <div className = "profile">
        <h2>{profile.name}</h2>
        <img src={profile.image} alt={profile.name}/>
        <h2>Breed: {profile.breed}</h2>
        <h3>Age: {profile.age}</h3>
        <h3>Size: {profile.size}</h3>
        <h3>Sex: {profile.sex}</h3>
        <h3>Location: {profile.location}</h3>
        <ul>Comments: {profile.comments}</ul>
        <ul>Connections: {profile.connections}</ul>
        <ul>Likes: {profile.likes}
        </ul>
        <ul>Dislikes: {profile.dislikes}</ul>
        <Form />

    </div>
  )
}

export default Profile

// name, age, breed, image, likes, dislikes, size, sex, location, comments, connections