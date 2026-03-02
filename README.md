# Weather App

### A client-side weather application that fetches and displays real-time forecast data using a third-party REST API.

[Live Demo](https://domradomski.github.io/weather-app/)

## 🚀 Overview

The Weather App allows users to enter a city name and retrieve current weather information from the Visual Crossing Weather API. Data is requested and processed asynchronously, and search history prevents redundant API calls during a session.

Key features:

  - Asynchronous data fetching using async/await

  - Fetching live weather data from a third-party API

  - Promise-based error handling

  - Dynamic DOM updates based on fetched results

  - A simple user interaction model (search and display)

## 🧱 Architecture

    src/
    ├── js/
    │   ├── domgenerator.js    ← DOM helper functions
    │   ├── weather-data.js    ← API interaction & data utilities
    │   └── weather-data.json    ← Example/mock weather data
    ├── index.js    ← Application logic & event handling
    └── index.html

## 📡 Third-Party API

This app integrates the Visual Crossing Weather API to fetch forecast data.

## 📚 What This Project Taught Me

This project deepened my understanding of asynchronous JavaScript and working with real-world APIs. I gained hands-on experience handling Promises and async/await, parsing JSON responses, and structuring UI updates based on dynamic data. Building a search interface with error handling taught me how to anticipate edge cases and improve user experience with clear feedback. Overall, it strengthened my confidence in integrating third-party services and managing asynchronous control flow in client-side apps.
