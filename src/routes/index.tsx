import { Routes, Route, Navigate } from "react-router-dom";
import App from 'src/App'
import Header from 'src/components/Shared/Header/Header';
import Footer from 'src/components/Shared/Footer/Footer';
import { Provider } from 'react-redux';
import store from '../store'
import State from "src/pages/State";
import District from "src/pages/District";
import Indicators from "src/pages/Indicators";
import Category from "src/pages/Category";
// import Cover from "src/components/Cover/Cover";
import DataSource from "src/components/Home/HowItWork/DataSource";
import Methodology from "src/components/Methodology/Methodology";
// import Login from "src/components/Login/Login";
import GradewiseBarlist from "src/pages/GradewiseBarlist";
import ScreenReader from "src/pages/ScreenReader";
import Aboutdetails from "src/components/Home/AboutPgi/Aboutdetails";
import SqafpillerDetails from "src/components/SQAF/sqafpillardetails";
// import aboutImg2 from 'src/assets/images/about-img02.png';
import Photogallery from "src/components/Innergallery/Photogallery";
import Videogallery from "src/components/Innergallery/Videogallery";
import BasicInformation from "src/components/Shared/school/basicInformation/BasicInformation";
import Sqaf from "src/pages/Sqaf";
import Faqs from "src/pages/Faqs";
import TermsCondition from "src/components/PolicyPages/TermsCondition";
import Privacypolicy from "src/components/PolicyPages/privacypolicy";
import Copyrightpolicy from "src/components/PolicyPages/copyrightpolicy";
import Hyperlinkpolicy from "src/components/PolicyPages/Hyperlinkpolicy";
import Disclaimer from "src/components/PolicyPages/Disclaimer";
import Stategallery from "src/components/Innergallery/Stategallery";
import Dashboard from "src/dashboard/Dashboard";
// import Gis from "src/components/MGis";

// const isLogin = localStorage.getItem('isLogin') || 'false'
// const route = window.location.pathname


export const routes = (
    <Provider store={store} >
        <Header  />
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/state" element={<State />} />
            <Route path="/district" element={<District />} />
            <Route path="/indicators" element={<Indicators />} />
            <Route path="/category" element={<Category />} />
            <Route path="/data-source" element={<DataSource />} />
            <Route path="/methodology" element={<Methodology />} />
            <Route path="/gradewisebarlist" element={<GradewiseBarlist />} />
            <Route path="/screenreader" element={<ScreenReader />} />
            <Route path="/Stategallery" element={<Stategallery/>} />
            <Route path="/Photogallery" element={<Photogallery/>} />
            <Route path="/Videogallery" element={<Videogallery/>} />
            <Route path="/about-details" element={<Aboutdetails />} />
            <Route path="/sqaf-home" element={<Sqaf/>} />
            <Route path="/faqs" element={<Faqs/>} />
            <Route path="/sqaf-pillar-details/:sqaf_id" element={<SqafpillerDetails/>} />
            <Route path="/basic-information/:udise_id" element={<BasicInformation/>} />
            <Route path="/terms-condition" element={<TermsCondition/>} />
            <Route path="/privacy-policy" element={<Privacypolicy/>} />
            <Route path="/copyright_policy" element={<Copyrightpolicy/>} />
            <Route path="/hyperlink-policy" element={<Hyperlinkpolicy/>} />
            <Route path="/disclaimer" element={<Disclaimer/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            {/* <Route path="/gis" element={<Gis/>} /> */}  
            <Route path="/*" element={<Navigate to="/" />} />
            
        </Routes>
        <Footer />
    </Provider >
)