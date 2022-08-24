import React, { useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherInfoComponent";

export const WeatherIcons = {
  "01d": "/assets/sunny.png",
  "01n": "/assets/night.png",
  "02d": "/assets/day.png",
  "02n": "/assets/cloudy-night.png",
  "03d": "/assets/cloudy.png",
  "03n": "/assets/cloudy.png",
  "04d": "/assets/broken-clouds.png",
  "04n": "/assets/cloudy-night.png",
  "09d": "/assets/rain.png",
  "09n": "/assets/rain-night.png",
  "10d": "/assets/rain.png",
  "10n": "/assets/rain-night.png",
  "11d": "/assets/storm.png",
  "11n": "/assets/storm.png",
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 381px;
  padding: 40px 50px;
  margin: auto;
  border-radius: 15px;
  box-shadow: 0 3px 6px 0 #555;
  background: white;
  border-top: 9px solid black;
  margin-bottom:10px;
`;

const AppLabel = styled.span`
  color: white;
  font-size: 18px;
  font-weight: bold;
  text-align:center;
  background-color: black;
  display:block;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  flex-grow: 0;
	flex-shrink: 1;
	flex-basis: auto;
	align-self: auto;	
  width: 461px;
  position:top;
  padding:10px;
  margin: -40px;
  
`;


const CloseButton = styled.span`
  padding: 2px 3px;
  background-color: black;
  border-radius: 50%;
  color: white;
  position: absolute;
  
`;


function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e850b1d586c6c9fbf349de6f1c46aaf6`,
    );
    updateWeather(response.data);
  };


  return (
    <Container>
      
      <AppLabel><h1 align="center">Weather App in ReactJS</h1></AppLabel>
      <br/><br/>
   
      {city && weather ? (
        <WeatherComponent weather={weather} city={city} />
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </Container>
  );
}

export default App;
