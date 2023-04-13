// This component is named "FooterProfile" and it represents the profile of the user that appears in the footer when the user is logged in
// The component displays the name and email of the user

import React, {useState, useEffect} from "react";
import { useAuth } from "../AuthContext"
import profilePlaceholder from "../assets/images/profilePlaceholder.png"

const FooterProfile = () => {
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
        <div className={`border border-black w-44 h-56 flex flex-col items-center`}>
        <img src={profilePlaceholder} className="h-13 py-6 px-10" alt="profile"/>
        {isLoggedIn && currentUser ? <text className={`font-["RubikBold"] text-lg text-center`}>{currentUser.displayName}</text>:<div></div>}
        {isLoggedIn && currentUser? <text className={`text-sm`}>{currentUser.email}</text>: <div></div>}
        </div>
  );
};

export default FooterProfile;
