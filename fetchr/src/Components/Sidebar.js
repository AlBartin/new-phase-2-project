import React, {useState} from 'react'
import SignUp from './SignUp'

function Sidebar({ addDog }) {

  const [clickShow, setClickShow] = useState(false)

  const handleShowClick = () => {
    setClickShow(clickShow => !clickShow)
  }

  return (
    <div className="sidebar-div">
      <button className = "sidebar-button" onClick={handleShowClick}>join the fun</button>
      {clickShow ? <div className="side-bar">
        {<SignUp addDog={addDog}/>} 
        </div> : null }
    </div>
  )
}

export default Sidebar