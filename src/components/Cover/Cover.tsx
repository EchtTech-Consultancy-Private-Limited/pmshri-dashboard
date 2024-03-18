import React from 'react';
import './Cover.scss';
import ellipse from 'src/assets/images/ellipse.svg';
import logo from 'src/assets/images/pgi-logo.svg';
import indiaMap from 'src/assets/images/india-map.svg';
import coverPC from 'src/assets/images/coverPC.svg';

const Cover = () => {

  const goToDPGI = (page: string) => {
    if (page === 'district') {
      window.open("/dpgi", "_blank")
    }
    else {
      window.open("https://pgi.udiseplus.gov.in", "_blank")
    }
  }
  return (
    <section className="cover ptb-60">
      <div className="container">
        <img src={indiaMap} alt="img" className="img-fluid map-img" />
        <img src={coverPC} alt="img" className="img-fluid pc-img" />
        <div className="row align-items-center">
          <div className="col-md-4 zindex-1">
            <div className="cover-content">
              <div className="left-bg text-end">
                <div className="btn-wrap">
                  <a onClick={() => goToDPGI('state')} className="btn">
                    <span className="btn-red">State PGI</span>
                    <div className="btn-icon">
                      <span className="material-icons-round">
                        navigate_next
                      </span>
                      <span className="material-icons-round">
                        navigate_next
                      </span>
                      <span className="material-icons-round">
                        navigate_next
                      </span>
                    </div>
                  </a>
                </div>
                <p className="desc-black">
                  The PGI-State provides considerations on the status of the school education in States & UT’s including key levers that drive performance and key areas of improvement. PGI State propels States and UTs towards undertaking multi-pronged interventions that will bring about the much- desired optimal education outcomes that is based upon five categories namely Learning Outcomes & Quality, Access, Infrastructure & Facilities, Equity, Governance Processes.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="ellipse-wrap">
              <img src={ellipse} alt="img" className="img-fluid" />
              <div className="ellipse-content">
                <img src={logo} alt="logo" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="col-md-4 zindex-1">
            <div className="cover-content">
              <div className="right-bg text-start">
                <div className="btn-wrap">
                  <a onClick={() => goToDPGI('district')} className="btn">
                    <span className="btn-blue">District PGI</span>
                    <div className="btn-icon">
                      <span className="material-icons-round">
                        navigate_next
                      </span>
                      <span className="material-icons-round">
                        navigate_next
                      </span>
                      <span className="material-icons-round">
                        navigate_next
                      </span>
                    </div>
                  </a>
                </div>
                <p className="desc-black">
                  The PGI-District is envisaged & developed after the triumph of PGI State with focused objective of assessing districts in six categories namely Outcomes, Effective Classroom  Transaction (ECT), Infrastructure, Facilities, Student Entitlements (IF & SE), School Safety and Child Protection (SS &CP), Digital Learning (DL) and Governance Processes  (GP) which are further expanded into 12 domains.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="copyright-text">
              <p>
                © Copyright 2022 Department of School Education & Literacy, Ministry of Education
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cover