import React, {useState} from 'react'
import SignUp from './SignUp'

function Sidebar({ addDog }) {

  const [clickShow, setClickShow] = useState(false)

  const handleShowClick = () => {
    setClickShow(clickShow => !clickShow)
  }

  return (
    <div className="side-bar">
      <button className = "sidebar-button" onClick={handleShowClick}>join the fun</button>
        {clickShow ? <SignUp addDog={addDog}/> : null}
      
        {/* <button type="button" name="age" value="1" onClick={()=> handleFilter("1")}>1</button>
        <button type="button" name="age" value="2" onClick={()=> handleFilter("1")}>2</button>
        <button type="button" name="age" value="3" onClick={()=> handleFilter("1")}>3</button>
        <button type="button" name="age" value="4" onClick={()=> handleFilter("1")}>4</button>
        <button type="button" name="age" value="5" onClick={()=> handleFilter("1")}>5</button>
        <button type="button" name="age" value="6" onClick={()=> handleFilter("1")}>6</button> */}
    </div>
  )
}

export default Sidebar