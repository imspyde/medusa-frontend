import React from 'react'
import './cardButton.css'
import {AiOutlineFire} from 'react-icons/ai'
const CardButton = ({text}) => {
  return (
    <div className="card-button">
							<div className="card-icon">
								<AiOutlineFire/>
							</div>
							<div className="card-text">
								{text}
							</div>
						</div>
  )
}

export default CardButton;