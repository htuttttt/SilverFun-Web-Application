// This page is named "EditProfile" and it allows the user to update their profile details like name, email and password
// This page can be navigated to through the "Profile" button in the header and only after the user has logged in 

import Header from "../components/Header";
import Footer from "../components/Footer";
import React from "react";
import { useState } from "react";
import { TextField } from '@mui/material';
import { useNavigate } from "react-router-dom";
import {useAuth} from "../AuthContext.js"

function EditProfile() {
  const [username, setUsername] = useState(""); // Stores the new username entered by the user
  const [loginEmail, setLoginEmail] = useState(""); // Stores the new email entered by the user
  const [loginPassword, setLoginPassword] = useState(""); // Stores the new password entered by the user
  const { currentUser, updateemail, updatepassword, updateprofile } = useAuth() // Firebase authentication hooks to get the current user and update user details
  const [isUpdated, setIsUpdated] = useState(false); // Boolean state variable to check if profile is updated successfully

  const navigate = useNavigate(); // React Router hook to navigate between routes
  console.log(currentUser);

  // Updates user profile details by calling Firebase authentication functions to update email, password and username
  function update() {

    const promises = []
    if (loginEmail !== currentUser.email) {
      promises.push(updateemail(loginEmail))
      setIsUpdated(true);
    }
    if (loginPassword) {
      promises.push(updatepassword(loginPassword))
      setIsUpdated(true);
    }
    if (username !== currentUser.displayName) {
      promises.push(updateprofile({ displayName: username }))
      setIsUpdated(true);
    }

    Promise.all(promises)
      .then(() => {
        navigate("/EditProfile");
      })
      .catch((error) => {
        // Shows error message if update was unsuccessful 
        console.log(error);
      })

  }

  return (
    <div>
      <Header />
      <div class = "text-center m-auto">
        <h1>Edit Profile</h1>
      </div>
      <div className="bg-blue-100 h-min w-5/6 m-auto my-5 rounded-2xl drop-shadow-lg flex p-4">
      
          <div class = "flex mx-auto">
            <div className="flex flex-col w-96 space-y-3">
              
              <div class = "font-bold">Name:</div>
              <TextField fullWidth id="name" label="Please Enter Username" variant="outlined"  defaultValue={currentUser.displayName ? currentUser.displayName:''}
              onChange = {(event) => {
                setUsername(event.target.value);
              }}></TextField>

              <div class = "font-bold">Email:</div>
              <TextField fullWidth id="email" label="Please Enter New Email" variant="outlined" defaultValue={currentUser.email}
                onChange={(event) => {
                  setLoginEmail(event.target.value);
                }} />
              
              <div class = "font-bold">Password:</div>
              <TextField fullWidth id="password" label="Please Enter New Password" variant="outlined"
                onChange={(event) => {
                  setLoginPassword(event.target.value);
                }} />
              
              <button class=" mt-10 bg-blue-300 h-15 w-full rounded-lg align-middle items-center justify-center text-xl rounded-md  hover:drop-shadow-lg transition-all duration-150 ease-linear" onClick={update}>Update</button>
              {isUpdated ? <div class = "text-blue-700 text-center">Update Complete!</div>:<div></div>}

            </div>
          </div>
      </div>
      <br/>
      <Footer />
    </div>
  );
}
export default EditProfile;