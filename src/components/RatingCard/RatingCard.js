import React from 'react'
import './styles.css';
import IconStar from '../../assets/images/icon-star.svg'

const RatingCard = ({ onSubmit, totalRating, setTotalRating }) => {
  return (
    <div className='rating-card'>
      <div className='rating-card__icon'>
        <img src={IconStar} alt="icon" />
      </div>
      <div className='rating-card__content'>
        <h1 className='rating-card__content--title'>How did we do?</h1>
        <p className='rating-card__content--description'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
      </div>
      <div className='rating-card__count'>
        {Array.from(Array(5).keys()).map(((item, index) => {
          return <div
            key={index}
            className={`rating-card__count--number ${totalRating === item + 1 ? 'active' : ''}`}
            onClick={() => setTotalRating(item + 1)}>{item + 1}</div>
        }))}
      </div>
      <button className='rating-card__submit' onClick={() => { onSubmit() }}>
        Submit
      </button>
    </div>
  )
}

export default RatingCard