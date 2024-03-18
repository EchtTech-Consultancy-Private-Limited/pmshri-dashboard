import React from 'react';
import CategoryCard from 'src/components/Shared/CategoryCard/CategoryCard'

const InfraCategory = () => {
  return (
    <section className="category bg-grey ptb-60">
        <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="category-top-wrap">
                  <h2>
                    Top 10 Districts of Telangana in Particular Category
                  </h2>
                  <p className="total-weight">
                    Total Weight - 90
                  </p>
                </div>
              </div>
                <div className="col-md-2">
                  <div className="category-card-wrap card-red mtb-15">
                    <CategoryCard 
                      heading="1. Adilabad"
                      title="CATEGORY SCORE"
                      no="48"
                    />
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="category-card-wrap card-red mtb-15">
                    <CategoryCard 
                      heading="2. Jagitia"
                      title="CATEGORY SCORE"
                      no="78"
                    />
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="category-card-wrap card-red mtb-15">
                    <CategoryCard 
                      heading="3. Jangoan"
                      title="CATEGORY SCORE"
                      no="48"
                    />
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="category-card-wrap card-red mtb-15">
                    <CategoryCard 
                    heading="4. Kamareddy"
                    title="CATEGORY SCORE"
                    no="48"
                    />
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="category-card-wrap card-red mtb-15">
                    <CategoryCard 
                    heading="5. Khammam"
                    title="CATEGORY SCORE"
                    no="48"
                    />
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="category-card-wrap card-red mtb-15">
                    <CategoryCard 
                    heading="6. Nirmal"
                    title="CATEGORY SCORE"
                    no="48"
                    />
                  </div>
                </div>  
                
            </div>
        </div>
    </section>
  )
}

export default InfraCategory