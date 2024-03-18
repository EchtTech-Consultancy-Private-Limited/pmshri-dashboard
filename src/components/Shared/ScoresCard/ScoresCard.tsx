import React from 'react';
import './ScoreCard.scss';

const ScoresCard = (props: any) => {
  return (
    <div className="scores-card">
      <h3 className="scores-card-header">
        {props.heading}
      </h3>
      <div className="scores-card-box card-box">
        <img src={require('src/assets/images/' + (props.icon) + '.svg')} alt="icon" className="img-fluid" />
        <span className="scores-card-no">{props.score}</span>
        <p className="scores-card-desc">
          {props.description}
        </p>
      </div>
    </div>
  )
}

export default ScoresCard