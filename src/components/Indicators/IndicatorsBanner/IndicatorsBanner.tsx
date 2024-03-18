import React from 'react';
import indicatorBannerImg from 'src/assets/images/indicator-banner.svg';
import indicatorIcon from 'src/assets/images/indicator.svg';
import Banner from 'src/components/Shared/Banner/Banner';

const IndicatorsBanner = () => {
  return (
    <>
        <Banner 
          img={indicatorBannerImg}
          icon={indicatorIcon}
          heading="Indicators"
        />
    </>
  )
}

export default IndicatorsBanner