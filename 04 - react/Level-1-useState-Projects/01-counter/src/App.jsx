import React from 'react'
import Counter from './components/Counter'

const App = () => {

  let random = Math.floor(Math.random() * 11)

  let users = [
    {
      user: 'naz',
      id: 1,
      color: 'white',
      r: random
    },
    {
      user: 'ayan',
      id: 2,
      color: 'black',
      r: random+1
    }
  ]

  

  return (
    <div className='flex flex-wrap gap-6'>
      {
        users.map( ( elem , index ) => {
          console.log(elem.r);
          // console.log(index);
         return <Counter key={index} user={elem.user} id={elem.id} color={elem.color} random={elem.r} />

        })
      }
    </div>
  )
}

export default App
