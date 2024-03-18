import "./basicInformation.scss";
import mono from "src/assets/images/mono.png";
import twitter from "src/assets/images/twitter.png";
import facebook from "src/assets/images/facebook.png";
import linkedin from "src/assets/images/linkedin.png";
import map from "src/assets/images/location.png";
import mail from "src/assets/images/mail.png";
import studentImage from "src/assets/images/student.png";
import teacherImage from "src/assets/images/teacher.png";
import Tinkering from "src/assets/images/Tinkering_Lab.png";
import Library from "src/assets/images/Library.png";
import Electric from "src/assets/images/Electric_power.png";
import Playground from "src/assets/images/Playground.png";
import Drinking from "src/assets/images/Drinkingwater.png";
import Laboratories from "src/assets/images/Laboratories.png";
import Medical from "src/assets/images/Medical.png";
import Internet from "src/assets/images/Internet.png";
import Ramp from "src/assets/images/Ramp.png";
import toilet from "src/assets/images/toilet.png";
import unavailable_image from "src/assets/images/not_available.png";

export const SchoolDetailsTemplate = (props:any) => {
    const {final_data,pdfRef} = props;
  return (
    <>
        <div className="container school_details_template" ref={pdfRef}>
            <div className="col-md-12 mt-5">
                <div className='main-heading-box-with-print'>
                    <h2 className="heading-blue-main basic_info_template">Basic Information</h2>
                </div>
            </div>
            <div className="school-container mt-4">
                <h2 className="heading-blue">{final_data?.schoolmnag},{final_data?.category_name},{final_data?.state_name} </h2>
                <div className="basic-information">
                    <div className="row pt-2">
                        <div className="col-md-9">
                            <div className="information-title-container">
                                <p>UDISE Code: {final_data?.udise_sch_code}</p>
                                <div className="information-title">
                                    <p>
                                        School Category : <span className="information-span">{final_data?.category_name}</span> , &nbsp;
                                        School Management : <span className="information-span">{final_data?.schoolmnag}</span>
                                    </p>
                                    <p> <img src={map} alt="location" className='icon-d' />  {final_data?.schoolmnag} {final_data?.district_name}</p>
                                    <p> <img src={mail} alt="mail" className='icon-d' /> <a href='mailto:afschoolracecourse@yahoo.co.in' className='text-black'>{final_data?.hm_email}</a></p>
                                </div>
                            </div>
                            <div className='social_button'>
                                <div className="sociol-icon">
                                    <a href="javscript:void();" className='facebook f-icon'><img src={facebook} alt="facebook" title="facebook" /></a>
                                    <a href="javscript:void();" className='twitter f-icon'><img src={twitter} alt="twitter" title="twitter" /></a>
                                    <a href="javscript:void();" className='linkedin f-icon'><img src={linkedin} alt="linkedin" title="linkedin" /></a>
                                    {/* <div className=''><img src={instagram} alt="instagram" title="instagram" /></div> */}
                                </div>
                                <div className="information-button btn-wrap ms-3">
                                    <a href="#" className='btn btn-solid report-card'>Report Card</a>
                                    <button  className='btn red-bdr-btn'>Track School</button>
                                </div>

                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="information-title-container">
                                <div className="icon">
                                    <img src={mono} alt="pm shri logo" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="basic-information-profile">
                <div className="row">
                    <div className="col-md-6">
                        <div className="profile">
                            <div className="row align-items-center">
                                <div className="col-md-4">
                                    <div className="profile-icon">
                                        <img src={studentImage} alt="studen tImage" title="student Image" />
                                        <div className="profile-text">

                                            <h3>Students</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="profile-text">
                                        <p>Total Students  </p>
                                        <span className="studentNumber">{final_data?.total_boys+final_data?.total_girls || 0}</span>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="profile-text">
                                        <p>Boys</p>
                                        <span className="studentNumber">{final_data?.total_boys || 0}</span>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="profile-text">
                                        <p>Girls </p>
                                        <span className="studentNumber">{final_data?.total_girls|| 0}</span>
                                    </div>
                                </div>

                            </div>


                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="profile">
                            <div className="row align-items-center">
                                <div className="col-md-4">
                                    <div className="profile-icon">
                                        <img src={teacherImage} alt="studen tImage" title="student Image" />
                                        <div className="profile-text">

                                            <h3>Teachers</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="profile-text">
                                        <p>Total Teachers  </p>
                                        <span className="studentNumber">{final_data?.tot_tch_all||0}</span>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="profile-text">
                                        <p>Male</p>
                                        <span className="studentNumber">{final_data?.tot_tch_male||0}</span>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="profile-text">
                                        <p>Female </p>
                                        <span className="studentNumber">{final_data?.total_female||0}</span>
                                    </div>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>
            </div>


            <div className="school-container mt-0 box-shadow-none school-info-text ps-4">
                <h2 className="heading-blue">School Information</h2>
                <div className="basic-information school-information">
                    <div className="row pt-4">
                        <div className="col-20">
                            <div className="profile-text"><p>School Type</p>
                                <span className="studentNumber">{final_data?.category_name}</span></div>
                        </div>
                        <div className="col-20">
                            <div className="profile-text"><p>Year of Establishment</p>
                                <span className="studentNumber">{final_data?.estd_year||'-'}</span></div>
                        </div>
                        <div className="col-20">
                            <div className="profile-text"><p>School Category</p>
                                <span className="studentNumber">{final_data?.school_category}</span></div>
                        </div>
                        <div className="col-20">
                            <div className="profile-text"><p>Administrative Staff</p>
                                <span className="studentNumber">-</span></div>
                        </div>
                        <div className="col-20">
                            <div className="profile-text"><p>Support Staff</p>
                                <span className="studentNumber">-</span></div>
                        </div>
                        <div className="col-20">
                            <div className="profile-text"><p>Part-time Instructors</p>
                                <span className="studentNumber">0</span></div>
                        </div>
                        <div className="col-20">
                            <div className="profile-text"><p>State Management</p>
                                <span className="studentNumber">4-Government Aided</span></div>
                        </div>
                        <div className="col-20">
                            <div className="profile-text"><p>National Management</p>
                                <span className="studentNumber">4-Government Aided</span></div>
                        </div>
                        <div className="col-20">
                            <div className="profile-text"><p>Affiliation Board HSec.</p>
                                <span className="studentNumber">{final_data?.affilition_board_hsec ||'-'}</span></div>
                        </div>
                        <div className="col-20">
                            <div className="profile-text"><p>Affiliation Board Sec.</p>
                                <span className="studentNumber">{final_data?.affilition_board_sec|| '-'}</span></div>
                        </div>
                        <div className="col-20">
                            <div className="profile-text"><p>School Timing</p>
                                <span className="studentNumber">-</span></div>
                        </div>
                        <div className="col-20">
                            <div className="profile-text"><p>Status</p>
                                <span className="studentNumber">{final_data?.status||'-'}</span></div>
                        </div>
                        <div className="col-20">
                            <div className="profile-text"><p>Class From</p>
                                <span className="studentNumber">{final_data?.class_frm}</span></div>
                        </div>
                        <div className="col-20">
                            <div className="profile-text"><p>Class To</p>
                                <span className="studentNumber">{final_data?.class_to}</span></div>
                        </div>
                        <div className="col-20">
                            <div className="profile-text"><p>Classroom</p>
                                <span className="studentNumber">-</span></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="school-container mt-0">
                <h2 className="heading-blue">Infrastructure & Facilities Available</h2>
                <div className="basic-information school-information Infrastructure">
                    <div className="row pt-4">
                        <div className="col-20">
                            <div className={final_data?.toilet_func_yn?'profile-text available':'profile-text unavailable'}>
                                <div className='image-box'> <img src={toilet} alt="icon" /> </div>
                                <span className="studentNumber">Toilet</span>
                                <span className={final_data?.toilet_func_yn?'text-available':'text-unavailable'}> {final_data?.toilet_func_yn?'Available':'Unavailable'} </span>

                            </div>
                        </div>

                        <div className="col-20">
                            <div className="profile-text unavailable">
                                <div className='image-box'> <img src={Tinkering} alt="icon" /> </div>
                                <span className="studentNumber">Tinkering Lab</span>
                                <span className="text-unavailable"> Unavailable </span>

                            </div>
                        </div>

                        <div className="col-20">
                            <div className={final_data?.library_yn?'profile-text  available':'profile-text  unavailable' }>
                                <div className='image-box'> <img src={Library} alt="icon" /> </div>
                                <span className="studentNumber">Library</span>
                                <span className={final_data?.library_yn?'text-available':'text-unavailable'}> {final_data?.toilet_func_yn?'Available':'Unavailable'} </span>

                            </div>
                        </div>

                        <div className="col-20">
                            <div className={final_data?.electricity_yn?'profile-text  available':'profile-text  unavailable' }>
                                <div className='image-box'> <img src={Electric} alt="icon" /> </div>
                                <span className="studentNumber">Electric Power</span>
                                <span className={final_data?.electricity_yn?'text-available':'text-unavailable'}> {final_data?.electricity_yn?'Available':'Unavailable'} </span>

                            </div>
                        </div>

                        <div className="col-20">
                            <div className={final_data?.playground_yn?'profile-text available':'profile-text unavailable' }>
                                <div className='image-box'> <img src={Playground} alt="icon" /> </div>
                                <span className="studentNumber">Playground</span>
                                <span className={final_data?.playground_yn?'text-available':'text-unavailable'}> {final_data?.playground_yn?'Available':'Unavailable'} </span>

                            </div>
                        </div>

                        <div className="col-20">
                            <div className={final_data?.drink_water_yn?'profile-text available':'profile-text unavailable' }>
                                <div className='image-box'> <img src={Drinking} alt="icon" /> </div>
                                <span className="studentNumber">Drinking Water</span>
                                <span className={final_data?.drink_water_yn?'text-available':'text-unavailable'}> {final_data?.drink_water_yn?'Available':'Unavailable'}  </span>

                            </div>
                        </div>

                        <div className="col-20">
                            <div className="profile-text unavailable">
                                <div className='image-box'> <img src={Laboratories} alt="icon" /> </div>
                                <span className="studentNumber">Laboratories</span>
                                <span className="text-unavailable"> Available </span>

                            </div>
                        </div>

                        <div className="col-20">
                            <div className="profile-text unavailable">
                                <div className='image-box'> <img src={Medical} alt="icon" /> </div>
                                <span className="studentNumber">Medical Check-up</span>
                                <span className="text-unavailable"> Unavailable </span>

                            </div>
                        </div>

                        <div className="col-20">
                            <div className={final_data?.internet_yn?'profile-text available':'profile-text unavailable' }>
                                <div className='image-box'> <img src={Internet} alt="icon" /> </div>
                                <span className="studentNumber">Internet</span>
                                <span className={final_data?.internet_yn?'text-available':'text-unavailable'}> {final_data?.internet_yn?'Available':'Unavailable'} </span>

                            </div>
                        </div>

                        <div className="col-20">
                            <div className={final_data?.ramps_yn?'profile-text available':'profile-text unavailable' }>
                                <div className='image-box'> <img src={Ramp} alt="icon" /> </div>
                                <span className="studentNumber">Ramp</span>
                                <span className={final_data?.ramps_yn?'text-available':'text-unavailable'}> {final_data?.ramps_yn?'Available':'Unavailable'} </span>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
    </div>

    </>
  )
}
