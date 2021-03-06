let fetchData= (url)=>{

	// try{

let resp = fetch(url)
.then(value => value.json())
.then(value => {
    console.log(value);
    return value;
}, reason => {
    console.log(reason);
});
    // let data=await resp.json();
    // console.log(data);
	// return data;
return resp;
// }

// 	catch(err) {
//     // catches errors both in fetch and response.json
//     console.log("error is:",err);
        
//   }
}

export default fetchData;