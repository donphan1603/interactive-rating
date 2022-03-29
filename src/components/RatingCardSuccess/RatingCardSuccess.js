import React from 'react'
import './styles.css';
import ImageThankYou from '../../assets/images/illustration-thank-you.svg'

const RatingCardSuccess = ({ totalRating = 5 }) => {
  return (
    <div className='rating-card-success'>
      <div className='rating-card-success__icon'>
        <img src={ImageThankYou} alt="icon" />
      </div>
      <div className='rating-card-success__content'>
        <div className='rating-card-success__content--badge'>
          You selected {totalRating} out of 5
        </div>
        <h1 className='rating-card-success__content--title'>Thank you!</h1>
        <p className='rating-card-success__content--description'>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
      </div>
    </div>
  )
}

export default RatingCardSuccess