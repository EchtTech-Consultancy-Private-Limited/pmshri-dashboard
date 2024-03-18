import React from 'react';
import gradingIndexImg from 'src/assets/images/grading-index.png';

const GradingIndex = () => {
  return (
    <section className="gradingIndex">
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <div className="common-content">
                        <h2 className="heading-blue">
                            What is Performance Grading Index?
                        </h2>
                        <p className="desc-black">
                            The Performance Grading Index is a tool to provide insights on the<br />
                            status of school education in States and UTs including key levers<br />
                            that drive their performance and critical areas for improvement.
                        </p>
                        <p className="desc-black">
                            Grading will allow all States and UTs to occupy the highest level i.e<br />
                            Grade I, at the same time which is a sign of fully developed nation.
                        </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="gradingIndex-img mt-neg-18">
                        <img src={gradingIndexImg} alt="img" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default GradingIndex