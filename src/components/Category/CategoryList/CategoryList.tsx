import React from 'react';
import './CategoryList.scss';
import CategoryCard from 'src/components/Shared/CategoryCard/CategoryCard'
import CategoryComparison from './CategoryComparison';

const CategoryList = (props: any) => {
  const { data, state, years } = props
  return (
    <section className="category bg-grey ptb-60">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="category-top-wrap">
              <h2>
                Top {data.topDistrictsData.length} Districts of {state.charAt(0).toUpperCase() + state.slice(1)} in Particular Category
              </h2>
              <p className="total-weight">
                Total Weight - {data.categoryData[0].total_score}
              </p>
            </div>
          </div>
          {data.topDistrictsData.map((district: any, index: number) => {
            return <div key={index} className="col-lg-3 col-xl-2">
              <div className={"category-card-wrap card-" + (data.categoryData[0].card_color) + " mtb-15"}>
                <CategoryCard
                  heading={index + 1 + '. ' + district.name}
                  title="CATEGORY SCORE"
                  no={district.score}
                />
              </div>
            </div>
          })}
          <div className="col-md-12">
            <CategoryComparison state={state} catId={data.categoryData[0].cat_id} years={years} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CategoryList