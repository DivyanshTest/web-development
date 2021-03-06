import firebaseConfig from '/auth/auth.js';


let collectionName="textvalues";

console.log(firebaseConfig.firebaseConfig);
firebase.initializeApp(firebaseConfig.firebaseConfig);
const db = firebase.firestore();



 let pagetime= (doc)=>{
	let hour=doc.data().hour;
	let min= doc.data().mins;
	let sec= doc.data().sec;
	setInterval(() => {
		sec++;
		if (sec>59) 
		{

			sec=0;
			min++;
			if (min>59) {
				min=0;
				hour++;

			}
		}
		let timevalue=(hour > 9 ? hour : '0'+hour)+':'+(min > 9 ? min : '0'+min)+':'+(sec > 9 ? sec : '0'+sec);
		let tag2= document.getElementById("T1");
		tag2.innerHTML=timevalue;
		let id=doc.id;
		db.collection('timer').doc(id).update({ hour: hour, min: min, sec: sec })

	}, 1000);


}

let fetchTimer = () =>{
	db.collection('timer').get().then((snapshot)=> {
		/*console.log(snapshot.docs);*/
		snapshot.docs.forEach(doc=>{
			console.log(doc.data());
			pagetime(doc);
		});
	});

}



let fetchData= async (url)=>{

	try{

	let resp=await fetch(url);
	let data=await resp.json();
	return data;

}

	catch(err) {
    // catches errors both in fetch and response.json
    console.log("error is:",err);
    /*alert(err);*/
  }
}



export{fetchTimer,fetchData,pagetime};
