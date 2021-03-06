import fetchData from '../Utility/fetchData'


export   const fetchList=()=>{
    let url='https://api.openbrewerydb.org/breweries';

     return function(dispatch, getState){

    // let resp= await fetch(url);
    // let response=await resp.json();
    
    let response = fetchData(url).then(data => {
        console.log(data);
        //  console.log(response);
        dispatch({
            type:'All_Brewery',
            payload:data
        });
    });
    
}
        
}



export const SearchList=(stateName,timerData)=>{
    const url=`https://api.openbrewerydb.org/breweries?by_state=${stateName}` ;
    console.log(url);
    return function(dispatch, getState){

        let response1 = fetchData(url).then(data => {
            console.log(data); 
            dispatch({
                type:'Search_state',
                payload:data,
                search_text:stateName,
                timerData
            });
        });
    }

}

