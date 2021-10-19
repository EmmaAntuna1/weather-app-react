import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
  <div className="App">
    <div className="container">
    <Weather />
    <footer>
      This project was coded by Emma Antuna and is{" "}
    <a href="https://github.com/EmmaAntuna1/weather-app-react"
    target="_blank"
    >
       open-sourced on github
    </a>
    </footer>
    </div>
  </div>
  );
}


