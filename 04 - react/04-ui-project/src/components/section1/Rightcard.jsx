import React from 'react'
import Rightcardcontent from './Rightcardcontent'

const Rightcard = () => {
  return (
    <div className='h-full w-[35%] relative shrink-0 overflow-hidden rounded-4xl'>
      <img className='h-full  object-cover' src="https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="alt"/>
      <Rightcardcontent />
    </div>
  )
}

export default Rightcard
