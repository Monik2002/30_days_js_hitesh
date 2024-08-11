// Day 24: Project 1 - Weather App
// Tasks/Activities:
// Activity 1: Setting Up the Project

// Task 1: Initialize a new project directory and set up the basic HTML structure for the weather app.
// Task 2: Add a basic CSS file to style the weather app, including a container for displaying weather information.
// Activity 2: Fetching Weather Data

// Task 3: Use the fetch API to get current weather data from a public weather API (e.g., OpenWeatherMap). Log the response data to the console.

fetch('https://api.openweathermap.org/data/2.5/weather?q="city"&appid"API_KEY"').then(response => {
    if (response.ok) {
        return response.json();
    } else {
        throw new Error('Failed to fetch data');
    }
}).then(data => {
    console.log(data);
}).catch(error => {
    console.error(error);
});

// Note: Replace "city" with the desired city name and "API_KEY" with your OpenWeatherMap API key.

// Task 4: Parse the weather data and display the current temperature, weather condition, and city name on the web page.

// Activity 3: Adding Search Functionality

// Task 5: Add an input field and a search button to the HTML structure. Style the input and button using CSS.
// Task 6: Write a function to fetch and display weather data for a city entered in the search input field. Log any errors to the console.
// Activity 4: Displaying a 5-Day Forecast

// Task 7: Use the fetch API to get a 5-day weather forecast from the public weather API. Log the response data to the console.
// Task 8: Parse the forecast data and display the temperature and weather condition for each day in the forecast on the web page.
// Activity 5: Enhancing the UI

// Task 9: Add icons or images to represent different weather conditions (e.g., sunny, rainy, cloudy) based on the weather data.
// Task 10: Add CSS animations or transitions to make the weather app more interactive and visually appealing.
// Feature Request:
// Weather Data Fetching Script: Write a script that fetches current weather data from a public API and displays the temperature, weather condition, and city name on the web page.
// Search Functionality Script: Create a script that allows users to search for weather information by city name and displays the results.
// 5-Day Forecast Script: Write a script that fetches and displays a 5-day weather forecast on the web page.
// UI Enhancement Script: Create a script that adds icons for different weather conditions and includes CSS animations or transitions for a better user experience.
// Achievement:
// By the end of these activities, students will:

// Set up a basic project structure with HTML and CSS.
// Use the fetch API to retrieve and display weather data from a public API.
// Implement search functionality to fetch weather data for different cities.
// Display a 5-day weather forecast using data from a public API.
// Enhance the user interface with icons and animations to make the weather app more interactive and visually appealing.