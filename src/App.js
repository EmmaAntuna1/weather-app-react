import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
  <div className="App">
    <div className="container">
    <Weather defaultCity="San Antonio" />
    <footer>
      This project was coded by Emma Antuna and is{" "}
    <a href="https://github.com/EmmaAntuna1/weather-app-react"
    target="_blank"
    rel="noopener noreferrer">
       open-sourced on github
    </a>
    {" "}and 
    <a href="https://stupefied-mirzakhani-578f0f.netlify.app/" target="_blank"
    rel="noopener noreferrer"> 
    {" "}hosted on Netlify
    </a>
    </footer>
    </div>
  </div>
  );
}


