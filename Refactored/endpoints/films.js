import {fetchData} from '/utils/utils.js';


		let Url="https://swapi.co/api/films";
		var details=document.getElementById('film_detail');
		var drpDown=document.getElementById('dp-1');

		let getFilms=(response)=>{

		console.log(response["results"]);
		let filmListContainer = document.getElementById('film-container');
	  
	
	  response.results.forEach((film) => {
		let childNode = document.createElement('div');
		let titleNode = document.createElement('LI');
		let detailsNode = document.createElement('div');
		let that = titleNode;

		titleNode.innerHTML = film.title.link("");
		titleNode.setAttribute('filmId', film.episode_id)
		detailsNode.id = `film-${film.episode_id}`;

		titleNode.addEventListener('click', (event) => {
			//to prevet tne refresh after click in title
		event.preventDefault();
		details.style.visibility="visible";
		let filmId = that.getAttribute('filmId');
		let detailsContainer = document.getElementById(`film-${filmId}`);
			
		if (detailsNode.style.display === "none") {
			detailsNode.style.display = "block";
		} 
		else {
				detailsNode.style.display = "none";

		}

		});

		// set film details and then hide it
		let x =document.createElement('HR');
		let y =document.createElement('BR');
		x.style.border="2px solid black";
		let span1=document.createElement("strong");
		let episodeTitle= document.createTextNode(`Title: ${film.title}`);
		let filmEpisodeIdNode = document.createTextNode(`Position is anthology: ${film.episode_id}`);
		span1.appendChild(filmEpisodeIdNode);
		let filmOpeningCrawlNode = document.createTextNode(`Opening crawl: ${film.opening_crawl}`);
		let filmDirectorNode = document.createTextNode(`Director: ${film.director}`);
		let filmProducerNode = document.createTextNode(`Producer: ${film.producer}`);
		let filmReleaseDateNode = document.createTextNode(`Release Date: ${film.release_date}`);

		detailsNode.appendChild(episodeTitle);
		detailsNode.appendChild(y);	
		detailsNode.appendChild(span1);
		detailsNode.appendChild(filmOpeningCrawlNode);
		detailsNode.appendChild(filmDirectorNode);
		detailsNode.appendChild(filmProducerNode);
		detailsNode.appendChild(filmReleaseDateNode);
		detailsNode.appendChild(x);
		detailsNode.setAttribute('style', 'display: none;');

		childNode.appendChild(detailsNode);
		details.appendChild(childNode);
		drpDown.appendChild(titleNode);
		
		});
		};



	let getApiResp= ()=>{

		fetchData(Url).then(getFilms);

}

export{getApiResp,getFilms};