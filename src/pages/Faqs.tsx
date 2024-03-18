import { useEffect } from 'react';
import './faqs.css';
import { getFaqsList } from 'src/actions/dpgi.action';
import { useDispatch, useSelector } from 'react-redux';
import { InitialStateModel, StoreModel } from 'src/models/dpgi';
const HtmlToReactParser = require('html-to-react').Parser;

//import banner from "src/assets/banners/faq-banner.jpg";

export default function Sqaf() {
    
    const dispatch = useDispatch();
    const data = useSelector<StoreModel>(store => store.faqsList) as InitialStateModel

    useEffect(() => {
        dispatch(getFaqsList());
    },[]);

    const htmlToReact = (text:any) =>{
        const htmlToReactParser = new HtmlToReactParser();
        return htmlToReactParser.parse(text);
    }

    return (
        <div id="wraper">
            <section className="banner-wrap banner-bg banner-faq  ptb-30 d-flex align-items-center" style={{ height: "160px" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        <p className="desc-black  text-white pt-0 pb-1">Frequently Asked Questions</p>
                            <h2 className="heading-blue  text-white pb-0"> FAQs</h2>
                        </div>
                    </div>
                </div>
            </section>
            <div id="content">
                <div className="w-100 d-flex faq-sec1">
                    <div className="container">
                      
                        <div className="accordion" id="accordionExample">
                            {
                                data?.data?.data?.map((item: any, i: String) => {
                                    return (
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id={`heading${i}`}>
                                                <button className={`accordion-button ${(+i === 0) ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${i}`} aria-expanded={`${(+i === 0) ? 'true' : 'false'}`} aria-controls={`collapse${i}`}>
                                                    {((+i)+1)}. {item.faq_title}
                                                </button>
                                            </h2>
                                            <div id={`collapse${i}`} className={`accordion-collapse collapse ${(+i === 0) ? 'show' : ''} `} aria-labelledby={`heading${i}`} data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    {htmlToReact(item.faq_details)}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}