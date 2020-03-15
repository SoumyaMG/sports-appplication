const playersReducer=(state=[],action)=>{
    switch(action.type)
    {
        case 'LIST_PLAYERS': 
                return [...action.payload]

        case 'CREATE_PLAYER':
                return [...state,action.payload]

        case 'REMOVE_PLAYER':
                return state.filter((player)=>{
                    return player._id !== action.payload
                })
        default:
            return [...state]
    }
}

export default playersReducer