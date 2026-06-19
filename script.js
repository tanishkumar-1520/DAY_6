async function getWeather() {
    const city = document.getElementById("city").value.trim();
    const apiKey = "b3eae25a346ef89c09037e663aa7bf66";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const weatherInfo = document.getElementById("weatherInfo");
    const errorBox = document.getElementById("errorBox");

    if (city === "") {
        alert("Please enter a city name first!");
        return;
    }

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod == 200) {

            errorBox.style.display = "none";
            weatherInfo.style.display = "block";

            document.getElementById("cityName").innerText = data.name + ", " + data.sys.country;
            document.getElementById("temp").innerText = Math.round(data.main.temp) + "°C";
            document.getElementById("desc").innerText = data.weather[0].description;
            document.getElementById("humidity").innerText = data.main.humidity + "%";
            document.getElementById("wind").innerText = data.wind.speed + " m/s";
        } else {

            weatherInfo.style.display = "none";
            errorBox.style.display = "block";
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        weatherInfo.style.display = "none";
        errorBox.style.display = "block";
    }
}

document.getElementById("city").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        getWeather();
    }
});