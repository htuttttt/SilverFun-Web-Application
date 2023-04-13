// This page is named "Home" and it is the landing page of SilverFun 
// It renders a Google Map with markers for activities and healthcare services. There are two buttons that allow the user to filter the map to display only activities or healthcare services.
// The page also includes a section for popular recommendations for the user, represented by the RecommendedItem component.

import Header from "../components/Header";
import Footer from "../components/Footer";
import RecommendedItem from "../components/Home/RecommendedItem";
import AED from "../components/AED";
import HealthStats from "../components/Home/HealthStats";
import Button from "../components/Button";
import ActivitiesPopup from "../components/Home/ActivitiesPopup";
import HealthcarePopup from "../components/Home/HealthcarePopup";
import EmptyPopup from "../components/Home/EmptyPopup";
import ActivityPin from "../assets/icons/ActivityPin.svg"
import HealthcarePin from "../assets/icons/HealthcarePin.svg";
import GMaps from "../components/GMaps";
import React, { useState, useEffect } from 'react'
import { ReactNotifications, Store } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import eldercarePic from "../assets/images/eldercarePic.jpg"
import libraryPic from "../assets/images/nlb.jpg"
import hawkerPic from "../assets/images/hawkerCentre.jpg"
import { useAuth } from "../AuthContext"


function Home() {
  // URLs for KML files containing locations of activties and healthcare services in Singapore
  const url1 = 'https://storage.googleapis.com/swe-silverfun-app.appspot.com/gyms-sg-kml.kml';
  const url2 = 'https://storage.googleapis.com/swe-silverfun-app.appspot.com/retail-pharmacy-locations-kml.kml';
  const url3 = 'https://storage.googleapis.com/swe-silverfun-app.appspot.com/AED_Locations.kml';

  // States for toggling markers for fitness facilities, hawker centres, and libraries
  const [state1, setState1] = React.useState(true);
  const [state2, setState2] = React.useState(true);
  const [state3, setState3] = React.useState(false);

  // State for map filter input
  const [mapFilter, setMapFilter] = useState("none");

  // Retrieve the current user from AuthContext
  const { currentUser } = useAuth()

  // Set a default state for isLoggedIn as false
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => { // useEffect hook is used to update the state of isLoggedIn based on the current user
    if (currentUser === null) { //if user is not logged in, set isLoggedIn as false
      setIsLoggedIn(false)
    }
    else { //if user is logged in, set isLoggedIn as true
      setIsLoggedIn(true)
    }
  }, [currentUser]); //specify the dependency array to only run the effect when the currentUser changes

  // Effect to update the states of which markers to show on the map based on filter selection
  useEffect(() => {
    if (mapFilter === "none") {
      setState1(true)
      setState2(true)
    }
    else if (mapFilter === "Activities") {
      setState2(false)
      setState1(true)
    }
    else if (mapFilter === "Healthcare") {
      setState1(false)
      setState2(true)
    }
  }, [mapFilter]); //specify the dependency array to only run the effect when the mapFilter changes


  return (
    <div>
      <div className="relative bg-blue-100 h-min pb-20">
        <Header />
        <ReactNotifications />
        <div className="absolute w-full flex justify-end">
          <AED />
        </div>
        <div className="flex w-full justify-center">
          <div >
            <h1 className="text-center mb-2">
              <text className="text-yellow">Silver</text>
              Fun
            </h1>
            <h4 className="text-center mb-5">Your one-stop platform for eldercare services</h4>
            <div className="flex justify-center">
              <p className="text-center text-gray-600 w-8/12">Click the filters on the right of the map to see what activities or healthcare facilities are around you!</p>
            </div>
          </div>
        </div>
        <div className="mt-10 flex justify-evenly w-fit mx-10">
          <div className="relative flex justify-center item-center text-center m-1 overflow-auto">
            <GMaps url1={url1} url2={url2} url3={url3} state1={state1} state2={state2} state3={state3} className="w-max" />
          </div>
          <div className="w-1/6 mt-16 ml-10 flex justify-center">
            <div className="flex flex-col justify-left">
              <Button classNames={`w-fit bg-white mt-3 mb-7 drop-shadow-none border border-black opacity-50 text-lg + ${mapFilter === "Activities" ? 'opacity-100 ' : ''}`} icon={ActivityPin} text="  Activities" onClickHandler={() => setMapFilter(mapFilter === "Activities" ? "none" : "Activities")} />
              <Button classNames={`w-fit mb-16 bg-white mb-9 drop-shadow-none border border-black opacity-50 text-lg + ${mapFilter === "Healthcare" ? 'opacity-100 ' : ''}`} icon={HealthcarePin} text=" Healthcare Services" onClickHandler={() => setMapFilter(mapFilter === "Healthcare" ? "none" : "Healthcare")} />

              {mapFilter === "Activities" ? <ActivitiesPopup /> : mapFilter === "Healthcare" ? <HealthcarePopup /> : <EmptyPopup />}
            </div>
          </div>
        </div>
      </div>
      <div className="h-min w-full mt-15">
        <div>
          <h2 className="p-10 text-center">Popular Recommendations For <text className="text-yellow">You</text>
          </h2>
          <div className="flex justify-evenly">

            <RecommendedItem
              title="Geylang East Public Library"
              description="While all the 25 public libraries have Digital Ambassadors (DAs) to provide seniors with personalised assistance, Geylang East Public Library is the only library that offers both an SG Digital community hub and the pilot one-stop access point to public services together."
              type="library"
              pic={libraryPic}
              linkTo='/ActivityDetails'
              address="50 Geylang East Ave 1 Singapore 389777"
              url="http://www.nlb.gov.sg/VisitUs/BranchDetails/tabid/140/bid/328/Default.aspx?branch=Geylang+East+Public+Library"
            />

            <RecommendedItem
              title="Old Airport Road Food Centre and Shopping Mall"
              description="This hawker centre has existed since 1973. Most of the hawkers here have operated since the 1970s, with recipes passed down from generation to generation. Local Singaporeans will consider it one of the best hawker centres in Singapore."
              type="hawker"
              pic={hawkerPic}
              linkTo='/ActivityDetails'
              address="51 Old Airport Road, Singapore 390051"
              url="https://eatbook.sg/old-airport-road-food/"
            />
            
            <RecommendedItem
              title="Care Corner Senior Activity Centre"
              description="Care Corner Family Service Centres (FSC) are community-based social service providers that support individuals and families through life challenges. They employ a multi-method approach to help individuals and their families de-escalate risks, meet their care needs, and achieve resilience."
              type="eldercare"
              pic={eldercarePic}
              linkTo='/HealthcareDetails'
              address="158 Lor 1 Toa Payoh #01-1522 Singapore 310158"
              url="https://www.carecorner.org.sg/services/family-service-centre/"
            />
          </div>
        </div>

        <HealthStats />
      </div>
      <Footer />
    </div>
  );
}
export default Home;