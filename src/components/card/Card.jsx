import React from 'react'
import './card.css'
import star from '../../images/star.png'


const Card = (props) => {
  console.log(props.img)
  return (
    <div className='card'>
        <img src={props.img} className='card--image' alt=''/>
        <div className='card--stats'>
            <img src={star} className='card--star' alt=''/>
            <span>{props.rating}</span>
            <span className='gray'>({props.reviewCount}) • </span>
            <span className='gray'>{props.location}</span>
        </div>
        <p className='card--title'>{props.title}</p>
        <p className='card--price'><span className='bold'>From ${props.price}</span> / person</p>
    </div>
  )
}

export default Card