import { View, Text } from 'react-native'
import React, { useState } from 'react'

const Category = () => {
    const[count,setCount]=useState(0);
  return (
   <div className='container'>
    <p>You clicked {count} times</p>
    
    <button onClick={()=>setCount(count+1)}>
        Click me!
    </button>

   </div>
  )
}

export default Category