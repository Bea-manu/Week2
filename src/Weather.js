import React from "react";

export default function Weather() {
  return (
    <div class="weather-app">
      <header>
        <form class="search-form" id="search-form">
          <input
            type="search"
            placeholder="Enter a city"
            required
            id="search-form-input"
            class="search-form-input"
          />
          <input type="submit" value="search" class="search-form-button" />
        </form>
      </header>

      <main>
        <div class="weather-app-data">
          <h1 class="weather-app-city" id="city">
            Paris
          </h1>
          <p class="weather-app-details">
            <span id="time">Tuesday 14:45</span>,
            <span id="description">cloudy</span>
            <br />
            Humidity: <strong id="humidity">66%</strong>, Wind:
            <strong id="windspeed">3.49km/h</strong>
          </p>
        </div>
        <div class="weather-app-temperature-container">
          <div id="icon"></div>
          <div class="weather-app-temperature" id="temperature">
            21
          </div>
          <div class="weatehr-app-unit">°C</div>
        </div>
      </main>
      <br />
      <footer>
        Coded by
        <a
          href="https://www.linkedin.com/in/beatrice-shipurwa-0b31401b9/"
          target="_blank"
        >
          BeatriceS
        </a>
        is
        <a href="https://github.com/Bea-manu?tab=repositories" target="_blank">
          open-source on Github
        </a>
        and
        <a
          href="https://app.netlify.com/signup/start/connect/repos"
          target="_blank"
        >
          hosted on Netlify.
        </a>
      </footer>
    </div>
  );
}
