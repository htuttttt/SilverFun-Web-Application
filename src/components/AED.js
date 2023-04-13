// This component is named "AED" and it displays emergency contact information for the ambulance and police

import React from "react";
import ambulance from "../assets/icons/Ambulance.svg"
import police from "../assets/icons/Police.svg"


const AED = () => {
  return (
    // The following div container displays the emergency contact information
    <div className="w-44 h-min bg-white rounded border border-2 border-red-700 mr-20 p-5">
            <p className="font-['Rubik'] text-sm text-center">Emergency Contacts</p>
            <div className="flex items-center pt-3 pb-2">
              <img src={ambulance} className="px-5" alt="ambulance" />
              <p className="font-['RubikBold'] text-">995</p>
            </div>
            <div className="flex items-center">
              <img src={police} className="px-5" alt="police" />
              <p className="font-['RubikBold'] text-">999</p>
            </div>
          </div>
  );
};

export default AED;
