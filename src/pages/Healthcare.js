// This page is named "Healthcare" and it's main functionality is to show the healthcare services available for pharmacies, eldercare services, and clinicss on a map 
// The page also renders the 5 nearest services to the user's location based on each filter: pharmacies, eldercare services, and clinics
// This page serves as a means for elderly to easily find healthcare services in Singapore, while also being aware of those that are near them.

import Header from "../components/Header";
import Coronavirus from "../assets/icons/Coronavirus.png";
import Pharmacy from "../assets/icons/Hospital 3.png";
import Elderly from "../assets/icons/Grandfather.svg";
import Boxes from "../components/Boxes";
import GMaps from "../components/GMaps";
import React, {useEffect} from "react";
import Footer from "../components/Footer";
import { eldercareServices } from "../assets/geoJSON/eldercareServices";
import { pharmacy } from "../assets/geoJSON/pharmacy";
import { clinic } from "../assets/geoJSON/clinics";
import { Link } from "react-router-dom";
import axios from 'axios';
import {useActivityLocation, useActivityLocationUpdate, ActivityLocationProvider} from "../ActivityLocationContext"


function Healthcare() {
  // URLs for KML files containing locations of pharmacies, eldercare services, and clinics in Singapore
  const url1 = 'https://storage.googleapis.com/swe-silverfun-app.appspot.com/retail-pharmacy-locations-kml.kml';
  const url2 = 'https://storage.googleapis.com/swe-silverfun-app.appspot.com/ELDERCARE.kml';
  const url3 = 'https://storage.googleapis.com/swe-silverfun-app.appspot.com/AED_Locations.kml';

   // States for toggling markers for pharmacies, eldercare services, and clinics
  const [state1, setState1] = React.useState(false);
  const [state2, setState2] = React.useState(false);
  const [state3, setState3] = React.useState(false);

  // State for search filter input
  const [filter, setFilter] = React.useState("eldercare");

  // States for loading and rendering the map
  const [isLoading, setLoading] = React.useState(true);
  const [isRendering, setRendering] = React.useState(true);

  // States for displaying nearest pharmacies, eldercare services, and clinics around the user's location
  const [topEldercare, setTopEldercare] = React.useState(null);
  const [topPharmacies, setTopPharmacy] = React.useState(null);
  const [topClinics, setTopClinics] = React.useState(null);

  const [fetched, setFetched] = React.useState(false) // TEST!!!!!!!!!!!

  // State for displaying loading options while map is loading
  const loadingOptions = ([
  ["loading", "loading", "loading"],
  ["loading", "loading", "loading"],
  ["loading", "loading", "loading"],
  ["loading", "loading", "loading"],
  ["loading", "loading", "loading"], "loading"])

  // State for displaying the nearest activities to the users based on their search filter applied
  // Default value is loadingOptions
  const [display, setDisplay] = React.useState(loadingOptions);

  // State variable that holds the coordinates of a location that the user has selected
  const inputfields = useActivityLocation();

  // A state variable that holds a boolean value indicating whether the user has clicked on the location input field or not.
  // Default value is false
  const [inputClick, setInputClick] = React.useState(false)

  // useEffect hook to log the inputfields value whenever it changes
  useEffect(() => {
    console.log("inputfields", inputfields)
  }, [inputfields]);


  // eldercare
  // Blob object that holds the data for a GeoJSON file for eldercare services locations.
  const eldercareData = new Blob([JSON.stringify(eldercareServices, null, 2)], {
    type: "application/json",
  });
  
  // FormData object that holds the eldercare services GeoJSON data and the latitude and longitude coordinates of the selected location
  const eldercareform = new FormData();
  eldercareform.append("data", eldercareData, "eldercare-geojson.geojson");
  eldercareform.append("lat", String(inputfields.lat));
  eldercareform.append("lng", String(inputfields.lng));

   // specifies the HTTP POST request method and body data for the eldercare services data upload
  const eldercareoptions = {
    method: "POST",
    body: eldercareform,
  }


  // pharmacy
  // Blob object that holds the data for a GeoJSON file for pharmacy locations.
  const pharmacyData = new Blob([JSON.stringify(pharmacy, null, 2)], {
    type: "application/json",
  });
  
  // FormData object that holds the pharmacy GeoJSON data and the latitude and longitude coordinates of the selected location
  const pharmacyform = new FormData();
  pharmacyform.append("data", pharmacyData, "pharmacy-geojson.geojson");
  pharmacyform.append("lat", String(inputfields.lat));
  pharmacyform.append("lng", String(inputfields.lng));

   // specifies the HTTP POST request method and body data for the pharmacy data upload
  const pharmacyoptions = {
    method: "POST",
    body: pharmacyform,
  }


  // clinics
  // Blob object that holds the data for a GeoJSON file for clinic locations.
  const clinicData = new Blob([JSON.stringify(clinic, null, 2)], {
    type: "application/json",
  });
  
  // FormData object that holds the clinic GeoJSON data and the latitude and longitude coordinates of the selected location
  const clinicform = new FormData();
  clinicform.append("data", clinicData, "clinics-geojson.geojson");
  clinicform.append("lat", String(inputfields.lat));
  clinicform.append("lng", String(inputfields.lng));

   // specifies the HTTP POST request method and body data for the clinic data upload
  const clinicoptions = {
    method: "POST",
    body: clinicform,
  }

  
  // eldercare services
  // useEffect hook to make an HTTP POST request to a specified URL when the inputfields state changes
  useEffect(() => {
    console.log("eldercareForm", eldercareform)
    console.log('POST REQ FOR ELDERCAREFORM-----')
    axios.post("https://silverfun-backend.limsui.repl.co", eldercareform, eldercareoptions)
      .then(response => {
        // If the request is successful, the response data is used to set the topEldercare state
        // which is an array of arrays containing information about the top 5 nearest eldercare services in the specified location, an elderly icon and "eldercare"
        console.log('PROMISE FULFILLED------')
        console.log("eldercare services");
        console.log(response.data);
        setTopEldercare(
          [[response.data[0].properties.Name, response.data[0].properties.ADDRESSBLOCKHOUSENUMBER + " "+ response.data[0].properties.ADDRESSSTREETNAME + " Singapore " + response.data[0].properties.ADDRESSPOSTALCODE, response.data[0].properties.HYPERLINK, response.data[0].properties.PHOTOURL],
          [response.data[1].properties.Name, response.data[1].properties.ADDRESSBLOCKHOUSENUMBER + " "+ response.data[1].properties.ADDRESSSTREETNAME + " Singapore " + response.data[1].properties.ADDRESSPOSTALCODE, response.data[1].properties.HYPERLINK, response.data[1].properties.PHOTOURL],
          [response.data[2].properties.Name, response.data[2].properties.ADDRESSBLOCKHOUSENUMBER + " "+ response.data[2].properties.ADDRESSSTREETNAME + " Singapore " + response.data[2].properties.ADDRESSPOSTALCODE, response.data[2].properties.HYPERLINK, response.data[2].properties.PHOTOURL],
          [response.data[3].properties.Name, response.data[3].properties.ADDRESSBLOCKHOUSENUMBER + " "+ response.data[3].properties.ADDRESSSTREETNAME + " Singapore " + response.data[3].properties.ADDRESSPOSTALCODE, response.data[3].properties.HYPERLINK, response.data[3].properties.PHOTOURL],
          [response.data[4].properties.Name, response.data[4].properties.ADDRESSBLOCKHOUSENUMBER + " "+ response.data[4].properties.ADDRESSSTREETNAME + " Singapore " + response.data[4].properties.ADDRESSPOSTALCODE, response.data[4].properties.HYPERLINK, response.data[4].properties.PHOTOURL], Elderly, "eldercare"])
        console.log(topEldercare);
        console.log(display);
        setLoading(false)
        setFetched(true)
      })
      .catch(error => {
        // If the request fails, an error is logged to the console.
        console.log(error);
      });
  }, [inputfields]) // specify the dependency array to only run the effect when the inputfields changes

  // pharmacy
  // useEffect hook to make an HTTP POST request to a specified URL when the inputfields state changes
  useEffect(() => {
    console.log("pharmacyForm", pharmacyform)
    axios.post("https://silverfun-backend.limsui.repl.co", pharmacyform, pharmacyoptions)
      .then(response => {
        // If the request is successful, the response data is used to set the topPharmacy state
        // which is an array of arrays containing information about the top 5 nearest pharmacies in the specified location, a pharmacy icon and "pharmacy"
        console.log("pharmacy");
        console.log(response.data);
        setTopPharmacy(
          [[response.data[0].properties.Name, response.data[0].properties.ADDRESSBLOCKHOUSENUMBER + " "+ response.data[0].properties.ADDRESSSTREETNAME + " Singapore " + response.data[0].properties.ADDRESSPOSTALCODE, response.data[0].properties.HYPERLINK, response.data[0].properties.PHOTOURL],
          [response.data[1].properties.Name, response.data[1].properties.ADDRESSBLOCKHOUSENUMBER + " "+ response.data[1].properties.ADDRESSSTREETNAME + " Singapore " + response.data[1].properties.ADDRESSPOSTALCODE, response.data[1].properties.HYPERLINK, response.data[1].properties.PHOTOURL],
          [response.data[2].properties.Name, response.data[2].properties.ADDRESSBLOCKHOUSENUMBER + " "+ response.data[2].properties.ADDRESSSTREETNAME + " Singapore " + response.data[2].properties.ADDRESSPOSTALCODE, response.data[2].properties.HYPERLINK, response.data[2].properties.PHOTOURL],
          [response.data[3].properties.Name, response.data[3].properties.ADDRESSBLOCKHOUSENUMBER + " "+ response.data[3].properties.ADDRESSSTREETNAME + " Singapore " + response.data[3].properties.ADDRESSPOSTALCODE, response.data[3].properties.HYPERLINK, response.data[3].properties.PHOTOURL],
          [response.data[4].properties.Name, response.data[4].properties.ADDRESSBLOCKHOUSENUMBER + " "+ response.data[4].properties.ADDRESSSTREETNAME + " Singapore " + response.data[4].properties.ADDRESSPOSTALCODE, response.data[4].properties.HYPERLINK, response.data[4].properties.PHOTOURL], Pharmacy, "pharmacy"])
        console.log(topPharmacies);
        console.log(display);
        setLoading(false)
      })
      .catch(error => {
        // If the request fails, an error is logged to the console.
        console.log(error);
      });
  }, [inputfields]) // specify the dependency array to only run the effect when the inputfields changes


  // clinics
  // useEffect hook to make an HTTP POST request to a specified URL when the inputfields state changes
  useEffect(() => {
    console.log("clinicForm", clinicform)
    axios.post("https://silverfun-backend.limsui.repl.co", clinicform, clinicoptions)
      .then(response => {
        // If the request is successful, the response data is used to set the topClinics state
        // which is an array of arrays containing information about the top 5 nearest clinics in the specified location, a coronavirus icon and "clinic"
        console.log("clinic");
        console.log(response.data);
        setTopClinics(
          [[response.data[0].properties.Name, response.data[0].properties.ADDRESSBLOCKHOUSENUMBER + " "+ response.data[0].properties.ADDRESSSTREETNAME + " Singapore " + response.data[0].properties.ADDRESSPOSTALCODE, response.data[0].properties.HYPERLINK, response.data[0].properties.PHOTOURL],
          [response.data[1].properties.Name, response.data[1].properties.ADDRESSBLOCKHOUSENUMBER + " "+ response.data[1].properties.ADDRESSSTREETNAME + " Singapore " + response.data[1].properties.ADDRESSPOSTALCODE, response.data[1].properties.HYPERLINK, response.data[1].properties.PHOTOURL],
          [response.data[2].properties.Name, response.data[2].properties.ADDRESSBLOCKHOUSENUMBER + " "+ response.data[2].properties.ADDRESSSTREETNAME + " Singapore " + response.data[2].properties.ADDRESSPOSTALCODE, response.data[2].properties.HYPERLINK, response.data[2].properties.PHOTOURL],
          [response.data[3].properties.Name, response.data[3].properties.ADDRESSBLOCKHOUSENUMBER + " "+ response.data[3].properties.ADDRESSSTREETNAME + " Singapore " + response.data[3].properties.ADDRESSPOSTALCODE, response.data[3].properties.HYPERLINK, response.data[3].properties.PHOTOURL],
          [response.data[4].properties.Name, response.data[4].properties.ADDRESSBLOCKHOUSENUMBER + " "+ response.data[4].properties.ADDRESSSTREETNAME + " Singapore " + response.data[4].properties.ADDRESSPOSTALCODE, response.data[4].properties.HYPERLINK, response.data[4].properties.PHOTOURL], Coronavirus, "clinic"])
        console.log(topClinics);
        console.log(display);
        setLoading(false)
      })
      .catch(error => {
        // If the request fails, an error is logged to the console.
        console.log(error);
      });
  }, [inputfields]) // specify the dependency array to only run the effect when the inputfields changes

  // useEffect hook that runs when the filter or isLoading or fetched state variables change.
  useEffect(() => {
    console.log(filter)
    console.log('topEldercare---------------------------')
    console.log(topEldercare)
    if(filter === "eldercare" && isLoading === false){
      setDisplay(topEldercare)
      setState1(false)
      setState2(true)
      setState3(false)
      setRendering(false)
    }
    else if(filter === "pharmacy" && isLoading === false){
      setDisplay(topPharmacies)
      setState1(true)
      setState2(false)
      setState3(false)
    }
    else if(filter === "clinic" && isLoading === false){
      setDisplay(topClinics)
      setState1(false)
      setState2(false)
      setState3(true)
    }
  }, [filter, isLoading, fetched]); // specify the dependency array to only run the effect when the filter or isLoading or fetched changes

  return (
    <div>

    <Header />
    <div className = "flex h-min">
        <p className = "text-center m-auto">
          <h1 className = "mb-2">Healthcare Services</h1>
          <body>Find out more about healthcare services you might need around you, and other necessary information like details on <br/> how to make appointments!</body>

          <div class="justify-center">
            <div className="w-max-3xl">
              <GMaps url1={url1} url2={url2} url3={url3} state1={state1} state2={state2} state3={state3} onClickHandler = {()=>setInputClick(!inputClick)} className="w-max-3xl" />
            </div>          
            </div>
          <br />
          <div>Press one of the filters below to find the healthcare services available near you!</div>
          <br/>
          <div class="inline-flex space-x-9">
            <button class={`bg-white h-10 px-5 rounded-lg flex items-center text-center text-md rounded-md + ${filter === "eldercare" ? 'border-2 border-gray-400 shadow-inner' : 'hover:scale-105 transition-all duration-150 ease-linear drop-shadow-lg'}`} onClick={event => setFilter("eldercare")} >
              <div class="flex flex-row space-x-1">
                <img src={Elderly} class="object-scale-down h-25 w-7" />
                <div>Eldercare Services</div>
              </div>
            </button>
            <button class={`bg-white h-10 px-5 rounded-lg flex items-center text-center text-md rounded-md + ${filter === "pharmacy" ? 'border-2 border-gray-400 shadow-inner' : 'hover:scale-105 transition-all duration-150 ease-linear drop-shadow-lg'}`} onClick={event => setFilter("pharmacy")} >
              <div class="flex flex-row space-x-1">
                <img src={Pharmacy} class="object-scale-down h-25 w-7" />
                <div>Pharmacies</div>
              </div>
            </button>

            <button class={`bg-white h-10 px-5 rounded-lg flex items-center text-center text-md rounded-md + ${filter === "clinic" ? 'border-2 border-gray-400 shadow-inner' : 'hover:scale-105 transition-all duration-150 ease-linear drop-shadow-lg'}`} onClick={event => setFilter("clinic")} >
              <div class="flex flex-row space-x-1">
                <img src={Coronavirus} class="object-scale-down h-25 w-7" />
                <div>Clinic</div>
              </div>
            </button>

          </div>
          
          {isRendering || (display === null) ? <div>
          <br/> Loading... </div> : <div>
          {console.log('display')}
          {console.log(display)}
            <br />
            <Link to={"/HealthcareDetails"}
              state={{ name: display[0][0], address: display[0][1], link: display[0][2], photo: display[0][3], type: display[6]}}
            >
              <Boxes icon={display[5]} text1={display[0][0]} text2={display[0][1]}></Boxes>
            </Link>
            <br />
            <Link to={"/HealthcareDetails"}
              state={{ name: display[1][0], address: display[1][1], link: display[1][2] , photo: display[1][3], type: display[6]}}
            >
              <Boxes icon={display[5]} text1={display[1][0]} text2={display[1][1]}></Boxes>
              </Link>
            <br />
            <Link to={"/HealthcareDetails"}
              state={{ name: display[2][0], address: display[2][1], link: display[2][2] , photo: display[2][3], type: display[6]}}
            >
              <Boxes icon={display[5]} text1={display[2][0]} text2={display[2][1]}></Boxes>
            </Link>
            <br />
            <Link to={"/HealthcareDetails"}
              state={{ name: display[3][0], address: display[3][1], link: display[3][2] , photo: display[3][3], type: display[6]}}
            >
              <Boxes icon={display[5]} text1={display[3][0]} text2={display[3][1]}></Boxes>
              </Link>
            <br />
            <Link to={"/HealthcareDetails"}
              state={{ name: display[4][0], address: display[4][1], link: display[4][2] , photo: display[4][3], type: display[6]}}
            >
              <Boxes icon={display[5]} text1={display[4][0]} text2={display[4][1]}></Boxes>
            </Link>
            <br />

          </div>}
          
          <br />
        </p>
      </div>

      <Footer />
      </div>
    );
  }
  export default Healthcare;
