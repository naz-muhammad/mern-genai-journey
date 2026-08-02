import React, { useEffect, useState } from 'react'

const ApiCall = () => {

    const [data , setData] = useState([])

    
    useEffect(() => {
        
        const getData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            // console.log(response)
    
            const data = await response.json()
            setData(data)
            
        }
        getData()
    }, []);

    console.log('matlab kuch bhi');
    
    
  return (
    <div className='h-screen flex items-center justify-center w-3/4 m-auto'>
      {
        data.map( ( elem , idx ) => {
            return <div key={idx} className='px-4 flex flex-col gap-4'>
                    <strong className='text-2xl bg-black w-12 h-12 flex items-center justify-center rounded-full'>{elem.id}</strong>
                    <h1>{elem.name}</h1>
                   </div>
        })
      }
    </div>
  )
}

export default ApiCall
