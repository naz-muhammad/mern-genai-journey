import React from 'react'
import Rightcard from './Rightcard'

const Rightcontent = ({users}) => {

  // console.log(user[0].color);
  
  
  return (
    <div id='right' className='h-full w-2/3 flex gap-10 overflow-x-auto flex-nowrap p-6'>
      {
        users.map( ( user , index ) => {
         return <Rightcard id={index} img={user.img} tag={user.tag} color={user.color}/>
        } )
      }
    </div>
  )
}

export default Rightcontent
