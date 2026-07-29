import React, { useState } from 'react'

const App = () => {
 
    const [user , setUser] = useState({name:'naz' , age: 29 ,})

    user.age = 200
    // let newUser = user
    // newUser.age = 25  // bcz of reference type it give referece of the memory where it is data located not variable it effect the orignal object 
    // newUser.name = 'username'

    // so keep the data immuteable using the following 2 way 

    let newUser1 = {...user}
    newUser1.name = 'newUser1';
    newUser1.age = 160;
    const [arr , setArr] = useState([10, 20, 30])

    
    console.log('render');
    

  return (

    <div  className='flex flex-col p-8 justify-center items-center gap-4 text-4xl'>

      <h1 className='bg-black text-white px-5 py-2 rounded-2xl'>Work With Object</h1>
      <h2>{user.name}  {user.age}</h2>
      <h2>{newUser1.name}  {newUser1.age}</h2>

      <h1 className='bg-white text-black px-5 py-2 rounded-2xl'>Work With Array</h1>

      <h2>
        {
          arr
        }
        {
        arr.push = 60
        }
      </h2>
      
    </div>
  )
}

export default App
