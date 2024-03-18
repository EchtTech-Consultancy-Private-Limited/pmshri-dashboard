import React ,{ useEffect, useState } from 'react';

import infrastructure from 'src/assets/images/infrastructure.svg';
import leadership from 'src/assets/images/team.svg';
import teaching from 'src/assets/images/teaching.svg';
import equity from 'src/assets/images/equity.png';
import monitoring from 'src/assets/images/monitaring.png';
import satisfaction from 'src/assets/images/Satisfaction.png';
import piller from 'src/assets/images/piller.png';
import { Link } from 'react-router-dom';
import {getSQAFList} from 'src/actions/dpgi.action';
import SqafItemCard from './SqafItemCard';
import { useDispatch, useSelector } from 'react-redux';
import {InitialStateModel, StoreModel } from 'src/models/dpgi';




const Sqafcategory = () => {
   const dispatch = useDispatch();
   const data = useSelector<StoreModel>(store => store.sqafList) as InitialStateModel
   //const data2 = useSelector<StoreModel>(store => store.faqsList) as InitialStateModel
   useEffect(()=>{
      dispatch(getSQAFList());
      //dispatch(getFaqsList());
   },[]);
   const handleScroll = ()=>{
      window.scrollTo({
         top:0,
         behavior: 'smooth',
       });
   }
   //console.log(data,data2)
   return (
      <section className="pgicategory PmsgriCategories sqaf-category ptb-60 bg-white">
         <div className="container">
            <div className="row">
               <div className="col-md-3 mb-sm-">
                  <div className="common-content text-start">
                     <h2 className="heading-blue text-center">{data.data.total} Pillars of SQAF</h2>
                     <div className="piller-box-img text-center">
                        <img src={piller} alt="piller" />
                     </div>
                  </div>
               </div>
               <div className="col-md-9">
                  <div className="row">
                     
                  {
                        data?.data?.data?.map((item:any,index:number)=>{
                           let mt_plus_8 = '';
                           [1,4].includes(index)?mt_plus_8='mt-plus-8':mt_plus_8='';
                           return <SqafItemCard key={item.id} item={item} custom_class={mt_plus_8}/>
                        })
                     }

                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Sqafcategory;