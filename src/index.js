import './styles.css';
import { renderCurrentWeather, renderError } from './renderWeather';

const search = document.getElementById('location-search');
const form = document.querySelector('form');
const weatherContainer = document.querySelector('#weather-container');

async function getWeather(location) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=PTYBGPYCANW6933CP9D3MMW9A`,
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
    const data = await response.json();
    return data;
  }
}

form.addEventListener('submit', (e) => {
  if (!form.checkValidity()) {
    return;
  }
  e.preventDefault();
  // setTimeout(() => {
  //   fetch(
  //     `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${search.value}?unitGroup=metric&key=PTYBGPYCANW6933CP9D3MMW9A`,
  //   )
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       renderCurrentWeather(data);
  //     })
  //     .catch((err) => {
  //       renderError(err.message);
  //     });
  // }, 1000);
  weatherContainer.innerHTML = "<div class='loader'></div>";
  getWeather(search.value)
    .then((response) => renderCurrentWeather(response))
    .catch((err) => renderError(err.message));
});
