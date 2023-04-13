// This component is named "Boxes" and it is a functional component that takes in three props: icon, text1 and text2
// @param {Object} props - The component's properties.
// @param {string} props.icon - The URL of the icon to display on the left of the box.
// @param {string} [props.text1="first line"] - The first line of text to display inside the box.
// @param {string} [props.text2="second line"] - The second line of text to display inside the box.
// @returns {JSX.Element} - The box component
// The component can be reused to display different information by passing in different props.
// This component is used mainly in "Activities" adn "Healthcare" pages to display the activities and healthcare services available under each filter

import React from "react";
import Bus from "../assets/icons/Bus.png";

const Boxes = ({ icon, text1 = "first line", text2 = "second line", time = "X Min"}) => {
    return (
        <button class = "border-2 border-gray-400 bg-white px-5 w-full rounded-lg flex items-center text-left text-sm rounded-md  hover:scale-105 transition-all duration-150 ease-linear drop-shadow-lg">
        <div class = "flex flex-row space-x-2 w-full">
            <img src = {icon}/>
            <div class = "flex-col w-full"> 
                <div class = "text-lg ">{text1}</div>
                <div class = "flex flex-row justify-between">
                    <div class = "text-gray-500 text-sm">{text2}</div>
                    <div class = "flex flex-row space-x-1">
                    </div>
                </div>
                </div>
            </div>
        </button>
    );

};
export default Boxes;

