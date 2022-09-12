import React, { useEffect, useState } from "react";
import { useGeolocated } from "react-geolocated";

const useGeolocation = () => {
    const [location, setLocation]=useState({
        loaded:false,
        coordinates:{lat:"", lng:""}
    });

    const onSucess=location =>{
        setLocation({
            loaded:true,
            coordinates:{
                lat:location.coords.latitude,
                lng:location.coords.longitude,
            }
        })
    }
    const onError= error=>{
        setLocation({
            loaded:true,
            error,
        })
    }
    useEffect(()=>{
        if(!("geolocation" in navigator)){
            onError(
                {
                    code:0,
                    message:"Geolocation not supported",
                }
            )
        }
        navigator.geolocation.getCurrentPosition(onSucess, onError)
    },[])
    return location
};

export default useGeolocation;