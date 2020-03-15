import React from 'react'
import {connect} from 'react-redux'

function Compare(props){
    console.log(props)
    return (
        <div>
            {
                (props.players_to_compare.length<=0)?(
                    <div>
                        {
                            props.history.push('/')
                        }
                    </div>
                ):(
                    <div>
                            <table border="border">
                        <thead>
                            <tr>
                                <th>Statistics</th>
                                {
                                    props.players_to_compare.map((player)=>{
                                        
                                        return <th key={player._id}>{player.name}</th>
                                    })   
                                }
                            </tr>
                        </thead>
                        <tbody>
                        {
                            Object.keys(props.players_to_compare[0].stats).map((stat,index)=>{
                                return <tr key={index}><td>{stat}</td>
                                    {
                                        props.players_to_compare.map((player)=>{
                                        return (
                                            <td key={player._id}>{player.stats[stat]}</td>
                                        )
                                    })}
                                </tr>
                            })
                        }
                        </tbody>
                    </table><br/>
                    <button onClick={()=>{
                        window.location.reload()
                        props.history.push('/')
                    }}>Back</button>
                </div>
                )
            }
        </div>
    )
}

const mapStateToProps=(state)=>{
    return {
        players:state.players,
        players_to_compare:state.players.filter((player)=>{
            for(let i=0;i<state.compare.length;i++)
            {
                if(player._id===state.compare[i])
                {
                    return player
                }    
            }
        })
    }
}

export default connect(mapStateToProps)(Compare)