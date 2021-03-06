/*$('#IF1').on('click', function (e) {
	$(this).hide();
	$('#vid-container').show();
});*/

document.getElementById('IF1').addEventListener('click', function() {
	this.style.display = 'none';
	document.getElementById('vid-container').style.display = 'block';
});

$('#carouselExampleIndicators').on('slide.bs.carousel', function(event) {
	let next = event.relatedTarget;
	let toShow, toHide;

	let nextId = $(next).data().slideid;

	let currId = nextId - 1 >= 0 ? nextId - 1 : 2	;
	
	toShow = `#carousel-data-${nextId}`;
	toHide = `#carousel-data-${currId}`;

	$(toHide).hide();
	$(toShow).show();
})

// $('#carouselExampleIndicators').on('slid.bs.carousel', function(event) {
// 	debugger;
// })