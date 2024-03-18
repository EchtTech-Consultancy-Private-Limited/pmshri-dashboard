import React from 'react';
import './CategoryCard.scss';

const CategoryCard = (props: any) => {
  return (
      <div className="category-card">
          <h3 className="category-card-header">
              {props.heading}
          </h3>
          <div className="category-card-box card-box">
              <span className="category-card-title">{props.title}</span>
              <p className="category-card-no">
                  {props.no}
              </p>
          </div>
      </div>
  )
}

export default CategoryCard