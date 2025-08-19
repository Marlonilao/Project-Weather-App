import icons from './weather-icons-svgs';

export function renderCurrentWeather(response) {
  const weatherContainer = document.getElementById('weather-container');
  weatherContainer.innerHTML = '';

  const currentConditionsContainer = document.createElement('div');
  currentConditionsContainer.id = 'current-conditions';
  weatherContainer.appendChild(currentConditionsContainer);

  const divTop = document.createElement('div');
  divTop.className = 'top';
  currentConditionsContainer.appendChild(divTop);

  // display location
  const locationName = document.createElement('h2');
  locationName.textContent = response.address;
  divTop.appendChild(locationName);

  // display date
  const dateElement = document.createElement('p');
  dateElement.id = 'date';
  const rawDate = response.days[0].datetime;
  const date = new Date(rawDate);
  const formattedDate = date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });
  dateElement.textContent = formattedDate;
  divTop.appendChild(dateElement);

  const divMid = document.createElement('div');
  divMid.className = 'mid';
  currentConditionsContainer.appendChild(divMid);

  //   display weather-icon
  const imageContainer = document.createElement('div');
  divMid.appendChild(imageContainer);

  const weatherImage = document.createElement('img');
  weatherImage.src = icons[response.currentConditions.icon];
  imageContainer.appendChild(weatherImage);

  //   display current temperature
  const tempContainer = document.createElement('div');
  divMid.appendChild(tempContainer);

  const temp = document.createElement('p');
  temp.id = 'temp';
  temp.textContent = response.currentConditions.temp + '°C';
  tempContainer.appendChild(temp);

  //   display current conditions
  const conditions = document.createElement('p');
  conditions.id = 'conditions';
  conditions.textContent = response.currentConditions.conditions;
  tempContainer.appendChild(conditions);

  const divBot = document.createElement('div');
  divBot.className = 'bot';
  currentConditionsContainer.appendChild(divBot);

  //   display current feelslike
  const feelslike = document.createElement('p');
  feelslike.id = 'feelslike';
  feelslike.textContent = `FEELS LIKE ${response.currentConditions.feelslike}°C`;
  divBot.appendChild(feelslike);

  //   display current rain chance

  const precipprob = document.createElement('p');
  precipprob.id = 'precipprob';
  precipprob.textContent = `RAIN CHANCE ${response.currentConditions.precipprob}%`;
  divBot.appendChild(precipprob);

  // display windspeed
  const windspeed = document.createElement('p');
  windspeed.id = 'windspeed';
  windspeed.textContent = `WIND SPEED ${response.currentConditions.windspeed} kph`;
  divBot.appendChild(windspeed);

  renderForecast(response);
}

function renderForecast(response) {
  const weatherContainer = document.getElementById('weather-container');
  const forecastContainer = document.createElement('div');
  forecastContainer.id = 'forecast';
  weatherContainer.appendChild(forecastContainer);

  for (let i = 1; i < 5; i++) {
    const div = document.createElement('div');
    const day = document.createElement('p');
    const img = document.createElement('img');
    const temp = document.createElement('p');
    const conditions = document.createElement('p');

    forecastContainer.appendChild(div);
    div.appendChild(day);
    div.appendChild(img);
    div.appendChild(temp);
    div.appendChild(conditions);

    const rawDate = response.days[i].datetime;
    const date = new Date(rawDate);
    const formattedDate = date.toLocaleDateString('en-US', {
      weekday: 'short',
    });
    day.textContent = formattedDate.toUpperCase();
    img.src = icons[response.days[i].icon];
    temp.textContent = response.days[i].temp;
    conditions.textContent = response.days[i].conditions;
  }
}

export function renderError(response) {
  const weatherContainer = document.getElementById('weather-container');
  weatherContainer.innerHTML = '';

  const div = document.createElement('div');
  div.id = 'error-container';
  div.textContent = 'No data available. Check your location.';

  weatherContainer.appendChild(div);
}
