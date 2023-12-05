import React, { useState,useEffect } from "react";
import axios from "axios";
import "./styles.css";
import Header from "./header";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import WeatherCard from "./weather"

const API_KEY = "78e0438e69d94af0830135457232911";
const API_URL = "https://api.weatherapi.com/v1/forecast.json";

export default function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    return () => {
      clearTimeout(timer);
    };
  }, [timer]);
  const handleLocation = async (e) => {
    let timerId = setTimeout(async () => {
    try {
      const response = await axios.get(
        `${API_URL}?key=${API_KEY}&q=${e.target.value}`,
      );
      setWeatherData(response.data);
      setError(null);
    } catch (error) {
      setWeatherData(null);
      setError("No matching location found.");
    }
  },500);
  setTimer(timerId);
  };
  return (
    <div>
      <Header />
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "50%" },
          textAlign: "center",
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="outlined-search"
            label="Enter location"
            type="search"
            onChange={handleLocation}
          />
        </div>
        {error && <h2 style={{ color: "red" }}>{error}</h2>}
        {weatherData && (
          <div>
            <h2>{weatherData.location.name}, {weatherData.location.country}</h2>
            </div>
        )}
        {weatherData && (
         
          <WeatherCard
            icon={weatherData.current.condition.icon}
            tempC={weatherData.current.temp_c}
            tempF={weatherData.current.temp_f}
            condition={weatherData.current.condition.text}
            windSpeed={weatherData.current.wind_kph}
            humidity={weatherData.current.humidity}
            cloudCoverage={weatherData.current.cloud}
            lastUpdated={weatherData.current.last_updated}
          />
        )}
      </Box>
    </div>
  );
}
