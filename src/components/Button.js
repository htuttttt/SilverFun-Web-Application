// This component is named "Button" and it is a reusable button component with an optional icon and customizable text.
// @param {Object} props - The component's properties.
// @param {string} props.icon - The URL of the icon to display on the left of the button.
// @param {string} [props.text="Button"] - The text to display inside the button.
// @param {function} props.onClickHandler - The function to call when the button is clicked.
// @param {string} [props.classNames=""] - Additional CSS class names to apply to the button.
// @returns {JSX.Element} - The button component.

import React from "react";

const Button = ({ icon, text = "Button", onClickHandler, classNames }) => {
  return (
    <button
      className={`${classNames} ml-4 px-5 pr-6 py-3 text-black flex items-center rounded-md  hover:scale-105 transition-all duration-150 ease-linear bg-white drop-shadow-lg `}
      onClick={onClickHandler}
    >
        <img src={icon}/>
        <text className = "ml-2">
        {text}
        </text>
    </button>
  );
};

export default Button;
