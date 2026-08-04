import React from 'react'
import Lefttextcontent from './Lefttextcontent'
import Arrow from './Arrow'

const Leftcontent = () => {
  return (
    <div className='h-full flex flex-col justify-between w-1/3'>
      <Lefttextcontent />
      <Arrow />
    </div>
  )
}

export default Leftcontent
