// weather-app.js

// Function to fetch weather data from OpenWeatherMap API
function getWeather() {
    var apiKey = 'YOUR_OPENWEATHERMAP_API_KEY'; // Replace with your API key
    var cityInput = document.getElementById('cityInput').value;

    if (cityInput.trim() === "") {
        alert("Please enter a city name");
        return;
    }

    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again.');
        });
}

// Function to display weather information on the webpage
function displayWeather(data) {
    var weatherInfo = document.getElementById('weatherInfo');

    var cityName = data.name;
    var temperature = data.main.temp;
    var description = data.weather[0].description;

    weatherInfo.innerHTML = `
        <h2>${cityName}</h2>
        <p>Temperature: ${temperature}°C</p>
        <p>Description: ${description}</p>
    `;
}
