import React from 'react'

function Form() {
  return (
    <div>
        <form>
            <input name="name" placeholder='Name: '/><br/>
            <input name="date" placeholder="When was your playdate?"/><br/>
            <input name="check" type="radio" /> Click me to go on another playdate!
        </form>        
    </div>
  )
}

export default Form