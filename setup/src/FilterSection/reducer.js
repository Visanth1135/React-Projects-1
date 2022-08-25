

export const filterReducer = (state,action)=>{

    switch (action.type) {
        case 'NO_FILTERS':
            if(state.filter){
                return {filter:[]}
            }
        case 'CATEGORY': 
            if(state.filter.includes(action.payload)){ 
                return {filter:state.filter.filter((i)=>i!==action.payload)
                        
                } 
            }
            else{
                console.log(state)
                return {filter:[...state.filter,action.payload],
                    filteredProducts:state.products.filter((p)=>p.category===action.payload)
                }
            }
        case 'BRAND': 
            if(state.filter.includes(action.payload)){ 
                return{filter:state.filter.filter((i)=>i!==action.payload)} 
            }
            else{
                return {filter:[...state.filter,action.payload]}
            }
        case 'COLOUR': 
            if(state.filter.includes(action.payload)){ 
                return{filter:state.filter.filter((i)=>i!==action.payload)} 
            }
            else{
                return {filter:[...state.filter,action.payload]}
            }
        case 'SIZE': 
            if(state.filter.includes(action.payload)){ 
                return{filter:state.filter.filter((i)=>i!==action.payload)} 
            }
            else{
                return {filter:[...state.filter,action.payload]}
            }
            
    
        default:
           return state;
    }
}