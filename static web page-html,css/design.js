/*var show= (elem) =>{  
    elem.style.display="block";
}
var hide =(elem)=>{ 
    elem.style.display=""; 
}*/

var hover=document.getElementById("img1");
var image_tag=document.getElementById("vans");
var hovertext="inception";

var hoverFunction=()=>{
	console.log("inside the tag");
var tag=document.createElement("span");
tag.appendChild(document.createTextNode("inception"));
tag.setAttribute("id", "hovertext_1");
hover.appendChild(tag);
}

var hide =()=>{
var tag = document.getElementById('hovertext_1')
hover.removeChild(tag) 

}

image_tag.addEventListener("mouseover", hoverFunction);
image_tag.addEventListener("mouseout", hide);
