import icons from './weather-icons-svgs';

export function renderCurrentWeather(response) {
  //refactor code, create elements dynamically
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
  const temp = document.querySelector('#temp');
  temp.textContent = response.currentConditions.temp + '°C';

  //   display current conditions
  const conditions = document.querySelector('#conditions');
  conditions.textContent = response.currentConditions.conditions;

  //   display current feelslike
  const feelslike = document.querySelector('#feelslike');
  feelslike.textContent = response.currentConditions.feelslike + '°C';

  //   display current rain chance
  const rainchance = document.querySelector('#precipprob');
  rainchance.textContent = response.currentConditions.precipprob + '%';

  // display windspeed
  const windspeed = document.querySelector('#windspeed');
  windspeed.textContent = response.currentConditions.windspeed + ' kph';
}

export function renderForecast(response) {
  for (let i = 0; i < 4; i++) {
    const img = document.querySelector(`#div${i} > img`);
    const temp = document.querySelector(`#div${i} > .temp`);
    const conditions = document.querySelector(`#div${i} > .conditions`);

    img.src = icons[response.days[i].icon];
    temp.textContent = response.days[i].temp;
    conditions.textContent = response.days[i].conditions;
  }
}
