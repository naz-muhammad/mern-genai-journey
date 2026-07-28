import React from 'react'
import { useState } from 'react';

const Counter = (props) => {
// console.log(props.user);

     // let counter = 0 ;
      let [counter , setCounter] = useState(props.random)

    
      function handleAdd() {
        
        if ( counter < 20 ) {
          counter++
          setCounter(counter)
          console.log(counter);
        }
      }
    
      function handleRemove() {
        
        if ( counter > 0 ) {
          counter--
          setCounter(counter)
          console.log(counter);
        }
      }

  return (
    <div  className='bg-[#313131] flex flex-col gap-4 p-8 rounded-2xl ' >
      <h1 className={`text-2xl ${counter > 10 ? "bg-black text-white px-6 py-3 rounded-full" : "bg-red-300 px-6 py-3 rounded-full"} ` }  >{props.user} : {counter}</h1>
      <button className='px-5 py-2 bg-[#414141] rounded-full' onClick={handleAdd}>Add</button>
      <button className='px-5 py-2 bg-[#414141] rounded-full' onClick={handleRemove}>Remove</button>
    </div>
  )
}

export default Counter
