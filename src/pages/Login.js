// This page is named "Login" and it displays a form for users to log in.
// When the user clicks the login button, the entered details are passed to the authentication function.
// If login is successful, the user is redirected to the homepage. If login fails, an error message is displayed to the user.

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { TextField } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext"
import { ReactNotifications, Store } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'


function Login() {
  // initialise state variables for the login form
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Navigate function from react-router-dom for programmatic navigation
  const navigate = useNavigate();

  // Authentication function from the useAuth hook
  const { login } = useAuth()

  // Function to handle login submission
  const signin = async () => {
    try {
      // Attempt to login with entered email and password
      const user = await login(
        loginEmail,
        loginPassword
      );
      // If login is successful, log the user object and redirect to homepage
      console.log(user);
      navigate("/");
    } catch (error) {
      // If login fails, log the error message and display a notification to the user
      console.log(error.message);
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
          <img src={require('../assets/signup-page-art.png')} alt="Elderly exercising" />
        </div>
        <div className="flex w-1/3">
          <div className="container mx-20 bg-blue-100 w-full rounded-xl shadow p-8 m-10">
            <div className="my-5">
              <h3>E-mail</h3>
              <TextField fullWidth id="email" label="Please Enter Email" variant="outlined"
                onChange={(event) => {
                  setLoginEmail(event.target.value);
                }} />
            </div>
            <div>
              <h3>Password</h3>
              <TextField fullWidth id="password" label="Please Enter Password" variant="outlined"
                onChange={(event) => {
                  setLoginPassword(event.target.value);
                }} />
            </div>
            <button class=" mt-10 bg-white h-15 w-full rounded-lg align-middle items-center justify-center text-2xl rounded-md  hover:scale-105 transition-all duration-150 ease-linear drop-shadow-lg" onClick={signin}>Log in</button>
            <div className="mt-4">
              <p>
                New to SilverFun? <a href="/Signup" className="text-blue-700">Sign up</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Login;