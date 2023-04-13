// This component is named "GMaps" and it is used to display a Google Map Block of Singapore and pan to the user's current location
// This component is used in "Home", "Activities" and "Heathcare" pages

import React from "react";
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
    KmlLayer,
} from "@react-google-maps/api";
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
} from "@reach/combobox";
import mapStyles from "../Styles/mapStyles";
import compass from "../assets/icons/compass.svg";
import { useActivityLocationUpdate } from "../ActivityLocationContext"


// libraries to be loaded from the Google Maps API
// initialises the "places" library which is used for autocomplete search and location data
const libraries = ["places"];

// styling for the map container
const mapContainerStyle = {
    height: "500px",
    width: "1000px",
};

// custom options for the Google Map
const options = {
    styles: mapStyles, // custom styles for the map
    disableDefaultUI: true, // hide the default UI components
    zoomControl: true, // show zoom control
};

// default center coordinates for the map
const center = {
    lat: 1.3521,
    lng: 103.8198,
};

// main component for the Google Map
export default function GMaps(url1, state1, url2, state2, url3, state3, onClickHandler) {
    // load the Google Maps API
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GMAPS_API_KEY, // API key
        libraries, // libraries to be loaded
    });

    // reference to the map
    const mapRef = React.useRef();
    
    // callback function to be executed when the map is loaded
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    }, []);

    // callback function to pan the map to a given location
    const panTo = React.useCallback(({ lat, lng }) => {
        mapRef.current.panTo({ lat, lng });
        mapRef.current.setZoom(14);
    }, []);

    // show an error message if the Google Maps API fails to load
    if (loadError) return "Error";

    // show a loading message while the Google Maps API is being loaded
    if (!isLoaded) return "Loading...";

    return (
        <div>
            {console.log(url1)}
            <Locate panTo={panTo} />
            <div className="mb-4">
                <GoogleMap
                    id="map"
                    mapContainerStyle={mapContainerStyle}
                    zoom={11.5}
                    center={center}
                    options={options}
                    resetBoundsOnResize={true}
                    onClick={onClickHandler}
                    onLoad={onMapLoad}
                >
                    {url1.state1 ? <KmlLayer url={String(url1.url1)} /> : <div />}
                    {url1.state2 ? <KmlLayer url={String(url1.url2)} /> : <div />}
                    {url1.state3 ? <KmlLayer url={String(url1.url3)} /> : <div />}

                </GoogleMap>
            </div>
            

        </div>
    );
}

// This component renders a button to pan the map to the user's current location
function Locate({ panTo }) {
    return (
    <div className="w-full flex justify-center">
        <button
            className=" w-max flex hover:drop-shadow-xl"
            onClick={() => {
                 // Get the user's current position when button is clicked
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        // If the user's location is found, pan the map to that location
                        panTo({
                            lat: position.coords.latitude,
                            lng: position.coords.longitude,
                        });
                    },
                    // If the user's location cannot be found, do nothing
                    () => null
                );
            }}
        >
            <img classname="p-2 z-10 px-10" src={compass} alt="compass" />
            <p classname="w-max text-sm">Pan to current location</p>
        </button></div>
    );
}