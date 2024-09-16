// OpenWeather API Key
const apiKey = d5370a7ae025866d086d230fc43075ef; // Replace 'YOUR_API_KEY' with your actual OpenWeather API key.

document.getElementById('weatherForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const city = document.getElementById('cityInput').value;
    getWeather(city);
});

function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                alert("City not found");
                return;
            }

            // Display weather info
            document.getElementById('cityName').textContent = data.name;
            document.getElementById('temperature').textContent = `Temperature: ${data.main.temp} °C`;
            document.getElementById('description').textContent = `Description: ${data.weather[0].description}`;
            document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
            document.getElementById('windSpeed').textContent = `Wind Speed: ${data.wind.speed} km/h`;
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
        });
}
