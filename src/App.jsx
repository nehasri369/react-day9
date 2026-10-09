import React, { useState } from 'react'
import"./App.css"

const App = () => {

  const[item,setItem] = useState(["Neha", "Shiva" ,"Sri"]);
  const[adding,setAdding] = useState("")

  let add = () => {
    setItem([...item,adding])
    setAdding("")
  }

  let typing = (e) => {
    setAdding(e.target.value)
  }

  let remove = (index) => {
    let newItem = [...item]
    newItem.splice(index,1)
    setItem(newItem)
    
  }
  return(
  
   <div id='main'>
      {
        item.map((names,index) => (
          <div key={index}>
            <p>{names}</p>
            <button id='remove' onClick={() => remove(index) }>Click Here to Remove</button>
            
          </div>
        ))
      }

      <div id='end'>

      <input type="text" onChange={typing} placeholder='enter your data...' value={adding} id='input'/>
      <button id='add' onClick={add}>Click here to Add</button>
      
      </div>
    </div>
  )  
}

export default App