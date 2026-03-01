import './styles.css';
import { data, currentDayData, testCurrentDayData, fetchWeatherData } from "./js/weather-data";
import { genInput, genWeatherCard } from './js/domgenerator';

let checked = [];
const content = document.querySelector(".content");
const cities = document.querySelector(".cities");
const input = document.querySelector("input");
const message = document.querySelector(".message");

document.addEventListener("DOMContentLoaded", () => {

    content.addEventListener("click", (e) => {
        const button = e.target.closest(".search-button");
        let value = input.value;
        if (!button) return;
        console.log("Search clicked");

        checkCityTemp(checked, value)
    });
});

function normalizeCity(input) {
  return input.trim().toLowerCase();
}

function alreadyChecked(cities, input) {
  const city = normalizeCity(input);
  if (!city) return true; // ignore empty searches

  const alreadyExists = cities.includes(city);
  if (alreadyExists) return true;

  cities.push(input); // Adds the city if it hhasn't been checked already
  return false;
}

async function checkCityTemp(checked, value) {
    input.value = "";
    if (value && !alreadyChecked(checked, value)) {
        try {
            message.textContent = "Retrieving data...";
            let weatherData = await currentDayData(value);
            message.textContent = "Data retrieved.";
            
            let currentTemp = weatherData.temp;
            cities.appendChild(genWeatherCard(value, currentTemp));
        } catch (error) {
            console.log(error)
            message.textContent = "Unable to retrieve data...";
        }
    }
}



