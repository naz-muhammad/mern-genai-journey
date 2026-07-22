import React from 'react'
import { Bookmark } from 'lucide-react';
import './card.css'

const Card = (props) => {
  return (
    <>
        
       <div className="card">
        <div>
        <div className="card-top">
          <div className="card-top-left">
            <img src={props.img} alt=""/>
          </div>

          <div className="card-top-right">
            <button>Save <Bookmark /></button>
          </div>
        </div>
        
        <div className="card-center">
          <h3>{props.name} <span>5 days ago</span></h3>
          <h3>Senior UI/UX Designer</h3>
          <div className="card-center-capsule">
            <span>Part-Time</span>
            <span>Senior Level</span>
          </div>
        </div>
        </div>
        <div className="card-bottom">
          <div className="card-bottom-info">
            <h3>$120/hr</h3>
            <p>Mumbai, india</p>
          </div>
          <button className='card-bottom-btn'>Apply now</button>

        </div>

      </div>
      
    </>
  )
}

export default Card
