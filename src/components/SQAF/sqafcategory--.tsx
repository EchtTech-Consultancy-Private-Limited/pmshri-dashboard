import React, { useEffect, useState } from 'react';

import {InitialStateModel, StoreModel } from 'src/models/dpgi';

import piller from 'src/assets/images/piller.png';
import { useDispatch, useSelector } from 'react-redux';
import {getSQAFList} from 'src/actions/dpgi.action';
import SqafItemCard from './SqafItemCard';
import { GlobalLoading } from '../GlobalLoading';

const Sqafcategory = () => {
   
   const dispatch = useDispatch();
   const data = useSelector<StoreModel>(store => store.sqafList) as InitialStateModel
   useEffect(()=>{
      dispatch(getSQAFList());
   },[]);
   return (
    <>
      {
         data.loading?<GlobalLoading/>: <section className="pgicategory PmsgriCategories sqaf-category ptb-60 bg-white">
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
      }
    </>
    
   )
}

export default Sqafcategory;