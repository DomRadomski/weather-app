import './styles.css';
import { data, currentDayData, testCurrentDayData, fetchWeatherData } from "./js/weather-data";
import { genInput, genWeatherCard } from './js/domgenerator';

document.addEventListener("DOMContentLoaded", () => {
    const content = document.querySelector(".content");
    const cities = document.querySelector(".cities");

    content.addEventListener("click", (e) => {
        const button = e.target.closest(".search-button");
        if (!button) return;
        console.log("Search clicked");
        cities.appendChild(genWeatherCard("london", 5))
    });
});



