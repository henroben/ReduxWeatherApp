import axios from 'axios';

const API_KEY = "ff5c632a1ce5af01b568a76462afa988";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

    const url = `${ROOT_URL}&q=${city},uk&units=metric`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}