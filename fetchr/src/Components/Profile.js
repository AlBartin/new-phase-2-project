import React from 'react'
import Form from './Form'

function Profile({ profile }) {
    console.log({profile})
    return (
    <div className = "profile">
        <h2>{profile.name}</h2>
        <img src={profile.image} alt={profile.name}/>
        <ul className="first-profile-ul">
            <li><strong>I am a:</strong> {profile.breed}</li>
            <li><strong>Age:</strong> {profile.age}</li>
            <li><strong>Size:</strong> {profile.size}</li>
            <li><strong>I am a:</strong>: {profile.sex}</li>
            <li><strong>Favorite Spot:</strong> {profile.location}</li>
            <li><strong>I Like:</strong> {profile.likes}</li>
            <li><strong>I Don't Like:</strong> {profile.dislikes}</li>
        </ul>
        {/* <ul>Comments: {profile.comments}</ul>
        <ul>Connections: {profile.connections}</ul>
        <Form /> */}

    </div>
  )
}

export default Profile

// name, age, breed, image, likes, dislikes, size, sex, location, comments, connections