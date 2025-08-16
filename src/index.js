import './styles.css';


async function getWeather(location) {
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=PTYBGPYCANW6933CP9D3MMW9A`
);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json();
        console.log(data);
        return data;
    } catch(error) {
        console.error(error)
    }
}

const search = document.getElementById('location-search');
const button = document.getElementById('searchBtn');

button.addEventListener('click', () => {
    getWeather(search.value.toLowerCase())
});