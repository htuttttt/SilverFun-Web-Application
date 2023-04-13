// This component is named "Recommended Item" and it takes in seven props: title, description, type, pic, linkTo, url, address
// This component is used in "Home" page to recommend to the elderly about popular activities/healthcare services in Singapore
// @param {Object} props - The component's properties.
// @param {string} props.title - The name of the activity/healthcare service
// @param {string} props.decription - A brief description of the recommended activity/healthcare service
// @param {string} props.type - The type of activity/healthcare service that is being displayed
// @param {string} props.pic - The picture of activity/healthcare service that is being displayed
// @param {string} props.linkTo - The link to next page find more information about the activity/healthcare sesrvice that is being displayed
// @param {string} props.url - The external link to the website of activity/healthcare service that is being displayed
// @param {string} props.address - The address of the place activity/healthcare service that is being displayed is taking place at
// @returns {JSX.Element} - The box component

import React, {useContext} from "react";
import fitnessIcon from "../../assets/icons/fitness.svg"
import bookIcon from "../../assets/icons/book.svg"
import hawkerIcon from "../../assets/icons/Food.png"
import covidIcon from "../../assets/icons/Coronavirus.svg"
import elderlyIcon from "../../assets/icons/elderly.svg"
import hospitalIcon from "../../assets/icons/hospital.svg"
import informationIcon from "../../assets/icons/Information.svg"
import { Link } from "react-router-dom";

const RecommendedItem = ({title, description, type, pic, linkTo, url, address }) => {
  return (
    
    <div className="relative h-min w-1/5 bg-blue-100 rounded hover:scale-105 transition-all duration-150 ease-linear ">
      <Link to={linkTo}
    state={{ name: title, address:address, link: url, photo: "NA", type: type}}>
      <div className="absolute h-min w-full flex justify-end">
        <div className="bg-blue-700 w-auto text-white px-3 py-2 flex">
          Learn more now!
        </div>
      </div>
      <img src={pic} className="w-full h-56" alt="pic" />
      <div className="flex items-center pt-5 px-3 pb-3">
        {type === "fitness" ? (
          <img src={fitnessIcon} className="pr-2" alt="fitness" />
        ) : type === "library" ? (
          <img src={bookIcon} className="pr-3 pl-1" alt="library" />
        ) : type === "covid" ? (
          <img src={covidIcon} className="pr-2" alt="covid" />
        ) : type === "hawker" ? (
          <img src={hawkerIcon} className="pr-2" alt="silver infocomm" />
        ) : type === "pharmacy" ? (
          <img src={hospitalIcon} className="pr-2" alt="pharmacy" />
        ) : type === "eldercare" ? (
          <img src={elderlyIcon} className="pr-2" alt="elderly" />
        ) : <img src={elderlyIcon} className="pr-2" alt="no class" />}
        <h4>{title}</h4>
      </div>

      <p className=" px-6 pb-5 italic text-sm font-['Rubik']">{description}</p>
      </Link>
    </div>
   
  );
};

export default RecommendedItem;
