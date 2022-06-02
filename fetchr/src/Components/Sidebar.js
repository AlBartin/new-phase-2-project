import React from 'react'

function Sidebar({handleFilter}) {

  
  return (
    <div>
        <button type="button" name="age" value="1" onClick={()=> handleFilter("1")}>1</button>
        <button type="button" name="age" value="2" onClick={()=> handleFilter("1")}>2</button>
        <button type="button" name="age" value="3" onClick={()=> handleFilter("1")}>3</button>
        <button type="button" name="age" value="4" onClick={()=> handleFilter("1")}>4</button>
        <button type="button" name="age" value="5" onClick={()=> handleFilter("1")}>5</button>
        <button type="button" name="age" value="6" onClick={()=> handleFilter("1")}>6</button>
    </div>
  )
}

export default Sidebar