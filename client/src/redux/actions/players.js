import axios from '../../config/axios'

export const startListPlayers=()=>{
    return (dispatch)=>{
        axios.get('/players')
        .then((response)=>{
            dispatch(listPlayers(response.data))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const listPlayers=(players)=>{
    return {
        type:'LIST_PLAYERS',
        payload:players
    }
}

export const startPlayerAdd=(player)=>{
    return (dispatch)=>{
        axios.post('/players',player,{
            headers: {
                'x-auth': localStorage.getItem('userAuth')
            }
        })
            .then((response)=>{
                dispatch(addPlayer(response.data))
            })
            .catch((err)=>{
                console.log(err)
            })
    }
}

export const addPlayer=(player)=>{
    return {
        type:'CREATE_PLAYER',
        payload:player
    }
}

export const startPlayerRemove=(id)=>{
    return (dispatch)=>{
        axios.delete(`/players/${id}`,{
            headers: {
                'x-auth': localStorage.getItem('userAuth')
            }
        })
            .then((resonse)=>{
                dispatch(removePlayer(id))
            })
            .catch((err)=>{
                console.log(err)
            })
    }
}

export const removePlayer=(id)=>{
    return{
        type:'REMOVE_PLAYER',
        payload:id
    }
}