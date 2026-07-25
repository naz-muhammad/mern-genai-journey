import React from 'react'
import Rightcard from './Rightcard'

const Rightcontent = () => {
  return (
    <div id='right' className='h-full w-2/3 flex gap-10 overflow-x-auto flex-nowrap p-6'>
      <Rightcard />
      <Rightcard />
      <Rightcard />
      <Rightcard />
    </div>
  )
}

export default Rightcontent
