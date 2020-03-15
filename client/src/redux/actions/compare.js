export const startComparePlayersAdd=(player)=>{
    return (dispatch)=>{
        dispatch(comparePlayersAdd(player))
    }
}

export const comparePlayersAdd=(player)=>{
    return {
        type:'COMPARE_PLAYERS_ADD',
        payload:player
    }
}

export const startComparePlayersRemove=(id)=>{
    return (dispatch)=>{
        dispatch(comparePlayersRemove(id))
    }
}

export const comparePlayersRemove=(id)=>{
    return {
        type:'COMPARE_PLAYERS_REMOVE',
        payload:id
    }
}