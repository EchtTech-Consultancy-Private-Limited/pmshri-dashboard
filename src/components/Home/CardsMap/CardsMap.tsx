import React, { useEffect, useState } from 'react';
import './CardsMap.scss';
import 'src/components/Shared/DistrictCard/DistrictCard.scss'
import state from 'src/assets/images/state.png';
import nvs from 'src/assets/images/nvs.png';
import { EventModel} from 'src/models/dpgi';


const CardsMap = (props: any) => {
   const { data, states,isLoading } = props 
   return (
      <div className="districtcard-list">
         <div className="row">
            <div className="col-md-12">
               <div className="category-card-wrap card-orange">
                  <div className="category-card">
                     <div className="category-card-content">
                        <img src={state} alt="icon" className="img-fluid" />
                        <h3 className="category-card-header">Number of Districts </h3>
                     </div>
                     <div className="category-card-box card-box"><span className="category-card-no">{data?.totalDistrict}</span></div>
                  </div>
               </div>
            </div>
            <div className="col-md-12">
               <div className="category-card-wrap card-green">
                  <div className="category-card">
                     <div className="category-card-content">
                        <img src="/static/media/teaching.07aa4e9208215f5c909f.svg" alt="icon" className="img-fluid" />
                        <h3 className="category-card-header">Number of Blocks</h3>
                     </div>
                     <div className="category-card-box card-box"><span className="category-card-no">{data?.totalBlocks}</span></div>
                  </div>
               </div>
            </div>
            <div className="col-md-12">
               <div className="category-card-wrap card-red">
                  <div className="category-card add-border-bottom">
                     <div className="category-card-content">
                        <img src="/static/media/infrastructure.166c94f49c1b85b512dc.svg" alt="icon" className="img-fluid" />
                        <h3 className="category-card-header">Number of PM SHRI Schools</h3>
                     </div>
                     <div className="category-card-box card-box"><span className="category-card-no">{data?.totalschool}</span></div>
                  </div>
                  
                  <div className="row">
                     <div className="col-md-4 small-card-s">
                        <p className="category-card-text">Primary Schools</p>
                        <div className="category-card-wrap card-blue">
                           <div className="category-card justify-content-center">                              
                              <div className="category-card-content">
                                 <span className="category-card-no text-black">{data?.totalprimaryschool}</span>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="col-md-4 small-card-s">
                     <p className="category-card-text">Up. Primary Schools</p>
                        <div className="category-card-wrap card-purple">
                        <div className="category-card justify-content-center">     
                           <div className="category-card-content">
                                 <span className="category-card-no text-black">{data?.totalupperprimaryschool}</span>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="col-md-4 small-card-s">
                     <p className="category-card-text">Secondary Schools</p>
                        <div className="category-card-wrap card-green">
                        <div className="category-card justify-content-center">     
                           <div className="category-card-content">
                                 <span className="category-card-no text-black">{data?.totalsecondaryschool}</span>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="col-md-4 small-card-s">
                        <p className="category-card-text">Hr. Sec. Schools</p>
                        <div className="category-card-wrap card-orange">
                        <div className="category-card justify-content-center">     
                           <div className="category-card-content">
                                 <span className="category-card-no text-black">{data?.totalhighsecondaryschool}</span>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="col-md-4 small-card-s">
                        <p className="category-card-text">KVS</p>
                        <div className="category-card-wrap card-orange">
                        <div className="category-card justify-content-center">     
                           <div className="category-card-content">
                                 <span className="category-card-no text-black">{data?.totalKVSschool}</span>
                              </div>
                           </div>
                        </div>
                     </div>


                     <div className="col-md-4 small-card-s">
                        <p className="category-card-text">NVS</p>
                        <div className="category-card-wrap card-orange">
                        <div className="category-card justify-content-center">     
                           <div className="category-card-content">
                                 <span className="category-card-no text-black">{data?.totalnvsschool}</span>
                              </div>
                           </div>
                        </div>
                     </div>


                  </div>
               </div>
            </div>
          
         </div>
      </div>

   )
}

export default CardsMap;