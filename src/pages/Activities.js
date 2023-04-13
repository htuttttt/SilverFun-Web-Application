// This page is named "Activities" and it's main functionality is to show the activities available for fitness facilities, hawker centres, and libraries on a map 
// The page also renders the 5 nearest activities to the user's location based on each filter: fitness facilities, hawker centres, and libraries
// This page serves as a means for elderly to easily find activities in Singapore, while also being aware of those that are near them.

import Header from "../components/Header";
import React, { useEffect } from "react";
import Squats from "../assets/icons/Squats.png";
import Book from "../assets/icons/Book.png";
import Boxes from "../components/Boxes";
import Food from "../assets/icons/Food.png";
import GMaps from "../components/GMaps";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { library } from "../assets/geoJSON/libraries";
import { hawker } from "../assets/geoJSON/hawker"
import { gyms } from "../assets/geoJSON/gyms"
import axios from 'axios';
import {useActivityLocation, useActivityLocationUpdate, ActivityLocationProvider} from "../ActivityLocationContext"


function Activities() {
  // URLs for KML files containing locations of fitness facilities, hawker centres, and libraries in Singapore
  const url1 = "https://storage.googleapis.com/swe-silverfun-app.appspot.com/gyms-sg-kml.kml";
  const url2 = "https://storage.googleapis.com/swe-silverfun-app.appspot.com/hawker-centres-kml.kml";
  const url3 = "https://storage.googleapis.com/swe-silverfun-app.appspot.com/libraries.kml";

  // States for toggling markers for fitness facilities, hawker centres, and libraries
  const [state1, setState1] = React.useState(false);
  const [state2, setState2] = React.useState(false);
  const [state3, setState3] = React.useState(false);

  // State for search filter input
  const [filter, setFilter] = React.useState("library");

  // States for loading and rendering the map
  const [isLoading, setLoading] = React.useState(true)
  const [isRendering, setRendering] = React.useState(true)

  // States for displaying nearest fitness facilties, hawker centres, and libraries around the user's location
  const [topLibraries, setTopLibraries] = React.useState(null);
  const [topHawkers, setTopHawkers] = React.useState(null);
  const [topFitness, setTopFitness] = React.useState(null);

  // State for displaying loading options while map is loading
  const loadingOptions = ([
    ["loading", "loading", "loading"],
    ["loading", "loading", "loading"],
    ["loading", "loading", "loading"],
    ["loading", "loading", "loading"],
    ["loading", "loading", "loading"], "loading"])
  
  // State for displaying the nearest activities to the users based on their search filter appiled
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

  // library
  // Blob object that holds the data for a GeoJSON file for library locations.
  const libraryData = new Blob([JSON.stringify(library, null, 2)], {
    type: "application/json",
  });

  // FormData object that holds the library GeoJSON data and the latitude and longitude coordinates of the selected location
  const libform = new FormData();
  libform.append("data", libraryData, "libraries.geojson");
  libform.append("lat", String(inputfields.lat));
  libform.append("lng", String(inputfields.lng));

  // specifies the HTTP POST request method and body data for the library data upload
  const liboptions = {
    method: "POST",
    body: libform,
  }

  // hawker centre
  // Blob object that holds the data for a GeoJSON file for hawker centre locations.
  const hawkerData = new Blob([JSON.stringify(hawker, null, 2)], {
    type: "application/json",
  });

  // FormData object that holds the hawker centre GeoJSON data and the latitude and longitude coordinates of the selected location
  const hawkerForm = new FormData();
  hawkerForm.append("data", hawkerData, "hawker-centres.geojson");
  hawkerForm.append("lat", String(inputfields.lat));
  hawkerForm.append("lng", String(inputfields.lng));

  // specifies the HTTP POST request method and body data for the hawker centre data upload
  const hawkeroptions = {
    method: "POST",
    body: hawkerForm,
  }

  // fitness facilities
  // Blob object that holds the data for a GeoJSON file for fitness facilities locations.
  const fitnessData = new Blob([JSON.stringify(gyms, null, 2)], {
    type: "application/json",
  });

  // FormData object that holds the fitness facilities GeoJSON data and the latitude and longitude coordinates of the selected location
  const fitnessForm = new FormData();
  fitnessForm.append("data", fitnessData, "gyms-sg-geojson.geojson");
  fitnessForm.append("lat", String(inputfields.lat));
  fitnessForm.append("lng", String(inputfields.lng));

  // specifies the HTTP POST request method and body data for the fitness facilities data upload
  const fitnessoptions = {
    method: "POST",
    body: fitnessForm,
  }

  // fetching library data
  // useEffect hook to make an HTTP POST request to a specified URL when the inputfields state changes
  useEffect(() => {
    console.log("libform", libform)
    console.log('POST REQ FOR LIBFORM-----')
    axios.post("https://silverfun-backend.limsui.repl.co", libform, liboptions)
      .then(response => {
        // If the request is successful, the response data is used to set the topLibraries state
        // which is an array of arrays containing information about the top 5 nearest libraries in the specified location, a book icon and "libraries"
        console.log('PROMISE FULFILLED------')
        console.log("libraries");
        console.log(response.data);
        setTopLibraries(
          [[response.data[0].properties.Name, response.data[0].properties.ADDRESSBLOCKHOUSENUMBER + " " + response.data[0].properties.ADDRESSSTREETNAME + " Singapore " + response.data[0].properties.ADDRESSPOSTALCODE, response.data[0].properties.HYPERLINK, response.data[0].properties.PHOTOURL],
          [response.data[1].properties.Name, response.data[1].properties.ADDRESSBLOCKHOUSENUMBER + " " + response.data[1].properties.ADDRESSSTREETNAME + " Singapore " + response.data[1].properties.ADDRESSPOSTALCODE, response.data[1].properties.HYPERLINK, response.data[1].properties.PHOTOURL],
          [response.data[2].properties.Name, response.data[2].properties.ADDRESSBLOCKHOUSENUMBER + " " + response.data[2].properties.ADDRESSSTREETNAME + " Singapore " + response.data[2].properties.ADDRESSPOSTALCODE, response.data[2].properties.HYPERLINK, response.data[2].properties.PHOTOURL],
          [response.data[3].properties.Name, response.data[3].properties.ADDRESSBLOCKHOUSENUMBER + " " + response.data[3].properties.ADDRESSSTREETNAME + " Singapore " + response.data[3].properties.ADDRESSPOSTALCODE, response.data[3].properties.HYPERLINK, response.data[3].properties.PHOTOURL],
          [response.data[4].properties.Name, response.data[4].properties.ADDRESSBLOCKHOUSENUMBER + " " + response.data[4].properties.ADDRESSSTREETNAME + " Singapore " + response.data[4].properties.ADDRESSPOSTALCODE, response.data[4].properties.HYPERLINK, response.data[4].properties.PHOTOURL], Book, "library"])
        console.log(topLibraries);
        console.log(display);
        setLoading(false)
      })
      .catch(error => {
        // If the request fails, an error is logged to the console.
        console.log(error);
      });
  }, [inputfields]) // specify the dependency array to only run the effect when the inputfields changes

  
  // fetching hawker centres data
  // useEffect hook to make an HTTP POST request to a specified URL when the inputfields state changes
  useEffect(() => {
    console.log("hawkerForm", hawkerForm)
    axios.post("https://silverfun-backend.limsui.repl.co", hawkerForm, hawkeroptions)
      .then(response => {
        // If the request is successful, the response data is used to set the topHawkers state
        // which is an array of arrays containing information about the top 5 nearest hawker centres in the specified location, a food icon and "hawker"
        console.log("hawkers");
        console.log(response.data);
        setTopHawkers(
          [[response.data[0].properties.Name, response.data[0].properties.ADDRESSBLOCKHOUSENUMBER + " " + response.data[0].properties.ADDRESSSTREETNAME + " Singapore " + response.data[0].properties.ADDRESSPOSTALCODE, response.data[0].properties.HYPERLINK, response.data[0].properties.PHOTOURL],
          [response.data[1].properties.Name, response.data[1].properties.ADDRESSBLOCKHOUSENUMBER + " " + response.data[1].properties.ADDRESSSTREETNAME + " Singapore " + response.data[1].properties.ADDRESSPOSTALCODE, response.data[1].properties.HYPERLINK, response.data[1].properties.PHOTOURL],
          [response.data[2].properties.Name, response.data[2].properties.ADDRESSBLOCKHOUSENUMBER + " " + response.data[2].properties.ADDRESSSTREETNAME + " Singapore " + response.data[2].properties.ADDRESSPOSTALCODE, response.data[2].properties.HYPERLINK, response.data[2].properties.PHOTOURL],
          [response.data[3].properties.Name, response.data[3].properties.ADDRESSBLOCKHOUSENUMBER + " " + response.data[3].properties.ADDRESSSTREETNAME + " Singapore " + response.data[3].properties.ADDRESSPOSTALCODE, response.data[3].properties.HYPERLINK, response.data[3].properties.PHOTOURL],
          [response.data[4].properties.Name, response.data[4].properties.ADDRESSBLOCKHOUSENUMBER + " " + response.data[4].properties.ADDRESSSTREETNAME + " Singapore " + response.data[4].properties.ADDRESSPOSTALCODE, response.data[4].properties.HYPERLINK, response.data[4].properties.PHOTOURL], Food, "hawker"])
        console.log(topHawkers);
        console.log(display);
        setLoading(false)
      })
      .catch(error => {
        // If the request fails, an error is logged to the console.
        console.log(error);
      });
  }, [inputfields]) // specify the dependency array to only run the effect when the inputfields changes


  // fetching fitness facilities data
  // useEffect hook to make an HTTP POST request to a specified URL when the inputfields state changes
  useEffect(() => {
    console.log("fitnessForm",fitnessForm)
    axios.post("https://silverfun-backend.limsui.repl.co", fitnessForm, fitnessoptions)
      .then(response => {
        // If the request is successful, the response data is used to set the topFitness state
        // which is an array of arrays containing information about the top 5 nearest fitness facilities in the specified location, a squats icon and "fitness"
        console.log("fitness");
        console.log(response.data);
        setTopFitness(
          [[response.data[0].properties.Name, response.data[0].properties.ADDRESSBLOCKHOUSENUMBER + " " + response.data[0].properties.ADDRESSSTREETNAME + " Singapore " + response.data[0].properties.ADDRESSPOSTALCODE, response.data[0].properties.HYPERLINK, response.data[0].properties.PHOTOURL],
          [response.data[1].properties.Name, response.data[1].properties.ADDRESSBLOCKHOUSENUMBER + " " + response.data[1].properties.ADDRESSSTREETNAME + " Singapore " + response.data[1].properties.ADDRESSPOSTALCODE, response.data[0].properties.HYPERLINK, response.data[0].properties.PHOTOURL],
          [response.data[2].properties.Name, response.data[2].properties.ADDRESSBLOCKHOUSENUMBER + " " + response.data[2].properties.ADDRESSSTREETNAME + " Singapore " + response.data[2].properties.ADDRESSPOSTALCODE, response.data[0].properties.HYPERLINK, response.data[0].properties.PHOTOURL],
          [response.data[3].properties.Name, response.data[3].properties.ADDRESSBLOCKHOUSENUMBER + " " + response.data[3].properties.ADDRESSSTREETNAME + " Singapore " + response.data[3].properties.ADDRESSPOSTALCODE, response.data[0].properties.HYPERLINK, response.data[0].properties.PHOTOURL],
          [response.data[4].properties.Name, response.data[4].properties.ADDRESSBLOCKHOUSENUMBER + " " + response.data[4].properties.ADDRESSSTREETNAME + " Singapore " + response.data[4].properties.ADDRESSPOSTALCODE, response.data[0].properties.HYPERLINK, response.data[0].properties.PHOTOURL], Squats, "fitness"])
        console.log(topFitness);
        console.log(display);
        setLoading(false)
      })
      .catch(error => {
        // If the request fails, an error is logged to the console.
        console.log(error);
      });
  }, [inputfields]) // specify the dependency array to only run the effect when the inputfields changes

  // useEffect hook that runs when the filter or isLoading state variables change.
  useEffect(() => {
    console.log(filter)
    console.log('topLibraries---------------------------')
    console.log(topLibraries)
    if (filter === "library" && isLoading === false) {
      setDisplay(topLibraries)
      setState3(true)
      setState1(false)
      setState2(false)
      setRendering(false)
    }
    else if (filter === "hawker"&& isLoading === false) {
      setDisplay(topHawkers)
      setState2(true)
      setState3(false)
      setState1(false)
    }
    else if (filter === "fitness"&& isLoading === false) {
      setDisplay(topFitness)
      setState1(true)
      setState2(false)
      setState3(false)
    }
  }, [filter, isLoading]); // specify the dependency array to only run the effect when the filter or isLoading changes


return (
  <div>

    <Header />
    <div className="flex h-min">
      <p className="text-center m-auto ">
        <h1 className="mb-2">Activities</h1>
        <body>Find out more about fun and enriching activities around you!</body>
        
        <div className="w-max-3xl">
          <GMaps url1={url1} url2={url2} url3={url3} state1={state1} state2={state2} state3={state3} onClickHandler = {()=>setInputClick(!inputClick)} className="w-max-3xl" />
        </div>
        <br />
        <div>Press one of the filters below to find activities available near you!</div>
        <br />
        <div class="inline-flex space-x-9">
          <button class={`bg-white h-10 px-5 rounded-lg flex items-center text-center text-md rounded-md + ${filter === "library" ? 'border-2 border-gray-400 shadow-inner' : 'hover:scale-105 transition-all duration-150 ease-linear drop-shadow-lg'}`} onClick={event => setFilter("library")} >
            <div class="flex flex-row space-x-1">
              <img src={Book} class="object-scale-down h-25 w-7" />
              <div>Libraries</div>
            </div>
          </button>
          <button class={`bg-white h-10 px-5 rounded-lg flex items-center text-center text-md rounded-md + ${filter === "hawker" ? 'border-2 border-gray-400 shadow-inner' : 'hover:scale-105 transition-all duration-150 ease-linear drop-shadow-lg'}`} onClick={event => setFilter("hawker")} >
            <div class="flex flex-row space-x-1">
              <img src={Food} class="object-scale-down h-25 w-7" />
              <div>Hawker Centres</div>
            </div>
          </button>

          <button class={`bg-white h-10 px-5 rounded-lg flex items-center text-center text-md rounded-md + ${filter === "fitness" ? 'border-2 border-gray-400 shadow-inner' : 'hover:scale-105 transition-all duration-150 ease-linear drop-shadow-lg'}`} onClick={event => setFilter("fitness")} >
            <div class="flex flex-row space-x-1">
              <img src={Squats} class="object-scale-down h-25 w-7" />
              <div>Fitness Facilities</div>
            </div>
          </button>

        </div>
        {isRendering || (display === null) ? <div>
          <br/>Loading...</div>  : <div>
          {console.log('display')}
          {console.log(display)}
          <br />
          <Link to={"/ActivityDetails"}
            state={{ name: display[0][0], address: display[0][1], link: display[0][2], photo: display[0][3], type: display[6] }}
          >
            <Boxes icon={display[5]} text1={display[0][0]} text2={display[0][1]}></Boxes>
          </Link>
          <br />
          <Link to={"/ActivityDetails"}
            state={{ name: display[1][0], address: display[1][1], link: display[1][2], photo: display[1][3], type: display[6] }}
          >
            <Boxes icon={display[5]} text1={display[1][0]} text2={display[1][1]}></Boxes></Link>
          <br />
          <Link to={"/ActivityDetails"}
            state={{ name: display[2][0], address: display[2][1], link: display[2][2], photo: display[2][3], type: display[6] }}
          >
            <Boxes icon={display[5]} text1={display[2][0]} text2={display[2][1]}></Boxes>
          </Link>
          <br />
          <Link to={"/ActivityDetails"}
            state={{ name: display[3][0], address: display[3][1], link: display[3][2], photo: display[3][3], type: display[6] }}
          >
            <Boxes icon={display[5]} text1={display[3][0]} text2={display[3][1]}></Boxes>
          </Link>
          <br />
          <Link to={"/ActivityDetails"}
            state={{ name: display[4][0], address: display[4][1], link: display[4][2], photo: display[4][3], type: display[6] }}
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
export default Activities;
