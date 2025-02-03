const apiKey = '890e78e15a39426aa4582403250302';
const city = 'London';

function fetchWeather() {
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.querySelector("#weather_city").textContent = data.location.name || 'N/A';
            document.querySelector("#weather_temperature").textContent = `${data.current.temp_c}°C` || 'N/A';
            document.querySelector("#weather_condition").textContent = data.current.condition.text || 'N/A';
        })
        .catch(error => console.error('Error fetching weather data:', error));
}

document.getElementById("fetchWeather").addEventListener("click", fetchWeather);
