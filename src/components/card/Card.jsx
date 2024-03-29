import React from 'react'
import './card.css'
import star from '../../images/star.png'


const Card = (props) => {

  let badgeText
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className='card'>
      {badgeText && <div className='card--badge'>{badgeText}</div>}
      <img src={props.img} className='card--image' alt='' />
      <div className='card--stats'>
        <img src={star} className='card--star' alt='' />
        <span>{props.item.stats.rating}</span>
        <span className='gray'>({props.item.stats.reviewCount}) • </span>
        <span className='gray'>{props.item.location}</span>
      </div>
      <p className='card--title'>{props.item.title}</p>
      <p className='card--price'><span className='bold'>From ${props.item.price}</span> / person</p>
    </div>
  )
}

export default Card