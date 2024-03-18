import React from 'react'
import { Link } from 'react-router-dom';
import teaching from 'src/assets/images/teaching.svg';
const SqafItemCard = (props:any) => {
    const {item,custom_class} = props;
  return (
      <div className="col-md-4">
                        <div className={`pgicategory-card aos-init ${custom_class}`} data-aos="fade-up">
                           <div className="pgicategory-card-content">
                              <div className='box-alignment'>
                                 <div className="img-box-design">
                                    <img src={teaching} alt="icon" className="img-fluid" />
                                 </div>
                              </div>
                              <h3 className="pgicategory-card-heading">{item.title}</h3>
                              <p className="pgicategory-card-desc">
                                 {item.short_desc}
                              </p>
                              <div className="pgicategory-card-link">  
                                 <Link to={`/sqaf-pillar-details/${item.id}`} className="btn btn-solid s-btn know-more">More Insights<span className="material-icons-round">chevron_right</span></Link>
                              </div>
                           </div>
                        </div>
                     </div>
  )
}

export default SqafItemCard