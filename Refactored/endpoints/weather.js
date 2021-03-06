import {fetchData} from '/utils/utils.js';

	let apikey= "41f69048673af9a1c144fea8eb3e7162";
	let units="metric";
	let geolocationButton=document.getElementById("geotag");
	let weatherButton=document.getElementById("count_name");
	let weathercontainer=document.getElementById("weatherContainer");
  let tagText=document.getElementById("country_value");


	let dateConverter=(UNIX_timestamp)=>{

	let a = new Date(UNIX_timestamp * 1000);
	let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
	let year = a.getFullYear();
	let month = months[a.getMonth()];
	let date = a.getDate();
	let hour = a.getHours();
	let min = a.getMinutes();
	let sec = a.getSeconds();
	let time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
	return time;

}


  let getWeather=(respdata)=>{

	console.log(respdata.weather[0]);
	let a=respdata.sys.sunset;
	let b=respdata.sys.sunrise;
	let sunR=dateConverter(b);
	console.log(sunR);
	let sunrise=document.getElementById("sunrise");
	let weatherDesc=document.getElementById("weatherDescription");
	let country =document.getElementById("country-name");
	let temperature=document.getElementById("temp");
	let humidityElement =document.getElementById('humidity');
	let windSpeedElement =document.getElementById('windSpeed');
	let weatherIcon =document.getElementById('documentIconImg');
	let mainDiv= document.getElementById("weather-details");
  
  weathercontainer.style.visibility="visible";
	weatherIcon.src = 'http://openweathermap.org/img/w/' + respdata.weather[0].icon + '.png';

	switch(respdata.weather[0].main) {
		case 'Clear':
		mainDiv.style.backgroundImage = "url('file:///C:/Users/DivyanshAgarwal/Downloads/clear.jpg')";
		break;

		case 'Clouds':
		mainDiv.style.backgroundImage = "url('file:///C:/Users/DivyanshAgarwal/Downloads/cloud.jpg')";
		break;

		case 'Rain':
		case 'Drizzle':
		case 'Mist':
		mainDiv.style.backgroundImage = "url('file:///C:/Users/DivyanshAgarwal/Downloads/rain.jpg')";
		break;

		case 'Thunderstorm':
		mainDiv.style.backgroundImage = "url('file:///C:/Users/DivyanshAgarwal/Downloads/weather.jpg')";
		break;

		case 'Snow':
		mainDiv.style.backgroundImage = "url('file:///C:/Users/DivyanshAgarwal/Downloads/mist.jpg')";
		break;

		default:
		break;
    
  }

  country.innerHTML=respdata.name;
  let wResult =respdata.weather[0].description;
  weatherDesc.innerHTML=wResult.charAt(0).toUpperCase() + wResult.slice(1);
  let convertion=Math.floor(respdata.main.temp);   
  temperature.innerHTML= (convertion +'&#176;' + 'c');
  humidityElement.innerHTML = 'Humidity levels at ' + respdata.main.humidity +  '%';
  windSpeedElement.innerHTML = 'Winds at ' + Math.floor(respdata.wind.speed) + ' m/s';
  sunrise.innerHTML="Sunrise:" + sunR;
  tagText.value='';

};


	let getGeolocation =() =>{
			const locCordinates={};
			navigator.geolocation.getCurrentPosition(function(position) {

			// Get the coordinates of the current possition.
			locCordinates["lat"] = position.coords.latitude;
	    locCordinates["lng"] = position.coords.longitude;
	    console.log(locCordinates);
	    let location =`https://api.openweathermap.org/data/2.5/weather?lat=${locCordinates.lat}&lon=${locCordinates.lng}&APPID=${apikey}&units=${units}`;
	    
	    // fetchWeatherApiCall here
	    fetchData(location).then(getWeather);


	  });

}

 let getLocationWeather=()=>{

	let countryUrl=`https://api.openweathermap.org/data/2.5/weather?q=${tagText.value}&APPID=${apikey}&units=${units}`;
	console.log(countryUrl);
	fetchData(countryUrl).then(getWeather);
};

export{getGeolocation,getLocationWeather,geolocationButton,weatherButton};



