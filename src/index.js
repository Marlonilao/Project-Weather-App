import './styles.css';
import icons from './weather-icons-svgs';
import { renderCurrentWeather, renderForecast } from './renderWeather';

const search = document.getElementById('location-search');
const form = document.querySelector('form');
const output = document.getElementById('weather-container');

async function getWeather(location) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=PTYBGPYCANW6933CP9D3MMW9A`,
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
}

form.addEventListener('submit', (e) => {
  if (!form.checkValidity()) {
    return;
  }

  e.preventDefault();
  getWeather(search.value).then((response) => {
    renderCurrentWeather(response);
    renderForecast(response);
  });
});
