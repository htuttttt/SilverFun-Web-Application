// This component is named "ProfileMenu" and it represents the profile of the user that appears in the header under the "Profile" button when the user is logged in
// The component displays the name and email of the user, a link to the "EditProfile" Page and a button to log out


import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import profilePlaceholder from "../assets/images/profilePlaceholder.png"
import EditIcon from "../assets/icons/Edit.svg"
import { useAuth } from "../AuthContext"
import { useNavigate } from "react-router-dom";
import { Store } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

// Renders the user's profile menu
const ProfileMenu = () => { 
  const navigate = useNavigate(); // provides navigation functions
  const { logout } = useAuth(); // retrieve authentication functions from AuthContext
  const { currentUser } = useAuth(); //retrieve the current user from AuthContext
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

  // Function for logging out the user.
  // Shows success or error notifications depending on whether the logout was successful
  const signout = async () => {
    try {
      const user = await logout();
      // Shows success message if logout was successful
      Store.addNotification({
        title: "Logged out",
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: true
        }
      });
      navigate("/Home"); // Navigate to the home page after logout
    } catch (error) {
      console.log(error.message);
      // Shows error message if logout was unsuccessful 
      Store.addNotification({
        title: "Error",
        message: error.message,
        type: "danger",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 4000,
          onScreen: true
        }
      });    }
  };

  return (
    <div className="bg-white drop-shadow-lg w-72 h-min rounded">
      {isLoggedIn ? 
      <div>
      <div className=" w-full flex justify-center mt-5">
        <img src={profilePlaceholder} className="w-fit py-3 px-10" alt="profile" />
      </div>
      <div className="flex flex-col items-center ">
        {isLoggedIn && currentUser ? <text className={`font-["RubikBold"] text-lg text-center`}>{currentUser.displayName}</text>:<div></div>}
        {isLoggedIn && currentUser ? <text className={`text-base text-gray-600 text-center pb-2 italic `}>{currentUser.email}</text>: <div></div>}
        <div className="flex items-center py-4 w-4/6 border-t border-b border-gray-700">
          <img src={EditIcon} />
          <Link
            to="/EditProfile"
            className={`pl-8 text-xl text-bold`}>
            Edit Profile
          </Link>
        </div>
        {/* <div className="flex items-center py-4 w-4/6 mb-4">
          <img src={NotificationIcon} />
          <Link
            to="/Notifications"
            className={`pl-8 text-xl text-bold`}>
            Notifications
          </Link>
        </div> */}
        <button className=" mt-5 mb-7 px-10 py-3 text-xl flex items-center rounded-md  hover:scale-105 transition-all duration-150 ease-linear bg-red-300 drop-shadow-lg " onClick={signout}>Logout</button>
      </div></div> : <div></div>}

    </div>

  );
};

export default ProfileMenu;
