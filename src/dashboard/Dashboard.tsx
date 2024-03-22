import React, { useState } from 'react'
import './dashboard.scss';
import 'bootstrap/dist/css/bootstrap.css';
import gtoilet from 'src/assets/images/toilet_kabod.svg';
import handwash from 'src/assets/images/handwash-d.svg';
import library from 'src/assets/images/library-d.svg';
import water from 'src/assets/images/water-d.svg';
import ramp from 'src/assets/images/ramp-d.svg';
import electricity from 'src/assets/images/electricity-d.svg';
import playground from 'src/assets/images/playground-d.svg';
import computer from 'src/assets/images/computer-d.svg';
import internet from 'src/assets/images/internet-d.svg';
import { Link } from 'react-router-dom';
export default function Dashboard(props: any) {

    const { states, districtlist, blocklist } = props
    
    const [visible, setVisible] = useState(false) 
  
    const toggleVisible = () => { 
      const scrolled = document.documentElement.scrollTop; 
      if (scrolled > 180){ 
        setVisible(true) 
      }  
      else if (scrolled <= 180){ 
        setVisible(false) 
      } 
    }; 
    
    const scrollToTop = () =>{ 
      window.scrollTo({ 
        top: 0,  
        behavior: 'smooth'
      }); 
    }; 
    
    window.addEventListener('scroll', toggleVisible); 

    return (
        <>
            <section className="banner-wrap banner-bg banner-state ptb-30" id="banner-filter">
                <div className="container p-0">
                    <div className="row">
                        <div className="col-md-10 mx-auto">
                            <div className="performance-card padding mtb-20">
                                <div className="advance-search-container">

                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="advance-search-input">
                                                <select name="state" id="state">
                                                    <option value="Select State" selected>Select State</option>
                                                    {states?.length && states.map((stateName: any, index: number) => {
                                                        return <option key={index} value={stateName.state_name.toLowerCase()}>{stateName.state_name}</option>
                                                    })}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="advance-search-input">
                                                <select name="district" id="district">
                                                    <option value="Select District" selected>Select District</option>
                                                    {districtlist?.length && districtlist.map((districtName: any, index: number) => {
                                                        return <option key={index} value={districtName.name.toLowerCase()}>{districtName.name}</option>
                                                    })}
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="advance-search-input">
                                                <select name="district" id="block">
                                                    <option value="Select block">Select Block</option>
                                                    {blocklist?.length && blocklist.map((blockName: any, index: number) => {
                                                        return <option key={index} value={blockName.name.toLowerCase()}>{blockName.name}</option>
                                                    })}
                                                </select>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="dashboard-activity-page ptb-60 pb-0">

                <div className="container">

                    <div className="row">
                        <div className="col-md-12 p-relative">       
                           <div className="icon-top-bottom" onClick={scrollToTop} style={{display: visible ? 'flex' : 'none'}} title='Back to Filter'>
                           <span className="material-icons-round">expand_less</span>
                            </div>                    
                            <div className="readMorehome mb-4">
                                <Link to="/state" className="btn">School List <span className="material-icons-round">read_more</span></Link>

                            </div>
                        </div>
                       
                        <div className="col-md-12">
                            <div className="dashboard-box">

                                <div className="row">
                                    <div className="col-lg-6 col-md-5 pr-0">
                                        <h1 className='dash-title heading-lg'>
                                            Welcome to PMShri Dashboard
                                        </h1>
                                    </div>

                                    <div className="col-lg-6 col-md-7 p-0">
                                        <div className="row col-sm-flex">
                                            <div className="col-md-4">
                                                <div className="content-box">
                                                    <div className="main-text-c m-big">6400</div>
                                                    <div className='sub-text-c'>Total Schools</div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="content-box">
                                                    <div className="main-text-c m-big">54156</div>
                                                    <div className='sub-text-c'>Total Teachers</div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="content-box">
                                                    <div className="main-text-c m-big">277821</div>
                                                    <div className='sub-text-c'>Total Students</div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 p-s-0">
                            <div className="first-card-circle">
                                <div className="first-circle-line"></div>
                                <div className="card-box1">
                                    <div className='padding-box'>
                                        <div className="text-box-icon d-flex align-items-center justify-content-center justify-content-between">
                                            <div className="text-card success">91%</div>
                                            <div className="icon-circle rotate"><img src={gtoilet} alt="Girls Toilet" /></div>
                                        </div>
                                        <div className="card-normal-text">Having Funtional Toilets Girls</div>
                                    </div>
                                </div>

                                <div className="card-box1 card-box2">
                                    <div className='padding-box'>
                                        <div className="text-box-icon d-flex align-items-center justify-content-center justify-content-between">
                                            <div className="text-card success">94%</div>
                                            <div className="icon-circle rotate"><img src={gtoilet} alt="Girls Toilet" /></div>
                                        </div>
                                        <div className="card-normal-text">Having Funtional Toilets for Boys</div>
                                    </div>
                                </div>

                                <div className="card-box1 card-box3">
                                    <div className='padding-box'>
                                        <div className="text-box-icon d-flex align-items-center justify-content-center justify-content-between">
                                            <div className="text-card success">73%</div>
                                            <div className="icon-circle rotate"><img src={library} alt="Girls Toilet" /></div>
                                        </div>
                                        <div className="card-normal-text">Having Library Facility</div>
                                    </div>
                                </div>

                                <div className="card-box1 card-box4">
                                    <div className='padding-box'>
                                        <div className="text-box-icon d-flex align-items-center justify-content-center justify-content-between">
                                            <div className="text-card success">83%</div>
                                            <div className="icon-circle rotate"><img src={handwash} alt="Girls Toilet" /></div>
                                        </div>
                                        <div className="card-normal-text">Having Handwash Facility  </div>
                                    </div>
                                </div>

                                <div className="card-box1 card-box5">
                                    <div className='padding-box'>
                                        <div className="text-box-icon d-flex align-items-center justify-content-center justify-content-between">
                                            <div className="text-card success">86%</div>
                                            <div className="icon-circle rotate"><img src={playground} alt="Girls Toilet" /></div>
                                        </div>
                                        <div className="card-normal-text">Having Playground Facility</div>
                                    </div>
                                </div>


                                <div className="second-card-circle">
                                    <div className="second-circle-line"></div>
                                    <div className="card-box1">
                                        <div className='padding-box'>
                                            <div className="text-box-icon d-flex align-items-center justify-content-center justify-content-between">
                                                <div className="text-card warning">62%</div>
                                                <div className="icon-circle rotate"><img src={ramp} alt="Girls Toilet" /></div>
                                            </div>
                                            <div className="card-normal-text">Having Ramp Facility</div>
                                        </div>
                                    </div>

                                    <div className="card-box1 card-box6">
                                        <div className='padding-box'>
                                            <div className="text-box-icon d-flex align-items-center justify-content-center justify-content-between">
                                                <div className="text-card warning">57%</div>
                                                <div className="icon-circle rotate"><img src={library} alt="Girls Toilet" /></div>
                                            </div>
                                            <div className="card-normal-text">Having Library Facility</div>
                                        </div>
                                    </div>

                                    <div className="card-box1 card-box7">
                                        <div className='padding-box'>
                                            <div className="text-box-icon d-flex align-items-center justify-content-center justify-content-between">
                                                <div className="text-card warning">61%</div>
                                                <div className="icon-circle rotate"><img src={water} alt="Girls Toilet" /></div>
                                            </div>
                                            <div className="card-normal-text">Having Drinking Water Facility</div>
                                        </div>
                                    </div>

                                    <div className="card-box1 card-box8">
                                        <div className='padding-box'>
                                            <div className="text-box-icon d-flex align-items-center justify-content-center justify-content-between">
                                                <div className="text-card warning">52%</div>
                                                <div className="icon-circle rotate"><img src={electricity} alt="Girls Toilet" /></div>
                                            </div>
                                            <div className="card-normal-text">Having Electricity Connection  </div>
                                        </div>
                                    </div>
                                    <div className="card-box1 card-box9">
                                        <div className='padding-box'>
                                            <div className="text-box-icon d-flex align-items-center justify-content-center justify-content-between">
                                                <div className="text-card warning">59%</div>
                                                <div className="icon-circle rotate"><img src={internet} alt="Girls Toilet" /></div>
                                            </div>
                                            <div className="card-normal-text">Having Internet Facility  </div>
                                        </div>
                                    </div>


                                    <div className="third-card-circle">
                                        <div className="third-circle-line"></div>
                                        <div className="card-box1">
                                            <div className="padding-box">
                                                <div className="text-box-icon d-flex align-items-center justify-content-center justify-content-between">
                                                    <div className="text-card danger">13%</div>
                                                    <div className="icon-circle rotate"><img src={computer} alt="Girls Toilet" /></div>
                                                </div>
                                                <div className="card-normal-text">Having Computer Facility</div>
                                            </div>
                                        </div>


                                        <div className="main-heading-text-circle">
                                            <div className="text-b text-center">
                                                <h2 className="heading-md mb-0">
                                                    Facilities
                                                </h2>
                                                <p className="sub-heading">
                                                    In Schools
                                                </p>
                                            </div>
                                        </div>


                                    </div>


                                </div>



                            </div>


                        </div>

                    </div>
                </div>

            </section>
        </>
    )
}
