// This component is named "Header" and it represents the navigation bar of the website
// It typically appears at the top of every page and contains navigation links to various pages of the website.

import React, { useState, useEffect } from "react";
import Logo from "../assets/silverfunlogo.svg";
import ProfileIcon from "../assets/icons/profile.svg"
import Button from "./Button";
import { Link } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";
import { AuthProvider, useAuth } from "../AuthContext"


// Header component containing navigation links and user profile button
const Header = () => {
  const [showProfile, setShowProfile] = useState(false); //set a default state for showProfile as false
  const { currentUser } = useAuth() //retrieve the current user from AuthContext
  const [isLoggedIn, setIsLoggedIn] = useState(false); //set a default state for isLoggedIn as false

  //  useEffect hook is used to update the isLoggedIn state based on whether a user is logged in or not
  useEffect(() => {
    if (currentUser === null) { //if user is not logged in, set isLoggedIn as false
      setIsLoggedIn(false)
    }
    else { //if user is logged in, set isLoggedIn as true
      setIsLoggedIn(true)
    }
  }, [currentUser]); //specify the dependency array to only run the effect when the currentUser changes

  return (
    <div
      className={`w-full h-min relative text-black flex items-center justify-between mb-3`}
    >
      {showProfile ? 
      // Show the user profile menu if showProfile is true
      <div className='absolute w-full h-full z-10 flex justify-end pr-10 mt-36'>
        <ProfileMenu />
      </div> : 
      // Otherwise, show nothing 
      <></>}
      <Link to="/"><img src={Logo} className="h-13 p-5 px-10" alt="silver fun logo" /></Link>
      <div className={`flex items-center text-lg font-["Rubik"] px-10 z-0`}>
        <Link
          to="/"
          className={`p-8 + ${window.location.pathname === "/" ? 'underline' : ''}`}>
          HOME
        </Link>
        <Link
          to="/Activities"
          className={`p-8 + ${window.location.pathname === "/Activities" || window.location.pathname === "/ActivityDetails" ? 'underline' : ''}`}>
          ACTIVITIES
        </Link>
        <Link
          to="/Healthcare"
          className={`p-8 + ${window.location.pathname === "/Healthcare" || window.location.pathname === "/HealthcareDetails" ? 'underline' : ''}`}>
          HEALTHCARE
        </Link>
        <Link
          to="/AboutUs"
          className={`p-8 + ${window.location.pathname === "/AboutUs" ? 'underline' : ''}`}>
          ABOUT US
        </Link>
        {isLoggedIn ? 
        // Show the user profile button if a user is logged in
          <button
            className={`border-2 border-black text-lg ml-4 px-5 pr-6 py-3 text-black flex items-center rounded-md  hover:scale-105 transition-all duration-150 ease-linear bg-white drop-shadow-lg + ${showProfile ? 'border-white drop-shadow-xl rounded-br-none rounded-bl-none hover:scale-100' : ''}`}
            onClick={event => setShowProfile(!showProfile)}
          >
            <img src={ProfileIcon} />
            <text className="ml-2">
              PROFILE
            </text>
          </button> :
          // Otherwise, show the login button
          <button
            className={`text-lg ml-4 px-5 pr-6 py-3 text-black flex items-center rounded-md  hover:scale-105 transition-all duration-150 ease-linear bg-yellow drop-shadow-lg`}
            onClick={event => window.location.href = '/Login'}
          >
            <text>
              LOGIN
            </text>
          </button>
        }
      </div>
    </div>
  );
};

export default Header;