// This page is named "ActivityDetails" and it is used to display the address, opening hours, website and extra information of the activity 
// This page can be navigated to by going to the "Activities" page and pressing any of the 5 boxes that show the 5 nearest locations to the user's location

import Header from "../components/Header";
import React from "react"
import { Link, useLocation } from "react-router-dom";
import bicepcurl from "../assets/images/bicepcurl.jpg";
import cardio from "../assets/images/cardio.jpg";
import lateralraise from "../assets/images/lateralraise.jpg";
import Footer from "../components/Footer";
import gymPic from "../assets/images/ActiveSGgym.jpg"
import libraryPic from "../assets/images/nlb.jpg"
import hawkerPic from "../assets/images/hawkerCentre.jpg"
import { useNavigate } from "react-router-dom";


function ActivityDetails() {

  const location = useLocation();
  let navigate = useNavigate(); // React Router hook to navigate between routes
  
  return (
    <div>
      <Header />
      <div className="flex h-1/3 justify-start">
        <button className = "m-0 p-0"  onClick={() => navigate(-1)}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2889/2889708.png"
            class="mx-8 w-10 h-10"
            alt=""
          /></button>
        <h1 className="text-left mt-3 mb-5">
          <text className="text-blue-700">{location.state.name}</text>
        </h1>
      </div>

      <div className="flex justify-center">

        {/* left */}
        <div>
          {/* photo */}
          <img
            src={location.state.type == "library" ? libraryPic : location.state.type == "fitness" ? gymPic: location.state.type == "hawker"? hawkerPic: <div></div>}
            class="py-10 px-10 max-w-2xl h-auto w-full"
            alt="Jurong West Public Library"
          />
          {/* location icon */}
          <div className="flex px-10 justify-start">
            <img
              src="https://cdn-icons-png.flaticon.com/128/450/450016.png"
              class="w-4 h-4 mt-2"
              alt="Location icon"
            />
            <h3 class="ml-2">Location</h3>
          </div>

          {/* location */}
          <div>
            <p class="py-5 px-10">
              {location.state.address}
            </p>
          </div>
        </div>

        {/* right */}
        <div class="py-10 px-10 w-1/2">
          {/* box */}
          <div className="border-2 bg-white px-5 w-full rounded-lg drop-shadow-lg shadow shadow-gray-500/40">
            {/* line 1 */}
            <div class="pb-2 pt-5 px-2 text-left">
              <h4>Website</h4>
            </div>
            {/* line 2 */}
            <div class="flex px-2">
              {/* globe icon */}
              <img
                src="https://cdn-icons-png.flaticon.com/512/52/52349.png"
                class="w-6 h-6 mt-2 mr-2"
                alt="Globe icon"
              />
              {/* website url */}
              <button class="mt-1 px-2 underline text-base font-normal font-['Roboto'] py-0 my-0 text-left" onClick = {event => {window.open(location.state.link === ""? "https://www.google.com": location.state.link)}}>{location.state.link === "" ? "https://www.google.com": location.state.link}</button>
            </div>
            {/* line 3 */}
            <div class=" pt-5 px-2 text-left ">
              <h4>Opening Hours</h4>
            </div>
            {/* line 4 */}
            <div class="flex mb-5">
            <div class="text-left pl-2 py-2 pr-10">
              <p>Monday, 10am-9pm
                <br />
                Tuesday, 10am-9pm
                <br />
                Wednesday, 10am-9pm
                <br />
                Thursday, 10am-9pm
                <br />
              </p>
            </div>
            <div class="text-left px-2 py-2">
              <p>
                Friday, 10am-9pm
                <br />
                Saturday, 10am-9pm
                <br />
                Sunday, 10am-9pm
                <br />
              </p>
            </div>
            </div>
          </div>
          {location.state.type == "library" ? <div class="">
            <div>
              <h3 class="ml-2 py-5">Recommended Reading Materials</h3>
            </div>

            <div class="flex justify-around space-x-10">
              {/* book 1 */}
              <div class="w-1/3">
                <img
                  src="https://img1.od-cdn.com/ImageType-100/0292-1/%7B9FC1BCAA-9AE1-4159-A980-08A51216B61E%7DImg100.jpg"
                  class="py-3 max-w-full h-auto"
                  alt="Book 1"
                />
                <h6 class="italic">The Dive</h6>
                <p class="text-sm">The Dive is a thrilling narrative nonfiction in the tradition of The Perfect Storm and Apollo 13...</p>
              </div>
              {/* book 2 */}
              <div class="w-1/3">
                <img
                  src="https://books.google.com.sg/books/publisher/content?id=RkHoCwAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&sig=ACfU3U29MShg2UeMB4iPV9tURNFRAyvfSw&w=1280"
                  class="py-3 max-w-full h-auto"
                  alt="Book 2"
                />
                <h6 class="italic">Up Close with LKY</h6>
                <p class="text-sm">Up Close with Lee Kuan Yew gathers some of the vivid memories of 37 people who have worked...</p>
              </div>
              {/* book 3 */}
              <div class="w-1/3">
                <img
                  src="https://img1.od-cdn.com/ImageType-100/0111-1/%7B7D7C059D-8F3C-4436-A059-B01C602F0823%7DImg100.jpg"
                  class="py-3 max-w-full h-auto"
                  alt="Book 3"
                />
                <h6 class="italic">The Deen Bros</h6>
                <p class="text-sm">Imagine getting dinner on the table for your family in forty-five minutes or less...</p>
              </div>
            </div>

          </div>: 
          location.state.type == "fitness" ?
          <div class="">
            <div>
              <h3 class="ml-2 py-5">Recommended Exercises for Seniors</h3>
            </div>

            <div class="flex justify-around space-x-10">
              {/* book 1 */}
              <div class="w-1/3">
                <img
                  src={bicepcurl}
                  class="py-3 max-w-full h-auto"
                  alt="Book 1"
                />
                <h6 class="italic">Bicep Curls</h6>
                <p class="text-sm">Elbow exercises like bicep curls are important for daily activities such as picking up your grocery bag, lifting up a load of laundry or even your grandchild</p>
              </div>
              {/* book 2 */}
              <div class="w-1/3">
                <img
                  src={lateralraise}
                  class="py-3 max-w-full h-auto"
                  alt="Book 2"
                />
                <h6 class="italic">Stability Ball Exercises</h6>
                <p class="text-sm">A stability ball can provide a strength-training workout that also emphasizes balance</p>
              </div>
              {/* book 3 */}
              <div class="w-1/3">
                <img
                  src={cardio}
                  class="py-3 max-w-full h-auto"
                  alt="Book 3"
                />
                <h6 class="italic">Cardio</h6>
                <p class="text-sm">Engaging in aerobic exercise for 60 minutes three times a week can help reduce depressive episodes in the elderly</p>
              </div>
            </div>

          </div>: 
          <div></div>}
          
        </div>

      </div>
      <Footer />
    </div>
  );
}
export default ActivityDetails;