import Banner from 'src/components/Shared/Banner/Banner';


const CategoryBanner = (props: any) => {
  const { data } = props
  return (
    <Banner
      img={data[0].banner ? data[0].banner : 'infra-banner'}
      icon={data[0].image}
      heading={data[0].cat_short_desc}
      description={data[0].cat_desc}
    />
  )
}

export default CategoryBanner