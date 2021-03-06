const initState={
    data:[],
    text:' ',
    timerData:{
        hour:0,
        min:0,
        sec:0
}
};

export const rootReducer=(state=initState,action)=>{

    switch (action.type) {
        case 'All_Brewery':{
console.log(action.payload);
            return {
                ...state, 
                data:action.payload
            }
        }
        case 'Search_state' :{

            return {
                data:action.payload,
                text:action.search_text,
                timerData: {...action.timerData}
            }

        }
            
    
        default:
            return state;
    }
}
 