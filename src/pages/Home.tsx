import Hero from 'src/components/Home/Hero/Hero';
import Gallery from 'src/components/Home/Gallery/Gallery';
import Performance from 'src/components/Home/Performance/Performance';
import AboutPgi from 'src/components/Home/AboutPgi/AboutPgi';
import PgiCategory from 'src/components/Home/PgiCategory/PgiCategory';
import PmsgriCategories from 'src/components/Home/PgiCategory/PmsgriCategories';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { InitialStateModel, StoreModel } from '@/models/dpgi';
import Testimonials from 'src/components/Home/Testimonials/Testimonials';
import VisionMissionCard from 'src/components/Home/AboutPgi/VisionMissionCard';

const Home = () => {

  const allYears = useSelector<StoreModel>(store => store.allYears) as InitialStateModel
  const [isLoading, setIsLoading] = useState(true)  
  useEffect(() => {
    if (allYears.loaded && !allYears.loading) {
      setIsLoading(false)
    }
  }, [allYears])

  return (
    <>
      <Hero />
      <AboutPgi />
      {!isLoading && <Performance years={allYears.data} /> }
      <VisionMissionCard />
      <PgiCategory />

       {/* <PmsgriCategories/> */}
       {/* <PmsgriCategories/> */}
      <Gallery />
      {/* <Testimonials/> */}
    </>

  )
}

export default Home