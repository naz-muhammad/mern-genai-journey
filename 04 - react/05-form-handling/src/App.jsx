import React, { useState } from 'react'

const App = () => {

  let [title , setTitle] = useState('')

  const handleSubmit = (e) => {
    // console.log(e);
    e.preventDefault()
    console.log(`form is submited by ${title}`);
    
    setTitle('')
  }

  return (
    <div className='h-full w-full m-4 bg-neutral-900 p-4 rounded-2xl' >
      
      <form className='flex flex-col gap-4'
        onSubmit={(e)=> {
          handleSubmit(e)
        }}
      >

        <input type="text" placeholder='Enter your name...' 
          className='border px-8 py-4 text-2xl rounded-2xl'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
            
          }}
        />
        <button type="submit" className='px-8 py-4 rounded-full text-2xl bg-gray-200 text-black' >Submit</button>
      </form>
    </div>
  )
}

export default App
