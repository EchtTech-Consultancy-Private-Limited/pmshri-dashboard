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


export default function Dashboard() {
    return (
        <>
            <section className="banner-wrap banner-bg banner-state ptb-30 d-flex align-items-center" style={{ height: "160px" }}>
                <div className="container">
                    <div className="row" >
                        <div className="col-md-12">
                            <h2 className="heading-blue text-center before-d text-white pb-0">Dashboard</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className="dashboard-activity-page ptb-60 pb-0">

                <div className="container">

                    <div className="row">
                        <div className="col-md-7 mx-auto">
                            <div className="performance-card mtb-20 p-3">
                                <div className="advance-search-container">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="advance-search-input">
                                                <select name="state" id="state">
                                                    <option value="Select State">Select State</option>
                                                    <option value="0">ALL STATES</option>
                                                    <option value="35">Andaman And Nicobar Islands</option>
                                                    <option value="28">Andhra Pradesh</option>
                                                    <option value="12">Arunachal Pradesh</option>
                                                    <option value="18">Assam</option>
                                                    <option value="10">Bihar</option>
                                                    <option value="4">Chandigarh</option>
                                                    <option value="22">Chhattisgarh</option>
                                                    <option value="38">Dadra &amp; Nagar Haveli  &amp; Daman &amp; Diu</option>
                                                    <option value="7">Delhi</option>
                                                    <option value="30">Goa</option>
                                                    <option value="24">Gujarat</option>
                                                    <option value="6">Haryana</option>
                                                    <option value="2">Himachal Pradesh</option>
                                                    <option value="1">Jammu And Kashmir</option>
                                                    <option value="20">Jharkhand</option>
                                                    <option value="29">Karnataka</option>
                                                    <option value="175">Kendriya Vidyalaya Sangathan</option>
                                                    <option value="32">Kerala</option>
                                                    <option value="37">Ladakh</option>
                                                    <option value="31">Lakshadweep</option>
                                                    <option value="23">Madhya Pradesh</option>
                                                    <option value="27">Maharashtra</option>
                                                    <option value="14">Manipur</option>
                                                    <option value="17">Meghalaya</option>
                                                    <option value="15">Mizoram</option>
                                                    <option value="13">Nagaland</option>
                                                    <option value="176">Navodaya Vidyalayas Samiti</option>
                                                    <option value="21">Odisha</option>
                                                    <option value="34">Puducherry</option>
                                                    <option value="3">Punjab</option>
                                                    <option value="8">Rajasthan</option>
                                                    <option value="11">Sikkim</option>
                                                    <option value="33">Tamil Nadu</option>
                                                    <option value="36">Telangana</option>
                                                    <option value="200">Test State</option>
                                                    <option value="16">Tripura</option>
                                                    <option value="5">Uttarakhand</option>
                                                    <option value="9">Uttar Pradesh</option>
                                                    <option value="19">West Bengal</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="advance-search-input">
                                                <select name="district" id="district">
                                                    <option value="0">Select District</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="advance-search-input">
                                                <select name="district" id="block">
                                                    <option value="0">Select Block</option>
                                                </select>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="dashboard-box">

                                <div className="row">
                                    <div className="col-md-4 pr-0">
                                        <h1 className='dash-title heading-lg'>
                                            Welcome to PMShri Dashboard
                                        </h1>
                                    </div>

                                    <div className="col-md-8 p-0">
                                        <div className="row">
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

                        <div className="col-md-12">
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
