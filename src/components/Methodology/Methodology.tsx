import React from 'react';
import './Methodology.scss';
import 'bootstrap/dist/css/bootstrap.css';

function Methodology() {
  return (
    <>
      <section className="banner-wrap banner-bg banner-state ptb-30 d-flex align-items-center" style={{ height: "160px" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="desc-black  text-white pt-0 pb-1">Selection Through Challenge Method with </p>
              <h2 className="heading-blue  text-white pb-0"> Three Stage Process</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="aboutpgi ptb-30 pt-5" id="methodology">

        {/* <p className="desc-black text-center text-danger pb-0">Selection Through Challenge Method with </p>
        <h2 className="heading-blue text-center pb-4"> Three Stage Process</h2> */}
        <div className="container">
          <div className="blog-card bg-grey">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-4">
                  <div className="meta">
                    <div className="photo-b1">
                      <div className="number-card-box">
                        1
                      </div>
                      <h1 className='ms-4'>First Stage  
                      {/* <br />
                        <span className='desc-black'>States / UTs to sign MoU for implementing NEP 2020</span>
                      */}
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="description">
                    <p> 
                      States/UTs would sign MoU with Centre laying down the commitments for
                      supporting these schools for achieving specified quality assurance as PM SHRI
                      schools. A standard MoU is placed at Annexure-A
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="blog-card bg-white">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-8">
                  <div className="description">
                    <p> 
                        A pool of schools that are eligible to be selected as PM SHRI Schools would
                        be identified based on prescribed minimum benchmark through UDISE+ data.
                    </p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="meta">
                    <div className="photo-b1">
                      <h1 className='float-right'>Second Stage  
                      {/* <br />
                        <span className='desc-black'>States / UTs to sign MoU for implementing NEP 2020</span>
                     */}
                      </h1>
                      <div className="number-card-box">
                        2
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="blog-card bg-grey">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-4">
                  <div className="meta">
                    <div className="photo-b1">
                      <div className="number-card-box">
                        3
                      </div>
                      <h1 className='ms-4'>Third Stage  
                      {/* <br />
                        <span className='desc-black'>States / UTs to sign MoU for implementing NEP 2020</span>
                      */}
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="description">
                    <p> 
                        Only the schools from the above eligible pool of schools would compete
                        based on the challenge method for fulfilling certain criteria. Fulfilment of conditions
                        would be certified by States/UTs/KVS/NVS through physical inspection.
                    </p>
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

export default Methodology