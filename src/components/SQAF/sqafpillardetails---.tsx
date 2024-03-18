import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { getSQAFDetails } from "src/actions/dpgi.action";

import { useDispatch, useSelector } from "react-redux";
import { InitialStateModel, StoreModel } from "src/models/dpgi";
import { GlobalLoading } from "../GlobalLoading";
import { useParams } from 'react-router-dom';
export default function Sqafpillardetails() {
  const {sqaf_id} = useParams();
  const [show, setShow] = useState(false);
  const [sIndex, setSIndex] = useState(0);
  const [selectedValue, setSelectedValue] = useState(sIndex);
  const [sqafID, setSqafID] = useState(sqaf_id);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const initialSqafState = {
    id: 0,
    title: "",
    sqaf_subdomain: [{ sqaf_standards: [] }],
  };
  const [sqafDetils, setSqafDetails] = useState(initialSqafState);
  const dispatch = useDispatch();
  const data = useSelector<StoreModel>(
    (store) => store.sqafDetails
  ) as InitialStateModel;

  useEffect(() => {
    if(sqafID!==undefined){
        dispatch(getSQAFDetails(sqafID));
    }
  }, [sqafID]);

  useEffect(() => {
    setSqafDetails(data.data.data);
  }, [data]);

  const handleDropdownChange = (event:any) => {
    setSelectedValue(event.target.value);
  };
  const handleFilter = ()=>{
    setSIndex(selectedValue);
  }
  return (
    <>
      {data.loading ? (
        <GlobalLoading />
      ) : (
        <>
          <section
            className="banner-wrap banner-bg banner-state ptb-30 d-flex align-items-center"
            style={{ height: "160px" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h2 className="heading-blue text-center text-white pb-0">
                    {sqafDetils?.title}
                  </h2>
                </div>
              </div>
            </div>
          </section>

          <section className="sqaf-details ptb-30 pt-4">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-2">
                  <h5 className="my-0">Select Sub Domain</h5>
                </div>
                <div className="col-md-5">
                  <div className="indicator-select mtb-15">
                    <label>Select</label>
                    <select className="form-select" value={selectedValue} onChange={handleDropdownChange}>
                      {sqafDetils?.sqaf_subdomain?.map((item: any,idx:number) => {
                        return <option key={item.id} value={idx}>{item.name}</option>;
                      })}
                    </select>
                  </div>
                </div>
                <div className="col-md-1">
                  <div className="btn-wrap">
                    <div className="btn red-bdr-btn filter-btn readMorehome" onClick={handleFilter}>
                      Filter
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="school-container box-border mt-4">
                    <div className="basic-information sqaf-details-tabs">
                      <div className="row pt-2">
                        <Tabs>
                          <TabList>
                            {sqafDetils?.sqaf_subdomain[
                              sIndex
                            ]?.sqaf_standards.map((item: any) => {
                              return (
                                <>
                                  <Tab key={item.id}>{item.name}</Tab>
                                </>
                              );
                            })}
                          </TabList>

                          {
                          sqafDetils?.sqaf_subdomain[sIndex]?.sqaf_standards.map((item: any) => {
                            return (
                              <>
                                <TabPanel key={item.id}>
                                  <Table width="100%">
                                    <thead>
                                      <tr>
                                        <th colSpan={3} className="text-center">
                                         {item.name}
                                        </th>
                                      </tr>
                                      <tr>
                                        <th className="w-150"> Level</th>
                                        <th> KPI</th>
                                        <th className="btn-th-width">
                                          {" "}
                                          Evidence
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            item?.sqaf_levels?.map((level:any)=>{
                                              return  <tr key={level.id}>
                                                <td>{level.level}</td>
                                                <td>
                                                  {level.kpi}
                                                </td>
                                                <td>
                                                  <div className="btn-wrap view-d">
                                                    <div
                                                      className="btn-solid readMorehome"
                                                      onClick={handleShow}
                                                    >
                                                      View Details
                                                    </div>
                                                  </div>
                                                </td>
                                              </tr>
                                            })
                                        }
                                    
                                    </tbody>
                                  </Table>
                                </TabPanel>
                              </>
                            );
                          })}
                        </Tabs>
                      </div>

                      <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                      >
                        <Modal.Header closeButton>
                          <Modal.Title className="h6">
                            An integrated annual curriculum and/or pedagogical
                            plan for each of the levels - foundational,
                            preparatory, middle and secondary has been shared
                            with the students/parents.
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <Table width="100%" className="text-center mb-0">
                            <thead>
                              <tr>
                                <th>
                                  {" "}
                                  Suggested Documents as evidence of Standards
                                  Achieved
                                </th>
                                <th> Guiding Principle</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  Minutes of meeting reviewing the Curricular
                                  and pedagogical plans for the year
                                </td>
                                <td>
                                  NEP 2020, NCF/SCF, NCERT Learning Outcomes,
                                  RTE Act, Circulars issued by SCERT/NCERT/NCTE
                                  concerned School Board’s, Teachers Manuals on
                                  Pedagogy developed by the Relevant School
                                  Board
                                </td>
                              </tr>
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
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}
