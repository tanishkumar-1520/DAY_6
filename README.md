This project is a Modern Weather Forecast Web Application that tracks and displays real-time weather information for any city worldwide. It is built using clean code across three main interconnected files: index.html, style.css, and script.js.

Here is the full breakdown of what each file does in this project:



**1. index.html (The Backbone):**

This file defines the structure and layout of the app.

**a) Search Section:** Contains an input field for typing the city name and a search button featuring a Font Awesome magnifying glass icon.  Weather Info 

**b) Display:** A container that stays hidden by default (style="display: none;"). Once data is received, it dynamically reveals the city/country name, temperature, description, humidity, and wind speed.  

**c) Error Box:** A hidden error message section that displays a "City not found" warning if the user enters an invalid city name.



**2. style.css (The Visual Design) :**

This file handles the modern, user-friendly, and responsive appearance of the UI.  

**a) Glassmorphism Theme:** Uses a dark blue linear gradient background with a semi-transparent, blurred card container (backdrop-filter: blur(15px)) to give it a trendy glass look.  

**b) Smooth Animations:** Includes a fadeIn keyframe animation that smoothly transitions the weather data or error blocks onto the screen.  Responsive 

**c) Layout:** Uses media queries (@media) to adjust paddings and shift the horizontal weather columns into a vertical list on mobile screens for better readability. 




**3. script.js (The Brains):**
  
This file connects the app to the real world using JavaScript asynchronous logic.

**a) API Integration:** When a user clicks search or presses Enter, the getWeather() function sends a request to the OpenWeatherMap API using a secure fetch URL, retrieving precise metric data ($^\circ\text{C}$ and m/s).  

**b) DOM Manipulation:** It reads the JSON response from the server. If the city exists (data.cod == 200), it injects the temperature, humidity, and description directly into the HTML elements while updating visibility. 

**c) Validation: **Prevents blank searches with a pop-up alert ("Please enter a city name first!") and handles typos cleanly by hiding old weather info and showing the error box instead.  
