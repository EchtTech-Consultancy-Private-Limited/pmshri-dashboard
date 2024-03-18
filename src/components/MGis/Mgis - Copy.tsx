import React, { useEffect, useState } from "react";
import Map from "@arcgis/core/Map.js";
import MapView from "@arcgis/core/views/MapView.js";
import MapImageLayer from "@arcgis/core/layers/MapImageLayer.js";
import Query from "@arcgis/core/rest/support/Query.js";
import * as query from "@arcgis/core/rest/query.js";
import $ from "jquery";
import Graphic from "@arcgis/core/Graphic.js";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer.js";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer.js";
import Basemap from "@arcgis/core/Basemap.js";
import * as geometryEngine from "@arcgis/core/geometry/geometryEngine.js";
import Circle from "@arcgis/core/geometry/Circle.js";


let markerGraphic;
const Mgis = () => {

  var esriAttribution = document.querySelector('.esri-attribution__powered-by');
  if (esriAttribution) {
    esriAttribution.innerHTML = "Powered by Bharatmaps";
  }

  const [schData, setSchData] = useState({
        "udise_sch_code": null,
        "school_name": null,
        "schoolstatus_name": null,
        "category_name": null,
        "total_boys": null,
        "total_girls": null
    });
  const [isDivVisible, setDivVisibility] = useState(false);

  const handleCloseClick = () => {
    setDivVisibility(!isDivVisible);
  };

  const countHandler = (data:any) => {
    $('#govtSch').text(data.totalpmshriSschool)
    $('#kvsSch').text(data.totalKVSschool)
    $('#nvsSch').text(data.totalnvsschool)
    //document.getElementById('govtSch').innerHTML =   " " + data.totalpmshriSschool;
    // document.getElementById("kvsSch").innerHTML  =   " " + data.totalKVSschool;
    // document.getElementById("nvsSch").innerHTML  =   " " + data.totalnvsschool;
  };


  useEffect(() => {    
      fetch("https://pmshri.education.gov.in/apipmshridashboard/api/v1/getstatewisedata/filterwisedata?sid=0&did=0&bid=0")
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            countHandler(data)
          }
        })
        .catch((error) => {
          console.error(error);
        });
  });


  useEffect(() => {
    const MapObject = {
      basemap: "topo-vector",
      logo: false,
    }
    const map = new Map(MapObject);

    const view = new MapView({
      container: "viewDiv",
      map: map,
      zoom: 4,
      center: [78.9625, 22.5937],
    });

    const admin_url   = "https://grammanchitragis.nic.in/grammanchitra/rest/services/panchayat/panchayat_admin/MapServer";;
    //const admin_url   = "https://mapservice.gov.in/gismapservice/rest/services/BharatMapService/Admin_Boundary_Village/MapServer";
    //const admin_token = "AYoPi0yUpPCJsWAW5QDg0MlwPGttOsIYld_Sf386ieEjWVoqwMEDO-ZlzXXlh4-Xi-c8EEvFcEE1z0WY8vRt6c4JzIAOIpY7mzY94OQFPYY.";
    const admin_token = "AYoPi0yUpPCJsWAW5QDg0ErJ0ibsTenyynRDz8ZH4YXdnosgL0K_HXPjufNI4khlVrnhPGMHZ2TH7Zt5nydOjA..";
    const title       = "Boundary Village";

    const MapImageLayerObject  = {
      url: admin_url,
      //apiKey: admin_token,
      //title: title,
      opacity: 0.8,
    }

    let allIndiaLayer = new MapImageLayer(MapImageLayerObject);


    view.map.addMany([allIndiaLayer]);


    const sch_url = "https://webgis.nic.in/publishing/rest/services/misc/pmshree/MapServer/0";
    const adminFeatureLayer1 = new FeatureLayer({
      url: sch_url,
      outFields: ["*"],
    });
    view.map.add(adminFeatureLayer1);
    // adminFeatureLayer1.visible = true;

    view.whenLayerView(allIndiaLayer).then(function () {
      const params = new Query({
        returnGeometry: false,
        outFields: ["STNAME,State_LGD"],
        where: "1=1",
      });
      query
        .executeQueryJSON(admin_url + "/0?token=" , params)
        //.executeQueryJSON(admin_url + "/0?token=" + admin_token, params)
        .then(getStateResults)
        .catch();
    });

    function getStateResults(response:any) {
      var stateFeatures = response.features;
      var optionsArray = [];
      for (var i = 0; i < stateFeatures.length; i++) {
        optionsArray.push({
          value: stateFeatures[i].attributes["State_LGD"],
          label: stateFeatures[i].attributes["STNAME"],
        });
      }

      optionsArray.sort(function (a, b) {
        var labelA = a.label.toUpperCase();
        var labelB = b.label.toUpperCase();
        return labelA.localeCompare(labelB);
      });

      var curDropOptionsHTML = "<option value='-1'>Select All State</option> ";
      for (var k = 0; k < optionsArray.length; k++) {
        curDropOptionsHTML +=
          "<option value='" +
          optionsArray[k].value +
          "'>" +
          optionsArray[k].label +
          "</option>";
      }

      $("#statedd").html(curDropOptionsHTML);
      $('#loader_id').addClass('d-none');
    }

    view.on("click", function (event) {
      view.graphics.removeAll();
      view.hitTest(event).then(function (response) {
        if (response.results.length) {
          var graphics:any = response.results.filter(function (result:any) {
            return result.graphic.layer === adminFeatureLayer1;
          });

          if (graphics.length > 0) {
            setDivVisibility(true);
            var graphic = graphics[0].graphic;
            var attributes = graphic.attributes.udise_1;
            if (attributes === undefined) {
              alert(" Unable to fetch data.");
              return;
            }

            fetch(
              `https://pmshri.education.gov.in/apipmshridashboard/api/v1/school/details/${attributes}`,
              {
                mode: "cors",
                headers: {
                  "Access-Control-Allow-Origin": "*",
                },
              }
            )
              .then((response) => response.json())
              .then((data) => {
                if (data) {

                  // var result:any;
                  // result.push([data.data])
                 
                  setSchData(data.data);

                  var point = graphic.geometry;
                  var markerSymbol = {
                    type: "simple-marker",
                    color: [66, 78, 245], // Red color
                    outline: {
                      color: [255, 255, 255], // White color
                      width: 1,
                    },
                    size: 10,
                  };

                  markerGraphic = new Graphic({
                    geometry: point,
                    symbol: markerSymbol,
                  });

                  view.graphics.add(markerGraphic);
                }
              })
              .catch((error) => {
                console.error(error);
              });
          }
        }
      });
    });


    var boundaryHighLightGraphicLayer = new GraphicsLayer();
    boundaryHighLightGraphicLayer.title = "BoundaryHighlight";
    view.map.add(boundaryHighLightGraphicLayer);
    var maskCircleGraphicLayer = new GraphicsLayer();
    maskCircleGraphicLayer.title = "maskGraphic";
    view.map.add(maskCircleGraphicLayer);

    const basemaps = [
      {
        id: "topo-vector",
        title: "topo-vector",
        thumbnailUrl: "basemap-images/topo.png",
      },
      {
        id: "satellite",
        title: "Basemap",
        thumbnailUrl: "basemap-images/satellite.png",
      },
      {
        id: "terrain",
        title: " Esri terrain",
        thumbnailUrl: "basemap-images/street.png",
      },
      {
        id: "streets-vector",
        title: "ESRI Street",
        thumbnailUrl: "basemap-images/topo.png",
      },
    ];
    function switchBasemap(basemapId:any) {
      const selectedBasemap = basemaps.find(
        (basemap) => basemap.id === basemapId
      );
      if (selectedBasemap) {
        view.map.basemap = Basemap.fromId(basemapId);
      } else {
        console.error("Basemap not found");
      }
    }

    const basemapSelector = document.createElement("div");
    basemapSelector.className = "basemap-selector";
    basemapSelector.style.backgroundColor = "white";
    basemaps.forEach((basemap) => {
      const button = document.createElement("button");
      button.textContent = basemap.title;
      button.addEventListener("click", () => {
        switchBasemap(basemap.id);
      });
      button.style.backgroundImage = `url(${basemap.thumbnailUrl})`;
      button.className = "basemap-button";
      basemapSelector.appendChild(button);
    });

    function toggleBasemapSelector() {
      const currentDisplayStyle = basemapSelector.style.display;
      basemapSelector.style.display =
        currentDisplayStyle === "none" ? "block" : "none";
    }

    const displayImage = document.createElement("img");
    displayImage.src = "basemapx.png";
    displayImage.alt = "Show Basemaps";
    displayImage.addEventListener("click", toggleBasemapSelector);

    view.ui.add(displayImage, "top-right");
    view.ui.add(basemapSelector, "top-right");

    $("#zoomfullext").on("click",function () {
      boundaryHighLightGraphicLayer.graphics.removeAll();
      allIndiaLayer.when(function () {
        view.goTo(allIndiaLayer.fullExtent);
      });
      $("#statedd").val("-1");
      $("#distdd").empty().html("<option value='-1'>Select District</option>");
      fetch("https://pmshri.education.gov.in/apipmshridashboard/api/v1/getstatewisedata/filterwisedata?sid=0&did=0&bid=0")
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setTimeout(() => {
            countHandler(data)
          // document.getElementById("govtSch").innerHTML = " " + data.totalpmshriSschool;
          // document.getElementById("kvsSch").innerHTML = " " + data.totalKVSschool;
          // document.getElementById("nvsSch").innerHTML = " " + data.totalnvsschool;
        }, 500);
        }
        
      })
      .catch((error) => {
        console.error(error);
      });
    });
 
 
    $("#zoomprev").on("click",function () {
      var currentZoom = view.zoom;
      view.goTo({
        zoom: currentZoom - 1
      });
    });

    $("#zoomnext").on("click",function () {
      var currentZoom = view.zoom;
      view.goTo({
        zoom: currentZoom + 1
      });
    });

    $("#btnPrint").on("click",function () {
      // alternatePrint();
      window.print();
    });

    /*
    $("#zoomfullext").on("click", function () {
      allIndiaLayer.when(function () {
        view.goTo(allIndiaLayer.fullExtent);

      });
    });


    $("#zoomprev").on("click", function () {
      var currentZoom = view.zoom;
      view.goTo({
        zoom: currentZoom - 1
      });
    });

    $("#zoomnext").on("click", function () {
      var currentZoom = view.zoom;
      view.goTo({
        zoom: currentZoom + 1
      });
    });

    $("#btnPrint").on("click", function () {
      // alternatePrint();
      window.print();
    });
    */



    var curStateCode : any;
    $("#statedd").on("change", function () {
      view.graphics.removeAll();
      boundaryHighLightGraphicLayer.graphics.removeAll();
      var curStateLGD = $(this).val();
      curStateCode = Number(curStateLGD);
      // adminFeatureLayer1.visible = true;
      // adminFeatureLayer.visible = false;
      fetch(
        `https://pmshri.education.gov.in/apipmshridashboard/api/v1/getstatewisedata/filterwisedata?sid=${curStateCode}&did=&bid=0`,
        {
          mode: "cors",
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            countHandler(data)
          }
        })
        .catch((error) => {
          console.error(error);
        });

      if (curStateLGD === "-1") {
        resetFilters();
        return;
      }
      $('#loader_id').removeClass('d-none');
      const params = new Query({
        returnGeometry: true,
        outFields: ["STNAME"],
        where: "State_LGD=" + curStateLGD,
      });
      query
        .executeQueryJSON(admin_url + "/0?token=" , params)
        //.executeQueryJSON(admin_url + "/0?token=" + admin_token, params)
        .then(function (response) {
          zoom(response);

          var params = new Query({
            returnGeometry: false,
            outFields: ["dist_lgd ,dtname"],
            where: "State_LGD=" + curStateLGD,
          });

          query
            .executeQueryJSON(admin_url + "/0?token=" , params)
            //.executeQueryJSON(admin_url + "/1?token=" + admin_token, params)
            .then(getDistrictResults)
            .catch();
        });
    }
    );
    function getDistrictResults(response:any) {
      var districtFeatures = response.features;
      districtFeatures.sort(function (a:any, b:any) {
        var nameA = a.attributes["dtname"].toUpperCase();
        var nameB = b.attributes["dtname"].toUpperCase(); // ignore case
        return nameA.localeCompare(nameB);
      });
      var curDropOptionsHTML = "<option value='-1'>Select  District</option>";
      $("#subdd").empty().html("<option value='-1'>Select Block</option>");
      for (var i = 0; i < districtFeatures.length; i++) {
        curDropOptionsHTML +=
          "<option value='" +
          districtFeatures[i].attributes["dist_lgd"] +
          "'>" +
          districtFeatures[i].attributes["dtname"] +
          "</option>";
      }
      $("#distdd").html(curDropOptionsHTML);
      $('#loader_id').addClass('d-none');
    }
    var curDistCode;

    $("#distdd").on("change", function () {
      boundaryHighLightGraphicLayer.graphics.removeAll();
      var curDistLGD = $(this).val();
      curDistCode = curDistLGD;

      if(curDistLGD === '-1'){
        //$("#statedd").click();
        $("#statedd").change();
        return;
      };
      
      fetch(

        `https://pmshri.education.gov.in/apipmshridashboard/api/v1/getstatewisedata/filterwisedata?sid=${curStateCode}&did=${curDistCode}&bid=0`,
        {
          mode: "cors",
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            countHandler(data)
          }
        })
        .catch((error) => {
          console.error(error);
        });

      $('#loader_id').removeClass('d-none');
      const dparams = new Query({
        returnGeometry: true,
        outFields: ["dist_lgd ,dtname"],
        where: "Dist_LGD=" + curDistLGD,
      });

      query
        .executeQueryJSON(admin_url + "/1?token=", dparams)
        //.executeQueryJSON(admin_url + "/1?token=" + admin_token, dparams)
        .then(function (response) {
          zoom(response);

          $('#loader_id').addClass('d-none');
        });


    }
    );



    function zoom(fs:any) {
      boundaryHighLightGraphicLayer.graphics.removeAll();
      if (fs && fs.features && fs.features.length > 0) {
        var current_geometry = fs.features[0].geometry;
        let simpleLineSymbol = {
          type: "simple-line",
          color: "blue",
          width: "3px"
        };

        let highLightGraphics = new Graphic({
          geometry: current_geometry,
          symbol: simpleLineSymbol,
        });

        boundaryHighLightGraphicLayer.add(highLightGraphics);
        var curGeomExtent = fs.features[0].geometry.extent;
        view.extent = curGeomExtent.expand(1.5);

      }
    }
    function convertNumberIntoIndianFormat(x:any) {
      if (x != null) {
        if (x > 0) {
          x = x.toString();
          var lastThree = x.substring(x.length - 3);
          var otherNumbers = x.substring(0, x.length - 3);
          if (otherNumbers != '')
            lastThree = ',' + lastThree;
          var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
          return res;
        } else {
          if (x == 0) {
            return "0";
          } else {
            x = x * (-1);
            x = x.toString();
            var lastThree = x.substring(x.length - 3);
            var otherNumbers = x.substring(0, x.length - 3);
            if (otherNumbers != '')
              lastThree = ',' + lastThree;
            var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;

            return '-' + res;
          }
        }
      } else {
        return "0";
      }
    }

    view.watch('scale', function (e) {
      var curScale = view.scale;
      curScale = Math.round(curScale);
      var curScaleWithComma = convertNumberIntoIndianFormat(curScale);
      $("#scaleId").html("scale " + curScaleWithComma);

    
    });
    /*
    function convertNumberIntoIndianFormat(x:any) {
      if (x != null) {
        if (x > 0) {
          x = x.toString();
          var lastThree = x.substring(x.length - 3);
          var otherNumbers = x.substring(0, x.length - 3);
          if (otherNumbers != '')
            lastThree = ',' + lastThree;
          var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
          return res;
        } else {
          if (x == 0) {
            return "0";
          } else {
            x = x * (-1);
            x = x.toString();
            var lastThree = x.substring(x.length - 3);
            var otherNumbers = x.substring(0, x.length - 3);
            if (otherNumbers != '')
              lastThree = ',' + lastThree;
            var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;

            return '-' + res;
          }
        }
      } else {
        return "0";
      }
    }

    view.watch('scale', function (e) {
      var curScale = view.scale;
      curScale = Math.round(curScale);
      var curScaleWithComma = convertNumberIntoIndianFormat(curScale);
      $("#scaleId").html("scale " + curScaleWithComma);

      // if (curScale > 9028) {
      //   $(".boxScale").html("Scale : " + curScaleWithComma);

      // }

    });
    */

    function resetFilters() {
      $("#statedd").val("-1");
      $("#distdd").empty().html("<option value='-1'>Select District</option>");
      $("#subdd").empty().html("<option value='-1'>Select Block</option>");
      boundaryHighLightGraphicLayer.graphics.removeAll();
      maskCircleGraphicLayer.graphics.removeAll();
      allIndiaLayer.when(function () {
        view.goTo(allIndiaLayer.fullExtent);
      });
      // adminFeatureLayer1.visible = false;
      // adminFeatureLayer.visible = true;
      fetch("https://pmshri.education.gov.in/apipmshridashboard/api/v1/getstatewisedata/filterwisedata?sid=0&did=0&bid=0")
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            countHandler(data)
            // setTimeout(() => {
            //  // props.counterHandler({govtSch:data.totalpmshriSschool,kvsSch:data.totalKVSschool,nvsSch:data.totalnvsschool})
            //   document.getElementById("govtSch").innerHTML = " " + data.totalpmshriSschool;
            //   document.getElementById("kvsSch").innerHTML = " " + data.totalKVSschool;
            //   document.getElementById("nvsSch").innerHTML = " " + data.totalnvsschool;
            // }, 500);
          }

        })
        .catch((error) => {
          console.error(error);
        });
    }

  }, []);

  return (
    <div className="App">

      {/* <SchoolTable schoolCounts={schoolCounts} /> */}
      <div id="mapprint">
        <div id="viewDiv" style={{ width: "100%", height: "60vh" }}>

          <div className="spinner-bg d-none" id="loader_id">
            <div id="loading-bar-spinner" className="spinner">
              <div className="spinner-icon"></div>
            </div>
          </div>
          <div id="scaleId" style={{
            position: "absolute",
            right: "86px",
            bottom: "20px", background: "white"
          }}></div>
          <div className="sch_table" style={{ width: "320px" }}>
            {isDivVisible && (
              <>


                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "8px",
                    background: "#443c78",
                    color: "#fff",
                    height: "37px",
                  }}
                >
                  <h5 style={{ 'margin': "17px", 'textAlign': "center", 'fontSize': "18px", 'fontFamily': "auto" }}>School Data</h5>
                  <button className="closeButton" onClick={handleCloseClick}>
                    X
                  </button>
                </div>

                <div
                  className="table-responsive shadow bg-body rounded"
                  style={{ width: "100%", 'maxHeight': "250px" }}
                >
                  <table className="table mx-0 mt-1">
                    <tbody>
                      {   
                        (schData !== null && schData !== undefined) &&
                        //schData.map((school:any, index) => (
                          <React.Fragment key={5}>
                            <tr>
                              <td style={{ fontSize: "13px" }}>
                                School Name
                              </td>
                              <td style={{ fontSize: "13px" }}>{schData.school_name}</td>
                            </tr>
                            <tr>
                              <td style={{ fontSize: "13px" }}>
                                School Code
                              </td>
                              <td style={{ fontSize: "13px" }}>{schData.udise_sch_code}</td>
                            </tr>

                            <tr>
                              <td style={{ fontSize: "13px" }}>
                                Category Name
                              </td>
                              <td style={{ fontSize: "13px" }}>{schData.category_name}</td>
                            </tr>
                            <tr>
                              <td style={{ fontSize: "13px" }}>
                                School Status
                              </td>
                              <td style={{ fontSize: "13px" }}>{schData.schoolstatus_name}</td>
                            </tr>
                            <tr>
                              <td style={{ fontSize: "13px" }}>
                                Total Boys
                              </td>
                              <td style={{ fontSize: "13px" }}>{schData.total_boys}</td>
                            </tr>
                            <tr>
                              <td style={{ fontSize: "13px" }}>
                                Total Girls
                              </td>
                              <td style={{ fontSize: "13px" }}>{schData.total_girls}</td>
                            </tr>

                            <img src="basemap-images/forward.png" alt="ZoomIn" />
                          </React.Fragment>
                        //))
                      }
                    </tbody>
                  </table>
                </div>
              </>
            )}

          </div>

        </div>
      </div>
    </div>
  );
};

export default Mgis;
