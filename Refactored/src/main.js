import {getGeolocation,getLocationWeather,geolocationButton,weatherButton} from '/endpoints/weather.js';

import {getApiResp,getFilms} from '/endpoints/films.js';

import {fetchTimer,pagetime} from '/utils/utils.js';




let form = document.getElementById('form_id');	
// Adds a listener for the "submit" event.
form.addEventListener('submit', function(e) {
e.preventDefault();

});


window.addEventListener('load',fetchTimer);
window.addEventListener('load', getApiResp);

geolocationButton.addEventListener('click',getGeolocation);
weatherButton.addEventListener("click", getLocationWeather);