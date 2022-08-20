export const filterReducer = (state,action)=>{
    console.log(action.payload)
    switch (action.type) {
        case 'NO_FILTERS':
            return {products:action.payload}
        case 'FAST_DELIVERY': 
            return {products:action.payload.filter((p)=>p.fastDelivery==true)}
    
        default:
           return state;
    }
}