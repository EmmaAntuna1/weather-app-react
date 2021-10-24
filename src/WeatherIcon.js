import React from "react";
import ReactAnimatedWeather from "react-animated-weather";


export default function WeatherIcon(props) {
    const codeMapping = {
        "01d": "CLEAR_DAY",
        "01n": "CLEAR_NIGHT",
        "02n": "PARTLY_CLOUDY_NIGHT",
        "02d": "PARTLY_CLOUDY_DAY",
        "03n": "PARTLY_CLOUDY_NIGHT",
        "03d": "PARTLY_CLOUDY_DAY",
        "04d": "CLOUDY",
        "04n": "CLOUDY",
        "09d": "RAIN",
        "09n": "RAIN",
        "010n": "RAIN",
        "010d": "RAIN",
        "011n": "RAIN",
        "011d": "RAIN",
        "013n": "SNOW",
        "013d": "SNOW",
        "050n": "FOG",
        "050d": "FOG",
    

    };

    return (
        <ReactAnimatedWeather
        icon={codeMapping[props.code]}
        color="#1e1e1e"
        size={52}
        animate={true}
        />
    );
}