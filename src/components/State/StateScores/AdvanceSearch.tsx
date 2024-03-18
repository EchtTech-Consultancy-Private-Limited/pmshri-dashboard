import React from 'react';

const AdvanceSearch = (props: any) => {
    const { states, districtlist, blocklist } = props
    //console.log(blocklist.length);
    
    return (
        <section className="banner-wrap banner-bg banner-state ptb-30">
            <div className="container p-0">
                <div className="performance-card mtb-20">
                    <div className="advance-search-container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="advance-search ">
                                    <h2 className="heading-sm"> PM SHRI Schools Search </h2>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="advance-search-input">
                                    <select name="state" id="state">
                                        <option value="Select State" selected>Select State</option>
                                        {states?.length && states.map((stateName: any, index: number) => {
                                            return <option key={index} value={stateName.state_name.toLowerCase()}>{stateName.state_name}</option>
                                        })}
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="advance-search-input">
                                    <select name="district" id="district">
                                        <option value="Select District" selected>Select District</option>
                                        {districtlist?.length && districtlist.map((districtName: any, index: number) => {
                                            return <option key={index} value={districtName.name.toLowerCase()}>{districtName.name}</option>
                                        })}
                                    </select>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="advance-search-input">
                                    <select name="district" id="block">
                                        <option value="Select block">Select Block</option>
                                        {blocklist?.length && blocklist.map((blockName: any, index: number) => {
                                            return <option key={index} value={blockName.name.toLowerCase()}>{blockName.name}</option>
                                        })}
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="advance-search-button">
                                    <a className="btn blue-solid-btn s-btn know-more">dSearch</a>
                                </div>
                                <div className="advance-search-button reset ms-3">
                                    <a href="#" ><div className="btn-wrap"><div className="btn red-bdr-btn">Reset</div></div></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default AdvanceSearch;