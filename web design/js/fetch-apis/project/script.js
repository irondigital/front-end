async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const resultBox = document.getElementById("weatherResult");

  if (city.trim() === "") {
    resultBox.innerHTML = "<p style='color:red;'>Please enter a city name.</p>";
    return;
  }

  resultBox.innerHTML = "Loading...";

  try {
    // 1️⃣ Get latitude & longitude from city name
    const geoURL = `https://geocoding-api.open-meteo.com/v1/search?name=${city}`;
    const geoRes = await fetch(geoURL);
    const geoData = await geoRes.json();

    if (!geoData.results || geoData.results.length === 0) {
      resultBox.innerHTML = "<p style='color:red;'>City not found.</p>";
      return;
    }

    const { latitude, longitude, name, country } = geoData.results[0];

    // 2️⃣ Get weather using coordinates
    const weatherURL = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;

    const weatherRes = await fetch(weatherURL);
    const weatherData = await weatherRes.json();

    const weather = weatherData.current_weather;

    // 3️⃣ Display data
    resultBox.innerHTML = `
      <h3>${name}, ${country}</h3>
      <p>Temperature: ${weather.temperature}°C</p>
      <p>Wind Speed: ${weather.windspeed} km/h</p>
      <p>Weather Code: ${weather.weathercode}</p>
    `;
  } catch (error) {
    resultBox.innerHTML = "<p style='color:red;'>Error fetching data.</p>";
    console.log(error);
  }
}
