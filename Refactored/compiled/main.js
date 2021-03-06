'use strict';

var _weather = require('/endpoints/weather.js');

var _films = require('/endpoints/films.js');

var _utils = require('/utils/utils.js');

var form = document.getElementById('form_id');
// Adds a listener for the "submit" event.
form.addEventListener('submit', function (e) {
  e.preventDefault();
});

window.addEventListener('load', _utils.fetchTimer);
window.addEventListener('load', _films.getApiResp);

_weather.geolocationButton.addEventListener('click', _weather.getGeolocation);
_weather.weatherButton.addEventListener("click", _weather.getLocationWeather);