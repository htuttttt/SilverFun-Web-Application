// This page is named "Signup" and it renders a signup form for users to create an account 
// When the user clicks the sign up button, the entered details are passed to the authentication function and registered.
// If sign up is successful, the user is redirected to the homepage. If sign up fails, an error message is displayed to the user.

import { useState } from "react";
import Header from "../components/Header";
import { TextField } from '@mui/material';
import Footer from "../components/Footer";
import { Alert } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext"
import { ReactNotifications, Store } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { Link } from "react-router-dom";


function Signup() {
  // initialise state variables for the sign up form
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [cfmPassword, cfmRegisteredPassword] = useState("");
  const [error, setError] = useState("");

  // Authentication function from the useAuth hook
  const { signup } = useAuth()

  // Navigate function from react-router-dom for programmatic navigation
  const navigate = useNavigate();

  // Function to handle login submission
  const register = async () => {
    // Check if the re-entered password matches the password
    if (registerPassword !== cfmPassword) {
      return setError("Passwords do not match")
    }

    try {
      // Attempt to sign up with entered email and password
      const user = await signup(
        registerEmail,
        registerPassword
      );
      // If sign up is successful, register the user object and redirect to homepage
      console.log(user);
      navigate("/Home");

    } catch (error) {
      // If sign up fails, log the error message and display a notification to the user
      setError(error.message);
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
      });
    }
  };


  return (
    <div>
      <Header />
      <ReactNotifications />
      {error && <Alert color="red">{error}</Alert> /* FIX THIS */}
      <div className="flex-vertical h-30 align-middle mb-5">
        <h1 className="text-center m-auto text-yellow">
          <span>Welcome To Silver</span>
          <span className="text-black">Fun</span>
        </h1>
        <h3 className="text-center m-auto text-grey">
          Please enter your details
        </h3>
      </div>

      <div className="flex justify-evenly mb-20">
        <div className="max-w-4xl mx-10 ">
          <img src={require('../assets/signup-page-art.png')} alt="" />
        </div>
        <div className="flex w-1/3">
          <div className="container mx-20 bg-blue-100 w-full rounded-xl shadow p-8 m-10">
            <div className="my-5">
              <h3>E-mail</h3>
              <TextField fullWidth id="email" label="Please Enter Email" variant="outlined"
                onChange={(event) => {
                  setRegisterEmail(event.target.value);
                }} />
            </div>
            <div>
              <h3>Password</h3>
              <TextField fullWidth id="password" label="Please Enter Password" variant="outlined"
                onChange={(event) => {
                  setRegisterPassword(event.target.value);
                }}
              />
            </div>
            <div className="my-5">
              <h3>Re-Enter Password</h3>
              <TextField fullWidth id="cfmpassword" label="Please Enter Password Again" variant="outlined"
                onChange={(event) => {
                  cfmRegisteredPassword(event.target.value);
                }}
              />
                <button class=" mt-10 bg-white h-15 w-full rounded-lg align-middle items-center justify-center text-2xl rounded-md  hover:scale-105 transition-all duration-150 ease-linear drop-shadow-lg" onClick={register}>Sign up</button>
              <div className="mt-4">
                <p>
                  Already on SilverFun? <a href="/Login" className="text-blue-700">Log in</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>

  );
}

export default Signup;