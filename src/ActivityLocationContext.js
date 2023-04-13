// This module provides a context provider and custom hooks to manage the current location of the user's activity. 
// It uses the browser's geolocation API to get the current location.

import React, { useContext, useState, useEffect } from "react";

// Context object to provide the current location of the user's activity.
const ActivityLocationContext = React.createContext()

// Context object to provide a function to update the location of the user's activity.
const ActivityLocationUpdateContext = React.createContext()

// Custom hook to get the current location of the user's activity.
export function useActivityLocation() {
    return useContext(ActivityLocationContext)
}

// Custom hook to get a function to update the location of the user's activity.
export function useActivityLocationUpdate() {
    return useContext(ActivityLocationUpdateContext)
}

export function ActivityLocationProvider({ children }) {
    // setInputCoord is a function to update the location coordinates
    const [inputCoord, setInputCoord] = useState({lat: null, lng: null }); // set default latitude and longitude as null
    const [location, setLocation] = useState({}); 

    useEffect(() => {
        // Get the current location using the browser's geolocation API
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setLocation({ latitude, longitude });
                setInputCoord({ lat: latitude, lng: longitude });
            },
            (error) => {
                console.error(error);
            }
            );
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
        }, []);

    return (
        <ActivityLocationContext.Provider value={inputCoord}>
            <ActivityLocationUpdateContext.Provider value={setInputCoord}>
                {children}
            </ActivityLocationUpdateContext.Provider>
        </ActivityLocationContext.Provider>
    )
}