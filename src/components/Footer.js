// This component is named "Footer" and it represents the footer section of the website
// It typically appears at the bottom of every page and contains links to various pages and sections of the website.

import React, {useState, useEffect} from "react";
import Logo from "../assets/silverfunlogo.svg";
import FooterProfile from "./FooterProfile";
import { Link } from "react-router-dom";
import { AuthProvider, useAuth } from "../AuthContext"

const Footer = () => {
  const { currentUser } = useAuth() //retrieve the current user from AuthContext
  const [isLoggedIn, setIsLoggedIn] = useState(false); //set a default state for isLoggedIn as false

  // useEffect hook is used to update the state of isLoggedIn based on the current user
  useEffect(() => { 
    if (currentUser === null) { //if user is not logged in, set isLoggedIn as false
      setIsLoggedIn(false) 
    }
    else { //if user is logged in, set isLoggedIn as true
      setIsLoggedIn(true)
    }
  }, [currentUser]); //specify the dependency array to only run the effect when the currentUser changes

  return (
    <div className={`w-full bg-blue-100 h-min`}>
      <div
        className={`text-black flex items-center justify-around `}
      >
        <div className={`flex flex-col items-center p-5`}>
          <Link to="/"><img src={Logo} className=" p-5 px-10" alt="logo" /></Link>
          {isLoggedIn ? <FooterProfile /> : <div className = "w-44 h-56"></div>}
        </div>
        <div className={`flex p-5 justify-around text-gray-600 font-["Rubik"] w-9/12`}>
          <div className={`flex flex-col items-left px-5`}>
            <div className={`text-lg font-["RubikBold"] pb-3 text-black`}>
              HOME
            </div>
            <div className={`flex flex-col`}>
              <Link to="/" className={`pb-2`}>Home</Link>
              <Link to="/" className={`pb-2`}>Health Statistics</Link>
            </div>
          </div>
          <div className={`flex flex-col items-left px-5`}>
            <div className={`text-lg pb-3 font-["RubikBold"] text-black`}>
              ACTIVITIES
            </div>
            <div className={`flex flex-col`}>
              <Link to="/Activities" className={`pb-2`}>Libraries</Link>
              <Link to="/Activities" className={`pb-2`}>Hawker Centers</Link>
              <Link to="/Activities" className={`pb-2`}>Fitness Facilities</Link>
            </div>
          </div>
          <div className={`flex flex-col items-left px-5 `}>
            <div className={`text-lg pb-3 font-["RubikBold"] text-black`}>
              HEALTHCARE SERVICES
            </div>
            <div className={`flex flex-col`}>
              <Link to="/Healthcare" className={`pb-2`}>Eldercare Services</Link>
              <Link to="/Healthcare" className={`pb-2`}>Pharmacies</Link>
              <Link to="/Healthcare" className={`pb-2`}>Clinics</Link>
            </div>
          </div>
          <div className={`flex flex-col items-left px-5`}>
            <div className={`text-lg pb-3 font-["RubikBold"] text-black`}>
              ABOUT US
            </div>
            <div className={`flex flex-col`}>
              <Link to="/AboutUs" className={`pb-2`}>Our Vision</Link>
              <Link to="/AboutUs" className={`pb-2`}>Our Mission</Link>
              <Link to="/AboutUs" className={`pb-2`}>Our Team</Link>
            </div>
          </div>
        </div>
      </div>
      <div className={`w-full flex justify-center `}>
        <text className={`text-center text-xs pb-3`}>
          Copyright © 2022 SilverFun. All rights reserved.
        </text>
      </div>

    </div>
  );
};

export default Footer;
