async function getWeather(){

    const city = document.getElementById("city").value;

    const apiKey = "83ea186770056106f173b54f50171a8b";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);
    const data = await response.json();

    if(data.cod == 200){

        document.getElementById("cityName").innerText =
        data.name + ", " + data.sys.country;

        document.getElementById("temp").innerText =
        data.main.temp + "°C";

        document.getElementById("desc").innerText =
        data.weather[0].description;

        document.getElementById("humidity").innerText =
        "Humidity : " + data.main.humidity + "%";

        document.getElementById("wind").innerText =
        "Wind Speed : " + data.wind.speed + " m/s";

    }
    else{
        alert("City not found");
    }
}