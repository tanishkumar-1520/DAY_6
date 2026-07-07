async function getWeather() {
    const city = document.getElementById("city").value.trim();
    const apiKey = "b3eae25a346ef89c09037e663aa7bf66";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const weatherInfo = document.getElementById("weatherInfo");
    const errorBox = document.getElementById("errorBox");

    if (city === "") {
        return; // Soft bypass if empty
    }

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod == 200) {
            errorBox.style.display = "none";
            weatherInfo.style.display = "block";

            // Basic details setup
            document.getElementById("cityName").innerText = `${data.name}, ${data.sys.country}`;
            document.getElementById("temp").innerText = `${Math.round(data.main.temp)}°C`;
            document.getElementById("desc").innerText = data.weather[0].description;
            
            // Advanced metrics setup
            document.getElementById("feelsLike").innerText = `${Math.round(data.main.feels_like)}°C`;
            document.getElementById("humidity").innerText = `${data.main.humidity}%`;
            document.getElementById("wind").innerText = `${data.wind.speed} m/s`;
            document.getElementById("pressure").innerText = `${data.main.pressure} hPa`;

            // 1. Dynamic Icon setup from OpenWeather API
            const iconCode = data.weather[0].icon;
            document.getElementById("weatherIcon").src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

            // 2. Realistic Dynamic Background Change based on Weather Conditions
            updateBackground(data.weather[0].main);

        } else {
            showError();
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        showError();
    }
}

// Helper function to show errors properly
function showError() {
    document.getElementById("weatherInfo").style.display = "none";
    document.getElementById("errorBox").style.display = "block";
    // Reset background to default dark professional look on error
    document.body.style.background = "linear-gradient(135deg, #0f2027, #203a43, #2c5364)";
}

// Function to handle body background transitions based on weather status
function updateBackground(status) {
    let backgroundStyle = "";
    
    switch (status.toLowerCase()) {
        case 'clouds':
            backgroundStyle = "linear-gradient(135deg, #617ca3, #3a485c)"; // Slate Cloudy Grey
            break;
        case 'rain':
        case 'drizzle':
            backgroundStyle = "linear-gradient(135deg, #203a43, #0f2027)"; // Dark Rainy Blue
            break;
        case 'clear':
            backgroundStyle = "linear-gradient(135deg, #2193b0, #6dd5ed)"; // Bright Sky Blue
            break;
        case 'snow':
            backgroundStyle = "linear-gradient(135deg, #83a4d4, #b6fbff)"; // Icy Snowy White
            break;
        case 'thunderstorm':
            backgroundStyle = "linear-gradient(135deg, #141e30, #243b55)"; // Deep Stormy Midnight
            break;
        default:
            backgroundStyle = "linear-gradient(135deg, #1e3c72, #2a5298)"; // Standard Professional Blue
            break;
    }
    
    document.body.style.background = backgroundStyle;
}

// Search key trigger
document.getElementById("city").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        getWeather();
    }
});