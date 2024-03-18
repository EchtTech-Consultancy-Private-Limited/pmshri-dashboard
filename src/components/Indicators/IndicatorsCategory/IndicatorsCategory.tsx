import React from 'react';
import IndicatorAccordion from 'src/components/Shared/IndicatorAccordion/IndicatorAccordion';

const IndicatorsCategory = () => {
  return (
    <section className="indicators-category bg-grey ptb-60">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="indicator-accordion">
                        <IndicatorAccordion />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default IndicatorsCategory