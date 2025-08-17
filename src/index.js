import './styles.css';

const search = document.getElementById('location-search');
const button = document.getElementById('searchBtn');
const output = document.getElementById('weather-container')

async function getWeather(location) {
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=PTYBGPYCANW6933CP9D3MMW9A`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }   
        const data = await response.json();
        return data
    } catch(error) {
        console.error(error)
        return error
    }
}

button.addEventListener('click', () => {
    getWeather(search.value).then(response => {
        console.log(response, response.currentConditions, response.days[1], response.days[2], response.days[3]);
    })
});