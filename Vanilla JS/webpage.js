/*import firebaseconfig from './config/firebaseconfig';*/
var tag1= document.getElementById("timer");
var tagFB= document.getElementById("T2");
var tag2= document.getElementById("T1");
var tag3=document.getElementById("b1");
var tag4=document.getElementById("b2");
var tag5=document.getElementById("film_detail");
var buttonclick=document.getElementById("count_name");
var tagTextValue=document.getElementById("country_value");
var geolocationButton=document.getElementById("geotag");
var dataDump = {};


var form = document.getElementById('form_id');	
// Adds a listener for the "submit" event.
form.addEventListener('submit', function(e) {

	e.preventDefault();
});
let filmData, peopleData;

/*var Fbconfig=()=>{
	*/

	


/*const dbref=firebase.database().ref();
dbref.on('value', (snap)=> console.log(snap.val()));*/
/*.where('type' ,'==', 'WebApp')*/

db.collection('textvalues').get().then((snapshot)=> {
	console.log(snapshot.docs);

	snapshot.docs.forEach(doc=>{
		console.log(doc.data());
		console.log(doc.id);
	/*var a=[];
	a.push(doc.id);*/
	/*console.log(a);*/

	tagFB.setAttribute('date-id', doc.id);
	tagFB.innerHTML=doc.data().type;
})
});

delay();
function delay(){setInterval(()=>db.collection('textvalues').doc("pXTMVllJy0Ua6UvQMZyP").update({type:`${new Date()}`})
	,5000);

}

db.collection('textvalues').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    console.log(changes);
    changes.forEach(change => {
        console.log(change.doc.data().type);
        if(change.type == 'modified'){
        	tagFB.innerHTML=change.doc.data().type;
}

});

});	

db.collection('timer').get().then((snapshot)=> {
	console.log(snapshot.docs);
	snapshot.docs.forEach(doc=>{
		console.log(doc.data());
		pagetime(doc);
	});
});


let pagetime= (doc)=>{
	var hour=doc.data().hour;
	var min= doc.data().mins;
	var sec= doc.data().sec;


console.log("inside the time interval");
setInterval(()=>{
	/*let currTimeOther = new Date();*/
	sec++;
	if (sec>59) {

		sec=0;
		min++;
		if (min>59) {
			min=0;
			hour++;

		}
	}
	var timevalue=(hour > 9 ? hour : '0'+hour)+':'+(min > 9 ? min : '0'+min)+':'+(sec > 9 ? sec : '0'+sec);
	tag2.innerHTML=timevalue;
	db.collection('timer').doc("GnHXgIA000vnnfHLBANU").update({ hour: hour, min: min, sec: sec })

}, 1000);


}
window.addEventListener('load',pagetime);


let loadUrl = (url, callback) => {
	let xhr=new XMLHttpRequest();
	if (true) {}
		xhr.open('GET', url);
	console.log('READYSTATE: ', xhr.readyState);

	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			console.log(xhr.response);
			if(xhr.status == 200 || xhr.responseType === "text"){

				data=JSON.parse(xhr.responseText);
				console.log("response:",data["results"]);

				callback(data);
				/*dataDump=data.results;*/
	      		/*dataDump[keyname] = data.results;
	      		console.log(dataDump);*/
	      		
	      	}

	      }
	    }
	    xhr.send();
	  }

	  let loadFilmList = () => loadUrl("https://swapi.co/api/films", (films) => {
	  	let filmListContainer = document.getElementById('film-container');
	  	let details=document.getElementById('film_detail');
	// clearing the div so that multiple button clicks remain the same
	filmListContainer.innerHTML = "";
	
	films.results.forEach((film) => {
		let childNode = document.createElement('div');
		let titleNode = document.createElement('div');
		let detailsNode = document.createElement('div');
		let that = titleNode;

		titleNode.innerHTML = film.title.link("");
		titleNode.setAttribute('filmId', film.episode_id)
		detailsNode.id = `film-${film.episode_id}`;

		titleNode.addEventListener('click', (event) => {
			//to prevet tne refresh after click in title
			event.preventDefault();
			//toggle detail visibility
			// debugger
			// let style = that.getAttr(style);
			let filmId = that.getAttribute('filmId');
			let detailsContainer = document.getElementById(`film-${filmId}`);
			

			if (detailsNode.style.display === "none") {
				detailsNode.style.display = "block";
			} else {
				detailsNode.style.display = "none";

			}
		});

		// set film details and then hide it
		let filmEpisodeIdNode = document.createTextNode(`Position is anthology: ${film.episode_id}`);
		let filmOpeningCrawlNode = document.createTextNode(`Opening crawl: ${film.opening_crawl}`);
		let filmDirectorNode = document.createTextNode(`Director: ${film.director}`);
		let filmProducerNode = document.createTextNode(`Producer: ${film.producer}`);
		let filmReleaseDateNode = document.createTextNode(`Release Date: ${film.release_date}`);

		detailsNode.appendChild(filmEpisodeIdNode);
		detailsNode.appendChild(filmOpeningCrawlNode);
		detailsNode.appendChild(filmDirectorNode);
		detailsNode.appendChild(filmProducerNode);
		detailsNode.appendChild(filmReleaseDateNode);

		detailsNode.setAttribute('style', 'display: none;');

/*		childNode.appendChild(titleNode);

*/		
childNode.appendChild(detailsNode);
details.appendChild(childNode);
filmListContainer.appendChild(titleNode);
});
});

	  let loadActor = () => loadUrl("https://swapi.co/api/films", 'filmList');

	  window.addEventListener('load', loadFilmList);


	  /*WEATHER API */


/*let date converter=(unix date)=>{
let nweTime= new date(unix date * 1000);



}*/

//geo loaction api
function getGeolocation(){
	let locCordinates={};

	navigator.geolocation.getCurrentPosition(function(position) {

	    // Get the coordinates of the current possition.
	    locCordinates["lat"] = position.coords.latitude;
	    locCordinates["lng"] = position.coords.longitude;
	    console.log(locCordinates);
	    loadWeather(locCordinates);

	  });

}
geolocationButton.addEventListener('click',getGeolocation);

/*
let param={
location:{
	b:1
},
country:{
	:
}


}*/


let Weather =(url, params,callback)=>{
	console.log(url)


// let value1=tagTextValue.value;
let apikey= "41f69048673af9a1c144fea8eb3e7162";
let units="metric";
let xhr=new XMLHttpRequest();
/*	console.log(`${url}?q=${value1}&APPID=${apikey}&units=${units}`);*/

	// let points=locCordinates();	

	let urlToSend = null;	

	if (params.q != null) {
		urlToSend = `${url}?q=${params.q}&APPID=${apikey}&units=${units}`
	} else {
		urlToSend = `${url}?lat=${params.lat}&lon=${params.lng}&APPID=${apikey}&units=${units}`
	}

	xhr.open('GET', urlToSend);
	console.log('READYSTATE: ', xhr.readyState);

	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			console.log(xhr.response);
			if(xhr.status == 200 || xhr.responseType === "text"){

				data=JSON.parse(xhr.responseText);
				console.log("response:",data["weather"]);

				callback(data);


			}

		}
	}
	xhr.send();
}

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


let loadWeather= (params) => Weather("https://api.openweathermap.org/data/2.5/weather", params,(respData=>{
	console.log(respData.weather[0].main);
	let a=respData.sys.sunset;
	let b=respData.sys.sunrise;
	let sunR=dateConverter(b);
	console.log(sunR);
	let Sunrise=document.getElementById("sunrise");
	let wetherDesc=document.getElementById("weatherDescription");
	let country =   document.getElementById("country-name");
	let temperature=document.getElementById("temp");
	let humidityElement = document.getElementById('humidity');
	let windSpeedElement = document.getElementById('windSpeed');
	let weatherIcon = document.getElementById('documentIconImg');
	let mainDiv=document.getElementById("weather-details");
	mainDiv.style.marginTop = "50px";


	weatherIcon.src = 'http://openweathermap.org/img/w/' + respData.weather[0].icon + '.png';

	switch(respData.weather[0].main) {
		case 'Clear':
		mainDiv.style.backgroundImage = "url('file:///C:/Users/DivyanshAgarwal/Downloads/clear.jpg')";
		break;

		case 'Clouds':
		mainDiv.style.backgroundImage = "url('file:///C:/Users/DivyanshAgarwal/Downloads/cloud.jpg')";
		break;

		case 'Rain':
		case 'Drizzle':
		case 'Mist':
		/*mainDiv.style.backgroundImage = "url('file:///C:/Users/DivyanshAgarwal/Downloads/rain.jpg')";*/
		break;

		case 'Thunderstorm':
		mainDiv.style.backgroundImage = "url('file:///C:/Users/DivyanshAgarwal/Downloads/weather.jpg')";
		break;

		case 'Snow':
		mainDiv.style.backgroundImage = "url('file:///C:/Users/DivyanshAgarwal/Downloads/mist.jpg')";
		break;

		default:
		break;
    // code block
  }
  country.innerHTML=respData.name;
  let wResult =respData.weather[0].description;
  weatherDescription.innerHTML=wResult.charAt(0).toUpperCase() + wResult.slice(1);
  let convertion=Math.floor(respData.main.temp);   
  temperature.innerHTML= (convertion +'&#176;' + 'c');
  humidityElement.innerHTML = 'Humidity levels at ' + respData.main.humidity +  '%';
  windSpeedElement.innerHTML = 'Winds at  ' + Math.floor(respData.wind.speed) + ' m/s';
  Sunrise.innerHTML="Sunrise:" + sunR;

  tagTextValue.value='';


}));



buttonclick.addEventListener("click", () => loadWeather({q: tagTextValue.value}));

// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}
// api.openweathermap.org/data/2.5/weather?q={place}
