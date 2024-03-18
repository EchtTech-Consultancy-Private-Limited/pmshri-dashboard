import { useRef, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
// import { useReactToPrint } from 'react-to-print';
import "./basicInformation.scss";
import { getSchoolDetails } from 'src/actions/dpgi.action';
import { Link, useParams } from 'react-router-dom';
import SmallSpinner from 'src/components/SmallSpinner';
import mono from "src/assets/images/mono.png";
import twitter from "src/assets/images/twitter.png";
import facebook from "src/assets/images/facebook.png";
import dbanner1 from "src/assets/images/schoolb1.jpg";
import dbanner2 from "src/assets/images/schoolb2.jpg";
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
import { jsPDF } from 'jspdf';
import { InitialStateModel, StoreModel } from 'src/models/dpgi';
import { useDispatch, useSelector } from 'react-redux';
import footerlogo1 from "src/assets/images/footer-logo-1.png";
import footerlogo2 from "src/assets/images/footer-logo-2.png";
import footerlogo3 from "src/assets/images/footer-logo-3.png";
import footerlogo4 from "src/assets/images/footer-logo-4.png";
import footerlogo5 from "src/assets/images/footer-logo-5.png";
import { GlobalLoading } from 'src/components/GlobalLoading';
import unavailable_image from "src/assets/images/not_available.png";
import fileCollection from "src/file_collection.json";

export default function BasicInformation() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
   

    const { udise_id } = useParams();
    const [isPrinting, setIsPrinting] = useState(false);
    const [isDownloading, setIsDownloading] = useState(false);
    const pdfRef = useRef<HTMLDivElement | null>(null);
    const dispatch = useDispatch()
    const data = useSelector<StoreModel>(store => store.schoolDetails) as InitialStateModel;
    const final_data = data?.data?.data;
    const management_data = data?.data?.mangData
    const customPageStyle = `
    @page {
        size: A3;
    }
    `;

    useEffect(() => {
        dispatch(getSchoolDetails(udise_id || ''))
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
    }, []);

    const handleDownload = () => {
        const content = pdfRef.current;
        setIsDownloading(true);
        if (content instanceof HTMLElement) {
            const doc = new jsPDF();

            doc.html(content, {
                callback: function (doc) {
                    const doc_name = `${final_data?.school_name}_school_details.pdf`
                    doc.save(doc_name);
                    setIsDownloading(false);
                },
                width: 1600,
                windowWidth: 1400,
                html2canvas: { scale: 0.15 }
            });
        } else {
            console.error('Invalid content: not an HTMLElement');
        }
    };

    // const handlePrint = useReactToPrint({
    //     content: () => componentRef.current,
    //     pageStyle: customPageStyle,
    //     onBeforeGetContent:()=>{
    //         setIsPrinting(false);
    //     },
    //     onBeforePrint:()=>{
    //         setIsPrinting(true);
    //     },
    //     onAfterPrint:()=>{
    //         setIsPrinting(false);
    //     },


    // });

    const compareImageUrlFromLocalToRemote=(image_name:string)=>{
        const front_images = fileCollection.front_image;
        const back_images = fileCollection.back_image;
        if(front_images.includes(image_name) || back_images.includes(image_name)){
            return true;
        }else{
            return false;
        }
    }

    const handleShow = () =>{
        axios.post("https://src.udiseplus.gov.in/reportCardByApi/PdfSchoolReportReportPMS",{
            "clientId":"gis",
            "clientKey":"gis",
            "udiseCode":final_data.udise_sch_code
        }).then((result)=>{
            console.log(result,' final result')
        })
        setShow(true);
    } 
    return (
        <>
            {data.loading ? <GlobalLoading /> : ""}

            <section className="banner-wrap banner-bg banner-state ptb-30" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="common-banner-heading text-white">
                                School Details
                            </h2>
                            <p className="common-banner-desc text-white">
                                <Link to="/" className="text-white">Home</Link> / School Details
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='container p-relative print-box-d'>
                <div className="print-icon-box">
                    <i>{(isPrinting || isDownloading) ? <SmallSpinner /> : ""}</i>
                    {/* <span className="material-icons-round print" title='Print' onClick={handlePrint}>print</span> */}
                    <span className="material-icons-round download" title='Download' onClick={handleDownload}>download</span>
                </div>
            </section>


            {/* <SchoolDetailsTemplate final_data={final_data} pdfRef={pdfRef}/> */}

            <div className="container" id="printpdf" ref={pdfRef}>
                <div className="col-md-12 mt-5">
                    <div className='main-heading-box-with-print'>
                        <h2 className="heading-blue-main">Basic Information</h2>
                    </div>
                </div>
                <div className="school-container mt-4">
                    <h2 className="heading-blue">{final_data?.school_name}, {final_data?.block_name}, {final_data?.state_name}, {final_data?.district_name} </h2>
                    <div className="basic-information">
                        <div className="row pt-2">
                            <div className="col-md-9">
                                <div className="information-title-container">
                                    <p>UDISE Code: {final_data?.udise_sch_code}</p>
                                    <div className="information-title">
                                        <p>
                                            School Category : <span className="information-span">{final_data?.category_name}</span> , &nbsp;
                                            School Management : <span className="information-span">{management_data?.length > 0 ? management_data[0].manag_name : 'N/A'}</span>
                                        </p>
                                        <p> <img src={map} alt="location" className='icon-d' />{final_data?.block_name}, {final_data?.district_name}, {final_data?.state_name}</p>
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
                                        <a href={`${process.env.REACT_APP_REPORT_CARD_URL}pdf/draft_PMSHRI_school_report_card.pdf?udise_code=${final_data?.udise_sch_code}/`} target='_blank' className='btn btn-solid report-card'>Report Card</a>
                                        <button className='btn red-bdr-btn'>Track School</button>
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
                                            <span className="studentNumber">{final_data?.total_boys + final_data?.total_girls || 0}</span>
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
                                            <span className="studentNumber">{final_data?.total_girls || 0}</span>
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
                                            <span className="studentNumber">{final_data?.tot_tch_all || 0}</span>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="profile-text">
                                            <p>Male</p>
                                            <span className="studentNumber">{final_data?.total_male || 0}</span>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="profile-text">
                                            <p>Female </p>
                                            <span className="studentNumber">{final_data?.total_female || 0}</span>
                                        </div>
                                    </div>

                                </div>


                            </div>
                        </div>
                    </div>
                </div>


                <div className="school-container mt-0 box-shadow-none school-info-text">
                    <h2 className="heading-blue">School Information</h2>
                    <div className="basic-information school-information">
                        <div className="row pt-4">
                            <div className="col-20">
                                <div className="profile-text"><p>School Type</p>
                                    <span className="studentNumber">{final_data?.sch_type===1?"Boys":final_data?.sch_type===2?"Girls":"Co-educational"}</span></div>
                            </div>
                            <div className="col-20">
                                <div className="profile-text"><p>Year of Establishment</p>
                                    <span className="studentNumber">{final_data?.estd_year || '-'}</span></div>
                            </div>
                            <div className="col-20">
                                <div className="profile-text"><p>School Category</p>
                                    <span className="studentNumber">{final_data?.category_name}</span></div>
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
                                    <span className="studentNumber">-</span></div>
                            </div>
                            <div className="col-20">
                                <div className="profile-text"><p>National Management</p>
                                    <span className="studentNumber">-</span></div>
                            </div>
                            <div className="col-20">
                                <div className="profile-text"><p>Affiliation Board HSec.</p>
                                    <span className="studentNumber">{final_data?.affilition_board_hsec || '-'}</span></div>
                            </div>
                            <div className="col-20">
                                <div className="profile-text"><p>Affiliation Board Sec.</p>
                                    <span className="studentNumber">{final_data?.affilition_board_sec || '-'}</span></div>
                            </div>
                            <div className="col-20">
                                <div className="profile-text"><p>School Timing</p>
                                    <span className="studentNumber">-</span></div>
                            </div>
                            <div className="col-20">
                                <div className="profile-text"><p>Status</p>
                                    <span className="studentNumber">{final_data?.schoolstatus_name || '-'}</span></div>
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
                                <div className={final_data?.toilet_func_yn ? 'profile-text available' : 'profile-text unavailable'}>
                                    <div className='image-box'> <img src={toilet} alt="icon" /> </div>
                                    <span className="studentNumber">Toilet</span>
                                    <span className={final_data?.toilet_func_yn ? 'text-available' : 'text-unavailable'}> {final_data?.toilet_func_yn ? 'Available' : 'Unavailable'} </span>

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
                                <div className={final_data?.library_yn ? 'profile-text  available' : 'profile-text  unavailable'}>
                                    <div className='image-box'> <img src={Library} alt="icon" /> </div>
                                    <span className="studentNumber">Library</span>
                                    <span className={final_data?.library_yn ? 'text-available' : 'text-unavailable'}> {final_data?.library_yn ? 'Available' : 'Unavailable'} </span>

                                </div>
                            </div>

                            <div className="col-20">
                                <div className={final_data?.electricity_yn ? 'profile-text  available' : 'profile-text  unavailable'}>
                                    <div className='image-box'> <img src={Electric} alt="icon" /> </div>
                                    <span className="studentNumber">Electric Power</span>
                                    <span className={final_data?.electricity_yn ? 'text-available' : 'text-unavailable'}> {final_data?.electricity_yn ? 'Available' : 'Unavailable'} </span>

                                </div>
                            </div>

                            <div className="col-20">
                                <div className={final_data?.playground_yn ? 'profile-text available' : 'profile-text unavailable'}>
                                    <div className='image-box'> <img src={Playground} alt="icon" /> </div>
                                    <span className="studentNumber">Playground</span>
                                    <span className={final_data?.playground_yn ? 'text-available' : 'text-unavailable'}> {final_data?.playground_yn ? 'Available' : 'Unavailable'} </span>

                                </div>
                            </div>

                            <div className="col-20">
                                <div className={final_data?.drink_water_yn ? 'profile-text available' : 'profile-text unavailable'}>
                                    <div className='image-box'> <img src={Drinking} alt="icon" /> </div>
                                    <span className="studentNumber">Drinking Water</span>
                                    <span className={final_data?.drink_water_yn ? 'text-available' : 'text-unavailable'}> {final_data?.drink_water_yn ? 'Available' : 'Unavailable'}  </span>

                                </div>
                            </div>

                            <div className="col-20">
                                <div className="profile-text unavailable">
                                    <div className='image-box'> <img src={Laboratories} alt="icon" /> </div>
                                    <span className="studentNumber">Laboratories</span>
                                    <span className="text-unavailable"> Unavailable </span>

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
                                <div className={final_data?.internet_yn ? 'profile-text available' : 'profile-text unavailable'}>
                                    <div className='image-box'> <img src={Internet} alt="icon" /> </div>
                                    <span className="studentNumber">Internet</span>
                                    <span className={final_data?.internet_yn ? 'text-available' : 'text-unavailable'}> {final_data?.internet_yn ? 'Available' : 'Unavailable'} </span>

                                </div>
                            </div>

                            <div className="col-20">
                                <div className={final_data?.ramps_yn ? 'profile-text available' : 'profile-text unavailable'}>
                                    <div className='image-box'> <img src={Ramp} alt="icon" /> </div>
                                    <span className="studentNumber">Ramp</span>
                                    <span className={final_data?.ramps_yn ? 'text-available' : 'text-unavailable'}> {final_data?.ramps_yn ? 'Available' : 'Unavailable'} </span>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="details-banner-image">
                            <img src={final_data?.front_image!=="" && compareImageUrlFromLocalToRemote(final_data?.front_image)?`/pmshridata/${final_data?.front_image}`:unavailable_image} alt="details-banner" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="details-banner-image">
                            <img src={final_data?.back_image!==""&& compareImageUrlFromLocalToRemote(final_data?.back_image)?`/pmshridata/${final_data?.back_image}`:unavailable_image} alt="details-banner" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row school-information mtb-30">
                    <div className="col-20">
                        <div className="client-img">
                            <a href="http://india.gov.in/" title="http://www.india.gov.in : External website that opens in a new window" target='_blank'>
                                <img src={footerlogo1} alt="footer-logo" />
                            </a>
                        </div>
                    </div>
                    <div className="col-20">
                        <div className="client-img">
                            <a href="https://www.mygov.in/" title="https://www.mygov.in/ : External website that opens in a new window" target='_blank'>
                                <img src={footerlogo2} alt="footer-logo" />
                            </a>
                        </div>
                    </div>
                    <div className="col-20">
                        <div className="client-img">
                            <a href="https://www.education.gov.in/en/school-education" title="https://www.education.gov.in/en/school-education : External website that opens in a new window" target='_blank'>
                                <img src={footerlogo3} alt="footer-logo" />
                            </a>
                        </div>
                    </div>
                    <div className="col-20">
                        <div className="client-img">
                            <a href="https://dsel.education.gov.in/shagun" title="https://dsel.education.gov.in/shagun: External website that opens in a new window" target='_blank'>
                                <img src={footerlogo4} alt="footer-logo" />
                            </a>
                        </div>
                    </div>
                    <div className="col-20">
                        <div className="client-img">
                            <a href="https://udiseplus.gov.in/#/home" title="https://udiseplus.gov.in/#/home: External website that opens in a new window" target='_blank'>
                                <img src={footerlogo5} alt="footer-logo" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
