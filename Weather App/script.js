// Selecting elements
const weatherForm = document.querySelector(".WeatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");

const apikey = "1ad8ff0a1158ce6c68851dfd28a1c54b";

// Event listener
weatherForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const city = cityInput.value.trim(); // trim to remove leading/trailing spaces

    if (city === "") {
        displayError("Please enter a city");
        return; // stop further execution
    }

    try {
        const weatherData = await getWeatherData(city);
        displayWeatherInfo(weatherData);
    } catch (error) {
        displayError("City not found. Please enter a valid city.");
    }
});


// Get weather data from OpenWeatherMap
async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
        throw new Error("Failed to fetch weather");
    }

    const data = await response.json();
    return data;
}

// Display weather info in the card
function displayWeatherInfo(data) {
    const { name } = data;
    const temp = Math.round(data.main.temp);
    const humidity = data.main.humidity;
    const description = data.weather[0].description;
    const weatherId = data.weather[0].id;
    const emoji = getWeatherEmoji(weatherId);

    card.innerHTML = `
        <h1 class="cityDisplay">${name}</h1>
        <p class="tempDisplay">${temp}°C</p>
        <p class="humidityDisplay">Humidity: ${humidity}%</p>
        <p class="descDisplay">${description}</p>
        <p class="weatherEmoji">${emoji}</p>
    `;
    card.style.display = "flex";
}

// Emoji based on weather condition code
function getWeatherEmoji(weatherId) {
    if (weatherId >= 200 && weatherId < 300) {
        return "⛈️"; // Thunderstorm
    } else if (weatherId >= 300 && weatherId < 500) {
        return "🌦️"; // Drizzle
    } else if (weatherId >= 500 && weatherId < 600) {
        return "🌧️"; // Rain
    } else if (weatherId >= 600 && weatherId < 700) {
        return "❄️"; // Snow
    } else if (weatherId >= 700 && weatherId < 800) {
        return "🌫️"; // Atmosphere
    } else if (weatherId === 800) {
        return "☀️"; // Clear
    } else if (weatherId > 800 && weatherId < 900) {
        return "☁️"; // Clouds
    } else {
        return "❓"; // Unknown
    }
}

// Display error message in card
function displayError(message) {
    card.innerHTML = `<p class="errorDisplay">${message}</p>`;
    card.style.display = "flex";
}
