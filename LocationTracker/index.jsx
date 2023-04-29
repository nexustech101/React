import React, { useState, useEffect } from "react";

const LocationTracker = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      navigator.geolocation.getCurrentPosition((position) => {
        const newLocation = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          timestamp: position.timestamp,
        };
        localStorage.setItem("location", JSON.stringify(newLocation));
        setLocation(newLocation);
      });
    }, 1000); // 15 minutes in milliseconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{margin: '5rem 0'}}>
      <h2>Location Tracker</h2>
      <p>Latitude: {location?.latitude}</p>
      <p>Longitude: {location?.longitude}</p>
      <p>Last Updated: {location?.timestamp}</p>
    </div>
  );
};

export default LocationTracker;
