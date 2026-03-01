import data from "./weather-data.json"

export {data};

export async function fetchWeatherData(city) {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=uk&include=days,alerts&key=X4RNJQQQLUF2DDDCHWWDT8JNF&contentType=json`
    
    console.log("Fetching weather data...");
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
    }

    console.log("Received weather data!");
    return await response.json();

    
}

export async function currentDayData(city) {
    const data = await fetchWeatherData(city);
    return data.days[0];
}

export function testCurrentDayData(data) {
    return data.days[0];
}