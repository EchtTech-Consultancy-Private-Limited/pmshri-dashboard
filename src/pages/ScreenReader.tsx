import React from 'react'

const ScreenReader = () => {
  return (
    <section className="bg-grey ptb-60">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="heading-sm">Screen Reader Access</h2>
                    <p className="desc-black">
                        The Director General of Quality Assurance website complies with Guidelines for Indian Government Websites and World Wide Web Consortium (W3C) Web Content Accessibility Guidelines (WCAG) 2.0 level A. This will enable people with visual impairments access the website using technologies, such as screen readers. The information of the website is accessible with different screen readers, such as JAWS, NVDA, SAFA, Supernova and Window-Eyes.
                    </p>
                    <p className="desc-black">
                        Following table lists the information about different screen readers:
                    </p>
                    <p className="desc-black">
                        Information related to the various screen readers
                    </p>
                    <div className="screentable table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Screen Reader</th>
                                    <th scope="col">Website</th>
                                    <th scope="col">Free/Commercial</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Non Visual Desktop Access (NVDA)</td>
                                    <td><a href="http://www.nvda-project.org/">http://www.nvda-project.org/</a></td>
                                    <td>Free</td>
                                </tr>
                                <tr>
                                    <td>Window-Eyes</td>
                                    <td><a href="http://www.gwmicro.com/Window-Eyes">http://www.gwmicro.com/Window-Eyes</a></td>
                                    <td>Commercial</td>
                                </tr>   
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ScreenReader