import { useRef, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import { useReactToPrint } from 'react-to-print';
import "./basicInformation.scss";
import { getSchoolDetails } from 'src/actions/dpgi.action';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import SmallSpinner from 'src/components/SmallSpinner';
import mono from "src/assets/images/mono.png";
import boundary_wallpng from "src/assets/images/boundary_wallpng.png";
import twitter from "src/assets/images/twitter.png";
import facebook from "src/assets/images/facebook.png";
import linkedin from "src/assets/images/linkedin.png";
import studentImage from "src/assets/images/student.png";
import teacherImage from "src/assets/images/teacher.png";
import Library from "src/assets/images/Library.png";
import Electric from "src/assets/images/Electric_power.png";
import Playground from "src/assets/images/Playground.png";
import Drinking from "src/assets/images/Drinkingwater.png";
import Laboratories from "src/assets/images/Laboratories.png";
import Medical from "src/assets/images/Medical.png";
import Internet from "src/assets/images/Internet.png";
import Ramp from "src/assets/images/Ramp.png";
import toilet from "src/assets/images/toilet.png";
import Residential from "src/assets/images/Residential.png";
import self_defence from "src/assets/images/self-defence.png";
import water_purifier from "src/assets/images/Water-purifier.png";
import cctv from "src/assets/images/camera.png";
import hand_wash from "src/assets/images/Hand-wash.png";
import De_worming from "src/assets/images/de-worming.png";
import udise from "src/assets/images/udise.svg";
import vidyanjali from "src/assets/images/vidyanjali.jpg";

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
  
    const [reportCard,setReportCard] = useState("");
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
            top: 0,
            behavior: "smooth"
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

    const compareImageUrlFromLocalToRemote = (image_name: string) => {
        const front_images = fileCollection.front_image;
        const back_images = fileCollection.back_image;
        if (front_images.includes(image_name) || back_images.includes(image_name)) {
            return true;
        } else {
            return false;
        }
    }
    const handleShow = () =>{
        setShow(false);
        axios.post("https://src.udiseplus.gov.in/reportCardByApi/PdfSchoolReportReportPMS",{
            "clientId":"gis",
            "clientKey":"gis",
            "udiseCode":final_data.udise_sch_code
        }).then((result)=>{           
            if(result.data.messageCopde===1000){
                setShow(true);
                setReportCard(result.data.responseData);
            }
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
                    <Link to="/state" className="backbuttondata pointer">Back</Link>                                   
                </div>
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
                <div className="school-container box-border mt-4">
                    <h2 className="heading-blue">{final_data?.school_name}, {final_data?.block_name}, {final_data?.district_name}, {final_data?.state_name} </h2>
                    <div className="basic-information">
                        <div className="row pt-2">
                            <div className="col-md-9">
                                <div className="information-title-container">
                                    <div className="row">
                                        <div className="col-md-7">
                                            <div className="information-title border-right-gray tilte-disply-align">
                                                <p><span className='same-width'>UDISE Code</span> :&nbsp; <span className="information-span"> {final_data?.udise_sch_code}</span></p>
                                                <p><span className='same-width'>School Category</span> :&nbsp; <span className="information-span"> {final_data?.category_name}</span></p>
                                                <p><span className='same-width'>School Management</span> :&nbsp; <span className="information-span"> {management_data?.length > 0 ? management_data[0].manag_name : 'N/A'}</span></p>
                                                <p><span className='same-width'>Address</span> :&nbsp; <span className="information-span"> {final_data?.block_name}, {final_data?.district_name}, {final_data?.state_name}</span></p>
                                                <p><span className='same-width'>Email-ID</span> :&nbsp; <span className="information-span"><a href='mailto:afschoolracecourse@yahoo.co.in'> {final_data?.hm_email}</a></span></p>

                                                {/* <p className="text-danger-icon"> <img src={map} alt="location" className='icon-d' />{final_data?.block_name}, {final_data?.district_name}, {final_data?.state_name}</p> */}
                                                {/* <p className="text-danger-icon"> <img src={mail} alt="mail" className='icon-d' /> <a href='mailto:afschoolracecourse@yahoo.co.in'>{final_data?.hm_email}</a></p> */}
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="information-title tilte-disply-align ms-2">
                                                <p>
                                                    <span className='same-width'>School Type</span> :&nbsp; <span className="information-span"> {final_data?.sch_type === 1 ? "Boys" : final_data?.sch_type === 2 ? "Girls" : "Co-educational"}</span>
                                                </p>
                                                <p>
                                                    <span className='same-width'>School Status</span> :&nbsp; <span className="information-span"> {final_data?.schoolstatus_name || '-'}</span>
                                                </p>
                                                <p>
                                                   <span className='same-width'> Pin code</span> :&nbsp; <span className="information-span"> N/A</span>
                                                </p>
                                                <p>
                                                    <span className='same-width'>Class</span> :&nbsp; <span className="information-span"> {final_data?.class_frm} to {final_data?.class_to}</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='social_button'>
                                    <div className="sociol-icon">
                                        {/*<a href="javscript:void();" className='facebook f-icon'><img src={facebook} alt="facebook" title="facebook" /></a>
                                        <a href="javscript:void();" className='twitter f-icon'><img src={twitter} alt="twitter" title="twitter" /></a>
                                        <a href="javscript:void();" className='linkedin f-icon'><img src={linkedin} alt="linkedin" title="linkedin" /></a>
                                         <div className=''><img src={instagram} alt="instagram" title="instagram" /></div> */}
                                    </div>
                                    <div className="information-button btn-wrap">
                                        {/* <a href={`${process.env.REACT_APP_REPORT_CARD_URL}pdf/draft_PMSHRI_school_report_card.pdf?udise_code=${final_data?.udise_sch_code}/`} target='_blank' className='btn btn-solid report-card'>Report Card</a> */}
                                        <Button className='btn btn-solid report-card' onClick={handleShow}>Report Card</Button>
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

                <div className="basic-information-profile box-border">
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
                                    <div className="col-md-8">
                                        <div className="row">
                                            <div className="col-md-12 mb-2">
                                                <div className="profile-text">
                                                    <p>Total Students &nbsp;:&nbsp; <span className="studentNumber">{final_data?.total_boys + final_data?.total_girls || 0}</span></p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 total-s-card-padding-r">
                                                <div className="profile-text boys-color">
                                                    <p>Boys &nbsp;:&nbsp; <span className="studentNumber">{final_data?.total_boys || 0}</span></p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 total-s-card-padding-l">
                                                <div className="profile-text girl-color">
                                                    <p>Girls &nbsp;:&nbsp; <span className="studentNumber">{final_data?.total_girls || 0}</span> </p>

                                                </div>
                                            </div>
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
                                    <div className="col-md-8">
                                        <div className="row">
                                            <div className="col-md-12 mb-2">
                                                <div className="profile-text">
                                                    <p>Total Teachers &nbsp;:&nbsp; <span className="studentNumber">{(final_data?.tot_tch_male + final_data?.tot_tch_f )|| 0}</span> </p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 total-s-card-padding-r">
                                                <div className="profile-text boys-color">
                                                    <p>Male &nbsp;:&nbsp; <span className="studentNumber">{final_data?.tot_tch_male || 0}</span></p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 total-s-card-padding-l">
                                                <div className="profile-text girl-color">
                                                    <p>Female &nbsp;:&nbsp; <span className="studentNumber">{final_data?.tot_tch_f || 0}</span> </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>


                            </div>
                        </div>
                    </div>
                </div>




                <div className="school-container box-border mt-0">
                    <h2 className="heading-blue">Infrastructure & Facilities Available</h2>
                    <div className="basic-information school-information Infrastructure">
                        <div className="row pt-4">
                            <div className="col-20">
                                <div className={final_data?.toilet_func_yn===1 ? 'profile-text available' : 'profile-text unavailable'}>
                                    <div className='image-box'> <img src={toilet} alt="icon" /> </div>
                                    <span className="studentNumber">Toilet</span>
                                    <span className={final_data?.toilet_func_yn===1 ? 'text-available' : 'text-unavailable'}> {final_data?.toilet_func_yn ? 'Available' : 'Unavailable'} </span>

                                </div>
                            </div>


                            <div className="col-20">
                                <div className={final_data?.library_yn===1 ? 'profile-text  available' : 'profile-text  unavailable'}>
                                    <div className='image-box'> <img src={Library} alt="icon" /> </div>
                                    <span className="studentNumber">Library</span>
                                    <span className={final_data?.library_yn===1 ? 'text-available' : 'text-unavailable'}> {final_data?.library_yn===1 ? 'Available' : 'Unavailable'} </span>

                                </div>
                            </div>



                            <div className="col-20">
                                <div className={final_data?.playground_yn===1 ? 'profile-text available' : 'profile-text unavailable'}>
                                    <div className='image-box'> <img src={Playground} alt="icon" /> </div>
                                    <span className="studentNumber">Playground</span>
                                    <span className={final_data?.playground_yn===1 ? 'text-available' : 'text-unavailable'}> {final_data?.playground_yn===1 ? 'Available' : 'Unavailable'} </span>

                                </div>
                            </div>

                            <div className="col-20">
                                <div className={final_data?.drink_water_yn===1 ? 'profile-text available' : 'profile-text unavailable'}>
                                    <div className='image-box'> <img src={Drinking} alt="icon" /> </div>
                                    <span className="studentNumber">Drinking Water</span>
                                    <span className={final_data?.drink_water_yn===1 ? 'text-available' : 'text-unavailable'}> {final_data?.drink_water_yn===1 ? 'Available' : 'Unavailable'}  </span>

                                </div>
                            </div>

                            <div className="col-20">
                                <div className={final_data?.ramps_yn===1 ? 'profile-text available' : 'profile-text unavailable'}>
                                    <div className='image-box'> <img src={Ramp} alt="icon" /> </div>
                                    <span className="studentNumber">Ramp</span>
                                    <span className={final_data?.ramps_yn===1 ? 'text-available' : 'text-unavailable'}> {final_data?.ramps_yn===1 ? 'Available' : 'Unavailable'}  </span>

                                </div>
                            </div>

                            <div className="col-20">
                                <div className={`profile-text ${final_data?.medchk_yn===1?'available':'unavailable'}`}>
                                    <div className='image-box'> <img src={Medical} alt="icon" /> </div>
                                    <span className="studentNumber">Medical Check-up</span>
                                    <span className={`text-${final_data?.medchk_yn===1?'available':'unavailable'}`}> {final_data?.medchk_yn===1?'Available':'Unavailable'} </span>
                                </div>
                            </div>

                            <div className="col-20">
                                <div className={final_data?.electricity_yn===1 ? 'profile-text  available' : 'profile-text  unavailable'}>
                                    <div className='image-box'> <img src={Electric} alt="icon" /> </div>
                                    <span className="studentNumber">Electric Power</span>
                                    <span className={final_data?.electricity_yn===1 ? 'text-available' : 'text-unavailable'}> {final_data?.electricity_yn===1 ? 'Available' : 'Unavailable'} </span>

                                </div>
                            </div>

                            <div className="col-20">
                                <div className={final_data?.internet_yn===1 ? 'profile-text available' : 'profile-text unavailable'}>
                                    <div className='image-box'> <img src={Internet} alt="icon" /> </div>
                                    <span className="studentNumber">Internet</span>
                                    <span className={final_data?.internet_yn===1 ? 'text-available' : 'text-unavailable'}> {final_data?.internet_yn===1 ? 'Available' : 'Unavailable'} </span>
                                </div>
                            </div>

                            <div className="col-20">
                                <div className={final_data?.resi_sch_yn===1 ? 'profile-text available' : 'profile-text unavailable'}>
                                    <div className='image-box'> <img src={Residential} alt="icon" /> </div>
                                    <span className="studentNumber">Residential</span>
                                    <span className={final_data?.resi_sch_yn===1 ? 'text-available' : 'text-unavailable'}> {final_data?.resi_sch_yn===1 ? 'Available' : 'Unavailable'} </span>
                                </div>
                            </div>

                            <div className="col-20">
                                <div className={final_data?.slfdef_grt_yn===1 ? 'profile-text available' : 'profile-text unavailable'}>
                                    <div className='image-box'> <img src={self_defence} alt="icon" /> </div>
                                    <span className="studentNumber">Self Defence Training for Girls</span>
                                    <span className={final_data?.slfdef_grt_yn===1 ? 'text-available' : 'text-unavailable'}> {final_data?.slfdef_grt_yn===1 ? 'Available' : 'Unavailable'} </span>
                                </div>
                            </div>

                            <div className="col-20">
                                <div className={final_data?.water_purifier_yn===1 ? 'profile-text available' :final_data?.water_purifier_yn===2?"profile-text unavailable": 'profile-text unavailable'}>
                                    <div className='image-box'> <img src={water_purifier} alt="icon" /> </div>
                                    <span className="studentNumber">Water Purifier</span>
                                    <span className={final_data?.water_purifier_yn===1 ? 'text-available' :final_data?.water_purifier_yn===2?"text-unavailable": 'text-unavailable'}> {final_data?.water_purifier_yn===1 ? 'Available' :final_data?.water_purifier_yn===2?"Unavailable": 'Unavailable'} </span>
                                </div>
                            </div>

                            <div className="col-20">
                                <div className={final_data?.cctv_cam_yn===1 ? 'profile-text available' : 'profile-text unavailable'}>
                                    <div className='image-box'> <img src={cctv} alt="icon" /> </div>
                                    <span className="studentNumber">CCTV Camera</span>
                                    <span className={final_data?.cctv_cam_yn===1 ? 'text-available' : 'text-unavailable'}> {final_data?.cctv_cam_yn===1 ? 'Available' : 'Unavailable'} </span>
                                </div>
                            </div>

                            <div className="col-20">
                                <div className={final_data?.handwash_yn===1 ? 'profile-text available' : 'profile-text unavailable'}>
                                    <div className='image-box'> <img src={hand_wash} alt="icon" /> </div>
                                    <span className="studentNumber">Hand Wash</span>
                                    <span className={final_data?.handwash_yn===1 ? 'text-available' : 'text-unavailable'}> {final_data?.handwash_yn===1 ? 'Available' : 'Unavailable'} </span>
                                </div>
                            </div>

                            <div className="col-20">
                                <div className={(final_data?.dewormtab_yn===1 ||final_data?.dewormtab_yn===2) ? 'profile-text available' : 'profile-text unavailable'}>
                                    <div className='image-box'> <img src={De_worming} alt="icon" /> </div>
                                    <span className="studentNumber">De-Worming Tablets</span>
                                    <span className={(final_data?.dewormtab_yn===1 ||final_data?.dewormtab_yn===2) ? 'text-available' : 'text-unavailable'}> {(final_data?.dewormtab_yn===1 ||final_data?.dewormtab_yn===2) ? 'Available' : 'Unavailable'} </span>
                                </div>
                            </div>

                            <div className="col-20">
                                <div className={[1,2,3,4].includes(final_data?.bndrywall_type) ? 'profile-text available' : 'profile-text unavailable'}>
                                    <div className='image-box'> <img src={boundary_wallpng} alt="icon" /> </div>
                                    <span className="studentNumber">Boundry-Wall</span>
                                    <span className={[1,2,3,4].includes(final_data?.bndrywall_type) ? 'text-available' : 'text-unavailable'}> {[1,2,3,4].includes(final_data?.bndrywall_type)? 'Available' : 'Unavailable'} </span>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>

                <div className="school-container mt-0 box-shadow-none school-info-text">
                    {/* <h2 className="heading-blue">School Information</h2> */}
                    <div className="basic-information school-information">
                        <div className="row pt-4">
                            <div className="col-20">
                                <div className="profile-text">
                                    <div className="school-info-box">
                                        <p>Total Classroom</p>
                                        <span className="studentNumber">{final_data?.smart_class_tv_tot||0}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-20">
                                <div className="profile-text">
                                    <div className="school-info-box">
                                        <p>No. of Boys Toilet</p>
                                        <span className="studentNumber">{final_data?.total_toilet_b_fun||0}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-20">
                                <div className="profile-text">
                                    <div className="school-info-box">
                                        <p>No. of Girls Toilet</p>
                                        <span className="studentNumber">{final_data?.total_toilet_g_fun||0}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-20">
                                <div className="profile-text">
                                    <div className="school-info-box">
                                        <p>CWSN Boys Toilet</p>
                                        <span className="studentNumber">{final_data?.toiletb_cwsn||0}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-20">
                                <div className="profile-text">
                                    <div className="school-info-box">
                                        <p>CWSN Girls Toilet</p>
                                        <span className="studentNumber">{final_data?.toiletg_cwsn||0}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-20">
                                <div className="profile-text">
                                    <div className="school-info-box">
                                        <p>No. of Books Available in Library</p>
                                        <span className="studentNumber">{final_data?.lib_books||0}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-20">
                                <div className="profile-text">
                                    <div className="school-info-box">
                                        <p>No. of Smart Classrooms</p>
                                        <span className="studentNumber">{final_data?.smart_class_tv_tot||0}</span>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-20">
                                <div className="profile-text">
                                    <div className="school-info-box">
                                        <p>No. of Desktops / PCs</p>
                                        <span className="studentNumber">18</span>
                                    </div>
                                </div>
                            </div> */}
                            <div className="col-20">
                                <div className="profile-text">
                                    <div className="school-info-box">
                                        <p>No. of Laptop / Notebook</p>
                                        <span className="studentNumber">{final_data?.laptop_tot||0}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-20">
                                <div className="profile-text">
                                    <div className="school-info-box">
                                        <p>No. of Tablets</p>
                                        <span className="studentNumber">{final_data?.tablets_tot||0}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-20">
                                <div className="profile-text">
                                    <div className="school-info-box">
                                        <p>No. of Printer</p>
                                        <span className="studentNumber">{final_data?.printer_tot||0}</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* School image Start */}
                <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="details-banner-image">                      
                            {final_data?.front_image ?
                                <img
                                    src={`https://pmshrischools.education.gov.in/lumen/public/uploadsv1/school/${final_data?.front_image}`}
                                    alt={final_data?.front_image}
                                />:                          
                             <img src={final_data?.front_image !== "" && compareImageUrlFromLocalToRemote(final_data?.front_image) ? `/pmshridata/${final_data?.front_image}` : unavailable_image} alt="details-banner" />                             
                        }
                            
                        </div>                       
                    </div>
                    <div className="col-md-6">
                        <div className="details-banner-image">
                        {final_data?.back_image ?
                        <img
                        src={`https://pmshrischools.education.gov.in/lumen/public/uploadsv1/school/${final_data?.back_image}`}
                        alt={final_data?.back_image}
                    />:
                            <img src={final_data?.back_image !== "" && compareImageUrlFromLocalToRemote(final_data?.back_image) ? `/pmshridata/${final_data?.back_image}` : unavailable_image} alt="details-banner" />
                        }
                        </div>                       
                    </div>
                </div>
            </div>
            {/* School image End */}
            </div>

           

            <div className="container">
                <div className="row school-information mtb-30">
                    <div className="col-md-2 total-s-card-padding-r total-s-card-padding-l  ">
                        <div className="client-img">
                            <a href="https://www.education.gov.in/en/school-education" title="https://www.education.gov.in/en/school-education : External website that opens in a new window" target='_blank'>
                                <img src={footerlogo3} alt="footer-logo" />
                            </a>
                        </div>
                    </div>
                    <div className="col-md-2 total-s-card-padding-r">
                        <div className="client-img">
                            <a href="https://udiseplus.gov.in/" title="UDISE+" target='_blank'>
                                <img src={udise} alt="footer-logo" />
                            </a>
                        </div>
                    </div>
                    <div className="col-md-2 total-s-card-padding-r">
                        <div className="client-img">
                            <a href="https://dpgi.udiseplus.gov.in/" title="PGI" target='_blank'>
                                <img src={footerlogo5} alt="footer-logo" />
                            </a>
                        </div>
                    </div>
                    <div className="col-md-2 total-s-card-padding-r">
                        <div className="client-img">
                            <a href="https://vidyanjali.education.gov.in" title="Vidyanjali" target='_blank'>
                                <img src={vidyanjali} alt="footer-logo" />
                            </a>
                        </div>
                    </div>
                    <div className="col-md-2 total-s-card-padding-r">
                        <div className="client-img">
                            <a href="https://www.mygov.in/" title="https://www.mygov.in/ : External website that opens in a new window" target='_blank'>
                                <img src={footerlogo2} alt="footer-logo" />
                            </a>
                        </div>
                    </div>
                    <div className="col-md-2 total-s-card-padding-r">
                        <div className="client-img">
                            <a href="http://india.gov.in/" title="http://www.india.gov.in : External website that opens in a new window" target='_blank'>
                                <img src={footerlogo1} alt="footer-logo" />
                            </a>
                        </div>
                    </div>

                </div>
            </div>


    <Modal show={show} onHide={handleClose}  size="lg">
        <Modal.Header closeButton>
          <Modal.Title>School Report Card - Udise Code : <span className="text-danger">{final_data?.udise_sch_code}</span></Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <embed src={`data:application/pdf;base64,${reportCard}`} className="school-report-card"/>
        </Modal.Body>
</Modal>
        </>
    )
}
