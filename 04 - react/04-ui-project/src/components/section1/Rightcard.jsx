import React from 'react'
import Rightcardcontent from './Rightcardcontent'

const Rightcard = (user) => {

  console.log(user.id);
  

  return (
    <div className='h-full  relative shrink-0 overflow-hidden rounded-4xl'>
      <img className='h-full  object-cover' src={user.img} alt="alt"/>
      <Rightcardcontent id={user.id} color={user.color} tag={user.tag}/>
    </div>
  )
}

export default Rightcard
