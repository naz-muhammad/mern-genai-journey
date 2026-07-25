import React from 'react'
import { ArrowRight } from "lucide-react";

const Rightcardcontent = () => {
  return (
    <div className='absolute top-0 flex flex-col justify-between h-full w-full rounded-2xl p-8'>
      <h4 className='bg-white w-10 text-xl h-10 rounded-full grid place-items-center font-bold'>1</h4>
      <div className='flex flex-col gap-6'>
        <p className='text-white text-xl'>Lorem, ipsum dolor sit amet conse ctetur adipis icing elit. Dolo rum, ad vitae! Eligendi!</p>
        <div className='flex justify-between'>
          <button className='bg-yellow-400 px-4 py-2 rounded-full font-medium border-none text-white'>Underbanked</button>
          <button className='text-white'><ArrowRight /></button>
        </div>
      </div>
    </div>
  )
}

export default Rightcardcontent
