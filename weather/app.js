function getWeather() {
    // Replace 'YOUR_API_KEY' with your OpenWeatherMap API key
    const apiKey = '63ea591e8abb6bf0f13dcb4dd92bd592';
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

    const cityInput = document.getElementById('city-input');
    const city = cityInput.value;

    if (city === '') {
        alert('Please enter a city');
        return;
    }

    fetch(`${apiUrl}?q=${city}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            displayWeatherData(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again.');
        });
}

function displayWeatherData(data) {
    const weatherDataContainer = document.getElementById('weather-data');
    const temperature = Math.round(data.main.temp - 273.15); // Convert from Kelvin to Celsius

    const weatherHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>${data.weather[0].description}</p>
        <p>Temperature: ${temperature}°C</p>
    `;

    weatherDataContainer.innerHTML = weatherHTML;
}
