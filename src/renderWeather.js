import icons from './weather-icons-svgs';

export function renderCurrentWeather(response) {
  // display location
  const location = document.querySelector('#location-name');
  location.textContent = response.address;

  // display date
  const currentDate = document.querySelector('#date');
  const rawDate = response.days[0].datetime;
  const date = new Date(rawDate);
  const formattedDate = date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });
  currentDate.textContent = formattedDate;

  //   display weather-icon
  const img = document.querySelector('.mid > div:first-child > img');
  img.src = icons[response.currentConditions.icon];

  //   display current temperature
  const temp = document.querySelector('.mid #temp');
  temp.textContent = response.currentConditions.temp + '°C';

  //   display current conditions
  const conditions = document.querySelector('mid #conditions');
  conditions.textContent = response.currentConditions.conditions;

  //   display current feelslike
  const feelslike = document.querySelector('.bot #feelslike > span:last-child');
  feelslike.textContent = response.currentConditions.feelslike + '°C';

  //   display current rain chance
}
