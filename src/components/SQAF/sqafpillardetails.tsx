import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import { useDispatch, useSelector } from "react-redux";
import { InitialStateModel, StoreModel } from "src/models/dpgi";
import { getSQAFList } from "src/actions/dpgi.action";
import { getSQAFDetails } from "src/actions/dpgi.action";
import { useParams } from "react-router-dom";
import { GlobalLoading } from "../GlobalLoading";

export default function Sqafpillardetails() {
  const { sqaf_id } = useParams();
  const [show, setShow] = useState(false);
  const [sIndex, setSIndex] = useState(0);
  const [selectedValue, setSelectedValue] = useState(sIndex);
  const [sqafList, setSqafList] = useState([]);
  const [sqafID, setSqafID] = useState(sqaf_id);
  const [tabIndex, setTabIndex] = useState(0);
  const [viewIndex, setViewIndex] = useState(0);
  const initialSqafState = {
    id: 0,
    title: "",
    sqaf_subdomain: [{ sqaf_standards: [{sqaf_levels:[{sqaf_evidences:[]},{sqaf_guidelines:[{guideline:""}]},],name:''}] }],
  };
  const [sqafDetils, setSqafDetails] = useState(initialSqafState);

  const dispatch = useDispatch();
  const sqaf_list = useSelector<StoreModel>(
    (store) => store.sqafList
  ) as InitialStateModel;
  const data = useSelector<StoreModel>(
    (store) => store.sqafDetails
  ) as InitialStateModel;
  useEffect(() => {
    dispatch(getSQAFList());
  }, []);

  useEffect(() => {
    if (sqafID !== undefined) {
      dispatch(getSQAFDetails(sqafID));
    }
  }, [sqafID]);

  useEffect(() => {
    setSqafDetails(data.data.data);
    setSqafList(sqaf_list.data.data);
  }, [data]);

  const handleDropdownChange = (event: any) => {
    setSelectedValue(event.target.value);
  };
  const handleFilter = () => {
    setSIndex(selectedValue);
    setTabIndex(0);
  };
  const handleTableList = (e:any,id:any)=>{
    if (id !== undefined) {
        if(e.target.value==="" || e.target.value===null) {
            setSelectedValue(0);
            setTabIndex(0);
        }
        setSqafID(id);
      }
  }
  console.log(sqafID,' sqaf id')
  const handleClose = () => setShow(false);
  const handleShow = (idx:number) => {
    setViewIndex(idx);
    setShow(true);
  }
   
  return (
    <>

      <section
        className="banner-wrap banner-bg banner-state ptb-30 d-flex align-items-center"
        style={{ height: "160px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="heading-blue text-center text-white pb-0">
                {" "}
                {sqafDetils?.title}
              </h2>
            </div>
          </div>
        </div>
      </section>
    {data?.loading?<GlobalLoading/>:""}
    
      <section className="sqaf-details ptb-30 pt-4">
        <div className="container">
          <div className="school-container">
            <Accordion defaultActiveKey={sqaf_id?.toString()}>
              {sqaf_list?.data?.data?.map((item: any) => {
                return (
                  <>
                    <Accordion.Item eventKey={item.id.toString()} key={item.id} onClick={(e)=>handleTableList(e,item.id)}>
                      <Accordion.Header>{item?.title}</Accordion.Header>
                      <Accordion.Body>
                        <div className="row align-items-center">
                          <div className="col-md-3">
                            <h5 className="my-0">Select Sub Domain</h5>
                          </div>
                          <div className="col-md-5">
                            <div className="indicator-select mtb-15">
                              <label>Select</label>
                              <select
                                className="form-select"
                                value={selectedValue}
                                onChange={handleDropdownChange}
                              >
                                {sqafDetils?.sqaf_subdomain?.map(
                                  (item: any, idx: number) => {
                                    return (
                                      <option key={item.id} value={idx}>
                                        {item.name}
                                      </option>
                                    );
                                  }
                                )}
                              </select>
                            </div>
                          </div>
                          <div className="col-md-1">
                            <div className="btn-wrap">
                              <div
                                className="btn red-bdr-btn filter-btn readMorehome"
                                onClick={handleFilter}
                              >
                                Filter
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="box-border mt-3">
                              <div className="basic-information sqaf-details-tabs">
                                <div className="row pt-2">
                                  <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                                    <div className="row">
                                      <div className="col-md-3">
                                        <TabList>
                                          {sqafDetils?.sqaf_subdomain[
                                            sIndex
                                          ]?.sqaf_standards.map((item: any,idx:number) => {
                                            return (
                                              <>
                                                <Tab key={item.id}>
                                                  {item.name}
                                                </Tab>
                                              </>
                                            );
                                          })}
                                        </TabList>
                                      </div>
                                      <div className="col-md-9 pl-lg-0">
                                        {sqafDetils?.sqaf_subdomain[
                                          sIndex
                                        ]?.sqaf_standards.map((item: any) => {
                                          return (
                                            <>
                                              <TabPanel key={item.id}>
                                                <Table width="100%">
                                                  <thead>
                                                    <tr>
                                                      <th
                                                        colSpan={3}
                                                        className="text-center"
                                                      >
                                                        {item.name}
                                                      </th>
                                                    </tr>
                                                    <tr>
                                                      <th className="w-150">
                                                        {" "}
                                                        Level
                                                      </th>
                                                      <th> KPI</th>
                                                      <th className="btn-th-width d-none">
                                                        {" "}
                                                        Evidence
                                                      </th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    {item?.sqaf_levels?.map(
                                                      (level: any,idx:number) => {
                                                        return (
                                                          <tr key={level.id}>
                                                            <td>
                                                              {level.level}
                                                            </td>
                                                            <td>{level.kpi}</td>
                                                            <td className="d-none">
                                                              <div className="btn-wrap view-d">
                                                                <div
                                                                  className="btn-solid readMorehome"
                                                                  onClick={
                                                                    ()=>handleShow(idx)
                                                                  }
                                                                >
                                                                  View Details
                                                                </div>
                                                              </div>
                                                            </td>
                                                          </tr>
                                                        );
                                                      }
                                                    )}
                                                  </tbody>
                                                </Table>
                                              </TabPanel>
                                            </>
                                          );
                                        })}
                                      </div>
                                    </div>
                                  </Tabs>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </>
                );
              })}
            </Accordion>
          </div>

          {/* modal popup */}

          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title className="h6">
                {
                sqafDetils?.sqaf_subdomain[sIndex]?.sqaf_standards?.[tabIndex]?.name
                }
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Table width="100%" className="text-center mb-0">
                <thead>
                  <tr>
                    <th>
                      {" "}
                      Suggested Documents as evidence of Standards Achieved
                    </th>
                    <th> Guiding Principle</th>
                  </tr>
                </thead>
                <tbody>
               
                    {

                      sqafDetils?.sqaf_subdomain[sIndex]?.sqaf_standards[tabIndex]?.sqaf_levels[viewIndex].sqaf_evidences?.map((item:any,idx:number)=>{
                        
                        return(<>
                        <tr>
                          <td>
                             {item.evidence}
                          </td>
                          <td>
                          {sqafDetils?.sqaf_subdomain[sIndex]?.sqaf_standards[tabIndex]?.sqaf_levels[viewIndex]?.sqaf_guidelines?.[0]?.guideline??"N/A"}                           
                          </td>
                        </tr>
                        </>);
                      })
                    }
                  
                    
                    
                  
                  
                </tbody>
              </Table>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={handleClose}
                className="btn btn-danger"
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </section>
    </>
  );
}
