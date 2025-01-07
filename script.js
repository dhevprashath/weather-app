const apiKey = 'c3a6ee2a38ca45f66e8cd61a51772b7c'; // Replace with your OpenWeatherMap API key

document.getElementById('getWeather').addEventListener('click', async () => {
  const city = document.getElementById('city').value;
  if (!city) {
    alert('Please enter a city name');
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${c3a6ee2a38ca45f66e8cd61a51772b7c}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('City not found');
    }

    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    alert(error.message);
  }
});

function displayWeather(data) {
  document.getElementById('cityName').textContent = `Weather in ${data.name}`;
  document.getElementById('description').textContent = `Description: ${data.weather[0].description}`;
  document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
  document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
}
