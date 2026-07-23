import React from 'react'
import { Bookmark } from 'lucide-react';
import './card.css'

const Card = ({job}) => {
  return (
    <>
        
       <div className="card">
        <div>
        <div className="card-top">
          <div className="card-top-left">
            <img src={job.logo} alt={job.company}/>
          </div>

          <div className="card-top-right">
            <button>Save <Bookmark /></button>
          </div>
        </div>
        
        <div className="card-center">
          <h3>{job.company} <span>5 days ago</span></h3>
          <h3>{job.position}</h3>
          <div className="card-center-capsule">
            <span>{job.type}</span>
            <span>{job.level}</span>
          </div>
        </div>
        </div>
        <div className="card-bottom">
          <div className="card-bottom-info">
            <h3>{job.salary}</h3>
            <p>{job.location}</p>
          </div>
          <button className='card-bottom-btn'>Apply now</button>

        </div>

      </div>
      
    </>
  )
}

export default Card
