import React, {useState} from 'react'

function SignUp( {addDog }) {

    const initialDog = {
        name: '',
        image: '',
        breed: '',
        age: '',
        likes: '',
        dislikes: '',
        size: '',
        sex: '',
        location: '',
    }

    const [userSubmit, setUserSubmit] = useState (initialDog)
    
    const handleSubmit = (event) => {
        event.preventDefault()
        const newDog = {
            name: userSubmit.name,
            image: userSubmit.image,
            breed: userSubmit.breed,
            age: userSubmit.age,
            likes: userSubmit.likes,
            dislikes: userSubmit.dislikes,
            size: userSubmit.size,
            sex: userSubmit.sex,
            location: userSubmit.location,
        }
        const config = {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newDog)
        }

        fetch("http://localhost:3000/dogs", config)
        .then(resp => resp.json())
        .then(addDog)
        .then(setUserSubmit(initialDog))
    }

    const handleChange = (event) => {
        setUserSubmit({
            ...userSubmit,
            [event.target.name]:event.target.value
        })
    }

  return (
    <div>
        <h2> Sign Up </h2>        
        <form onSubmit={handleSubmit}>
            What is your name? <br/>
            <input name="name" value={userSubmit.name} onChange={handleChange} placeholder='Name: '/><br/>
            Show us your best smile: <br/>
            <input name="image" value={userSubmit.image} onChange={handleChange} placeholder="Link an image" /><br/>
            What kind of dog are you? <br/>
            <input name="breed" value={userSubmit.breed} onChange={handleChange} placeholder="Breed" /><br/>
            How old are you in human years? <br/>
            <input name="age" value={userSubmit.age} onChange={handleChange} placeholder="Age" /><br/>
            What do you like to do? <br/>
            <input name="likes" value={userSubmit.likes} onChange={handleChange} placeholder="Likes" /><br/>
            What are your pet peeves? <br/>
            <input name="dislikes" value={userSubmit.dislikes} onChange={handleChange} placeholder="Pet peeves" /><br/>
            How big are you? <br/>
            <input name="size" value={userSubmit.size} type="checkbox" onChange={handleChange} /> Large <br/>
            <input name="size" value={userSubmit.size} type="checkbox" onChange={handleChange} /> Medium <br/>
            <input name="size" value={userSubmit.size} type="checkbox" onChange={handleChange} /> Small <br/>
            Are you a boy or a girl? <br/>
            <input name="sex" value={userSubmit.sex} type="checkbox" onChange={handleChange} /> Boy <br/>
            <input name="sex" value={userSubmit.sex} type="checkbox" onChange={handleChange} /> Girl <br/>
            Where can we meet? <br/>
            <input name="location" value={userSubmit.location} onChange={handleChange} type="checkbox"/> Dog Park <br/>
            <input name="location" value={userSubmit.location} onChange={handleChange} type="checkbox"/> Beach <br/>
            <input name="location" value={userSubmit.location} onChange={handleChange} type="checkbox"/> Hiking Trail <br/>
            <input type="submit" value="Sign Up!"/>
        </form>   
</div>
  )
}

export default SignUp