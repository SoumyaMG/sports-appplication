const compareReducer=(state=[],action)=>
{
    switch(action.type){
        case 'COMPARE_PLAYERS_ADD':
            return [...state,action.payload]
        case 'COMPARE_PLAYERS_REMOVE':
            return state.filter((id)=>{
                return id !== action.payload
            })
        default:
            return [...state]
    }
}

export default compareReducer